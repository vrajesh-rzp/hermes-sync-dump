import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { loadGraph } from '../lib/data'
import type { GraphNode, GraphLink } from '../types'

export default function KnowledgeGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [filter, setFilter] = useState<string>('all')
  const [selected, setSelected] = useState<GraphNode | null>(null)

  useEffect(() => {
    loadGraph().then((data) => {
      if (!svgRef.current) return

      const svg = d3.select(svgRef.current)
      svg.selectAll('*').remove()

      const width = svgRef.current.clientWidth
      const height = svgRef.current.clientHeight

      const filteredNodes = filter === 'all' ? data.nodes : data.nodes.filter(n => n.type === filter)
      const nodeIds = new Set(filteredNodes.map(n => n.id))
      const filteredLinks = data.links.filter(l => nodeIds.has(l.source as string) && nodeIds.has(l.target as string))

      const simulation = d3.forceSimulation(filteredNodes as d3.SimulationNodeDatum[])
        .force('link', d3.forceLink(filteredLinks).id((d: unknown) => (d as GraphNode).id).distance(80))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2))

      const g = svg.append('g')

      // Zoom
      svg.call(d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.3, 3]).on('zoom', (event) => {
        g.attr('transform', event.transform)
      }) as unknown as (selection: d3.Selection<SVGSVGElement, unknown, null, undefined>) => void)

      const link = g.append('g').selectAll('line')
        .data(filteredLinks)
        .join('line')
        .attr('stroke', '#4b5563')
        .attr('stroke-width', 1.5)
        .attr('stroke-opacity', 0.6)

      const nodeColor = (type: string) => {
        switch (type) {
          case 'person': return '#3b82f6'
          case 'project': return '#22c55e'
          case 'concept': return '#a855f7'
          case 'meeting': return '#f59e0b'
          case 'document': return '#06b6d4'
          case 'decision': return '#ef4444'
          default: return '#6b7280'
        }
      }

      const node = g.append('g').selectAll('circle')
        .data(filteredNodes)
        .join('circle')
        .attr('r', 10)
        .attr('fill', (d) => nodeColor(d.type))
        .attr('stroke', '#1f2937')
        .attr('stroke-width', 2)
        .attr('cursor', 'pointer')
        .on('click', (_event, d) => setSelected(d))

      // Apply drag behavior with type assertion
      const dragBehavior = d3.drag<SVGCircleElement, GraphNode>()
        .on('start', (event, d: unknown) => { if (!event.active) simulation.alphaTarget(0.3).restart(); (d as d3.SimulationNodeDatum).fx = (d as d3.SimulationNodeDatum).x; (d as d3.SimulationNodeDatum).fy = (d as d3.SimulationNodeDatum).y })
        .on('drag', (event, d: unknown) => { (d as d3.SimulationNodeDatum).fx = event.x; (d as d3.SimulationNodeDatum).fy = event.y })
        .on('end', (event, d: unknown) => { if (!event.active) simulation.alphaTarget(0); (d as d3.SimulationNodeDatum).fx = null; (d as d3.SimulationNodeDatum).fy = null })
      // @ts-expect-error d3 drag typing mismatch with selection
      node.call(dragBehavior)

      const label = g.append('g').selectAll('text')
        .data(filteredNodes)
        .join('text')
        .text((d) => d.label)
        .attr('font-size', 10)
        .attr('fill', '#d1d5db')
        .attr('dx', 14)
        .attr('dy', 4)

      simulation.on('tick', () => {
        link
          .attr('x1', (d: unknown) => ((d as { source: d3.SimulationNodeDatum }).source.x ?? 0))
          .attr('y1', (d: unknown) => ((d as { source: d3.SimulationNodeDatum }).source.y ?? 0))
          .attr('x2', (d: unknown) => ((d as { target: d3.SimulationNodeDatum }).target.x ?? 0))
          .attr('y2', (d: unknown) => ((d as { target: d3.SimulationNodeDatum }).target.y ?? 0))
        node
          .attr('cx', (d: unknown) => ((d as d3.SimulationNodeDatum).x ?? 0))
          .attr('cy', (d: unknown) => ((d as d3.SimulationNodeDatum).y ?? 0))
        label
          .attr('x', (d: unknown) => ((d as d3.SimulationNodeDatum).x ?? 0))
          .attr('y', (d: unknown) => ((d as d3.SimulationNodeDatum).y ?? 0))
      })

      return () => { simulation.stop() }
    })
  }, [filter])

  return (
    <div className="space-y-4 h-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-100">Knowledge Graph</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 text-sm"
        >
          <option value="all">All Types</option>
          <option value="person">People</option>
          <option value="project">Projects</option>
          <option value="concept">Concepts</option>
          <option value="meeting">Meetings</option>
          <option value="document">Documents</option>
        </select>
      </div>

      <div className="flex gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block" /> Person</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500 inline-block" /> Project</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-500 inline-block" /> Concept</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> Meeting</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-cyan-500 inline-block" /> Document</span>
      </div>

      <div className="relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <svg ref={svgRef} width="100%" height="100%" />
        {selected && (
          <div className="absolute top-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-xs">
            <h3 className="font-semibold text-gray-200">{selected.label}</h3>
            <p className="text-xs text-gray-400 capitalize mt-1">Type: {selected.type}</p>
            <button onClick={() => setSelected(null)} className="text-xs text-indigo-400 mt-2 hover:underline">Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
