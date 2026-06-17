import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { loadPeople } from '../lib/data'
import type { Person } from '../types'

export default function PeopleMap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selected, setSelected] = useState<Person | null>(null)
  const [people, setPeople] = useState<Person[]>([])

  useEffect(() => {
    loadPeople().then((data) => {
      setPeople(data)
      if (!svgRef.current) return

      const svg = d3.select(svgRef.current)
      svg.selectAll('*').remove()

      const width = svgRef.current.clientWidth
      const height = svgRef.current.clientHeight

      // Create links between people who share the same team or have meetings together
      const links: { source: string; target: string; weight: number }[] = []
      for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].team === data[j].team) {
            links.push({ source: data[i].id, target: data[j].id, weight: Math.min(data[i].meetings, data[j].meetings) })
          }
        }
      }
      // Connect everyone to vrajesh
      data.forEach(p => {
        if (p.id !== 'vrajesh' && !links.find(l => (l.source === 'vrajesh' && l.target === p.id) || (l.target === 'vrajesh' && l.source === p.id))) {
          links.push({ source: 'vrajesh', target: p.id, weight: p.meetings })
        }
      })

      const simulation = d3.forceSimulation(data as unknown as d3.SimulationNodeDatum[])
        .force('link', d3.forceLink(links).id((d: unknown) => (d as Person).id).distance(100))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius(30))

      const g = svg.append('g')

      svg.call(d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.3, 3]).on('zoom', (event) => {
        g.attr('transform', event.transform)
      }) as unknown as (selection: d3.Selection<SVGSVGElement, unknown, null, undefined>) => void)

      g.append('g').selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', '#4b5563')
        .attr('stroke-width', (d) => Math.max(1, d.weight / 5))
        .attr('stroke-opacity', 0.5)

      const nodeG = g.append('g').selectAll('g')
        .data(data)
        .join('g')
        .attr('cursor', 'pointer')
        .on('click', (_event, d) => setSelected(d))

      nodeG.append('circle')
        .attr('r', (d) => d.id === 'vrajesh' ? 18 : 12)
        .attr('fill', (d) => d.id === 'vrajesh' ? '#6366f1' : '#3b82f6')
        .attr('stroke', '#1f2937')
        .attr('stroke-width', 2)

      nodeG.append('text')
        .text((d) => d.name.split(' ')[0])
        .attr('font-size', 10)
        .attr('fill', '#d1d5db')
        .attr('text-anchor', 'middle')
        .attr('dy', 28)

      simulation.on('tick', () => {
        g.selectAll('line')
          .attr('x1', (d: unknown) => ((d as { source: d3.SimulationNodeDatum }).source.x ?? 0))
          .attr('y1', (d: unknown) => ((d as { source: d3.SimulationNodeDatum }).source.y ?? 0))
          .attr('x2', (d: unknown) => ((d as { target: d3.SimulationNodeDatum }).target.x ?? 0))
          .attr('y2', (d: unknown) => ((d as { target: d3.SimulationNodeDatum }).target.y ?? 0))
        nodeG.attr('transform', (d: unknown) => `translate(${(d as d3.SimulationNodeDatum).x ?? 0},${(d as d3.SimulationNodeDatum).y ?? 0})`)
      })

      return () => { simulation.stop() }
    })
  }, [])

  return (
    <div className="space-y-4 h-full">
      <h1 className="text-2xl font-bold text-gray-100">People Map</h1>
      <p className="text-sm text-gray-400">Centered on you. Connections based on shared meetings and team.</p>

      <div className="relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
        <svg ref={svgRef} width="100%" height="100%" />
        {selected && (
          <div className="absolute top-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-xs">
            <h3 className="font-semibold text-gray-200">{selected.name}</h3>
            <div className="mt-2 space-y-1 text-sm text-gray-400">
              {selected.role && <p>Role: {selected.role}</p>}
              {selected.team && <p>Team: {selected.team}</p>}
              <p>Meetings: {selected.meetings}</p>
              {selected.lastInteraction && <p>Last interaction: {selected.lastInteraction}</p>}
            </div>
            <button onClick={() => setSelected(null)} className="text-xs text-indigo-400 mt-3 hover:underline">Close</button>
          </div>
        )}
      </div>

      {/* People list */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
        <h2 className="text-sm font-semibold text-gray-300 mb-3">All People ({people.length})</h2>
        <div className="grid grid-cols-2 gap-2">
          {people.map(p => (
            <div key={p.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-900 text-sm">
              <span className="text-gray-200">{p.name}</span>
              <span className="text-xs text-gray-500">{p.meetings} meetings</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
