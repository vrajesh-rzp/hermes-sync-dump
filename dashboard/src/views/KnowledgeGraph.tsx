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

      // Add defs for glows
      const defs = svg.append('defs')

      // Node glow filters per type
      const nodeColors: Record<string, string> = {
        person: '#3b82f6',
        project: '#22c55e',
        concept: '#a855f7',
        meeting: '#f59e0b',
        document: '#06b6d4',
        decision: '#ef4444',
      }

      Object.entries(nodeColors).forEach(([type, color]) => {
        const filter = defs.append('filter').attr('id', `glow-${type}`)
        filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'blur')
        filter.append('feFlood').attr('flood-color', color).attr('flood-opacity', '0.4').attr('result', 'color')
        filter.append('feComposite').attr('in', 'color').attr('in2', 'blur').attr('operator', 'in').attr('result', 'glow')
        const merge = filter.append('feMerge')
        merge.append('feMergeNode').attr('in', 'glow')
        merge.append('feMergeNode').attr('in', 'SourceGraphic')
      })

      // Animated gradient for links
      const linkGrad = defs.append('linearGradient')
        .attr('id', 'link-gradient')
        .attr('gradientUnits', 'userSpaceOnUse')
      linkGrad.append('stop').attr('offset', '0%').attr('stop-color', '#8b5cf6').attr('stop-opacity', 0.6)
      linkGrad.append('stop').attr('offset', '50%').attr('stop-color', '#06b6d4').attr('stop-opacity', 0.8)
      linkGrad.append('stop').attr('offset', '100%').attr('stop-color', '#8b5cf6').attr('stop-opacity', 0.6)

      const simulation = d3.forceSimulation(filteredNodes as d3.SimulationNodeDatum[])
        .force('link', d3.forceLink(filteredLinks).id((d: unknown) => (d as GraphNode).id).distance(80))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2))

      const g = svg.append('g')

      // Zoom
      svg.call(d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.3, 3]).on('zoom', (event) => {
        g.attr('transform', event.transform)
      }) as unknown as (selection: d3.Selection<SVGSVGElement, unknown, null, undefined>) => void)

      // Particle background
      const particleG = g.append('g').attr('class', 'particles')
      for (let i = 0; i < 30; i++) {
        particleG.append('circle')
          .attr('cx', Math.random() * width)
          .attr('cy', Math.random() * height)
          .attr('r', Math.random() * 1.5 + 0.5)
          .attr('fill', 'rgba(139, 92, 246, 0.2)')
          .attr('opacity', Math.random() * 0.5 + 0.2)
      }

      const link = g.append('g').selectAll('line')
        .data(filteredLinks)
        .join('line')
        .attr('stroke', 'rgba(139, 92, 246, 0.25)')
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '4,4')
        .style('animation', 'flowLine 1s linear infinite')

      const nodeColor = (type: string) => nodeColors[type] || '#6b7280'

      const node = g.append('g').selectAll('circle')
        .data(filteredNodes)
        .join('circle')
        .attr('r', 12)
        .attr('fill', (d) => nodeColor(d.type))
        .attr('stroke', (d) => nodeColor(d.type))
        .attr('stroke-width', 1)
        .attr('stroke-opacity', 0.4)
        .attr('filter', (d) => `url(#glow-${d.type})`)
        .attr('cursor', 'pointer')
        .attr('opacity', 0.9)
        .on('click', (_event, d) => setSelected(d))
        .on('mouseover', function() {
          d3.select(this).transition().duration(200).attr('r', 16).attr('opacity', 1)
        })
        .on('mouseout', function() {
          d3.select(this).transition().duration(200).attr('r', 12).attr('opacity', 0.9)
        })

      // Apply drag behavior
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
        .attr('font-family', 'Outfit, sans-serif')
        .attr('fill', '#cbd5e1')
        .attr('dx', 16)
        .attr('dy', 4)
        .attr('opacity', 0.8)

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

  const legendItems = [
    { type: 'person', label: 'Person', color: '#3b82f6' },
    { type: 'project', label: 'Project', color: '#22c55e' },
    { type: 'concept', label: 'Concept', color: '#a855f7' },
    { type: 'meeting', label: 'Meeting', color: '#f59e0b' },
    { type: 'document', label: 'Document', color: '#06b6d4' },
  ]

  return (
    <div className="space-y-4 h-full">
      <div className="flex items-center justify-between animate-fade-in-up">
        <h1 className="text-2xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>Knowledge Graph</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'var(--text-primary)',
          }}
        >
          <option value="all">All Types</option>
          <option value="person">People</option>
          <option value="project">Projects</option>
          <option value="concept">Concepts</option>
          <option value="meeting">Meetings</option>
          <option value="document">Documents</option>
        </select>
      </div>

      <div className="relative rounded-2xl overflow-hidden animate-fade-in-up delay-200" style={{
        height: 'calc(100vh - 200px)',
        background: 'rgba(5, 5, 15, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <svg ref={svgRef} width="100%" height="100%" />

        {/* Legend - floating glass panel */}
        <div className="absolute bottom-4 left-4 glass-panel p-3 flex gap-4">
          {legendItems.map(item => (
            <span key={item.type} className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-3 h-3 rounded-full inline-block" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}40` }} />
              {item.label}
            </span>
          ))}
        </div>

        {/* Selected node detail */}
        {selected && (
          <div className="absolute top-4 right-4 glass-panel p-5 max-w-xs animate-fade-in">
            <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{selected.label}</h3>
            <p className="text-xs capitalize mt-1" style={{ color: 'var(--text-dim)' }}>Type: {selected.type}</p>
            <button onClick={() => setSelected(null)} className="text-xs mt-3 hover:underline" style={{ color: 'var(--accent-cyan)' }}>Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
