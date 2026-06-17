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

      const defs = svg.append('defs')

      // Radial gradient for center node
      const centerGlow = defs.append('radialGradient').attr('id', 'center-glow')
      centerGlow.append('stop').attr('offset', '0%').attr('stop-color', '#8b5cf6').attr('stop-opacity', 1)
      centerGlow.append('stop').attr('offset', '70%').attr('stop-color', '#6366f1').attr('stop-opacity', 0.6)
      centerGlow.append('stop').attr('offset', '100%').attr('stop-color', '#4f46e5').attr('stop-opacity', 0.2)

      // Glow filter for center
      const glowFilter = defs.append('filter').attr('id', 'center-glow-filter')
      glowFilter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur')
      glowFilter.append('feFlood').attr('flood-color', '#8b5cf6').attr('flood-opacity', '0.3').attr('result', 'color')
      glowFilter.append('feComposite').attr('in', 'color').attr('in2', 'blur').attr('operator', 'in').attr('result', 'glow')
      const merge = glowFilter.append('feMerge')
      merge.append('feMergeNode').attr('in', 'glow')
      merge.append('feMergeNode').attr('in', 'SourceGraphic')

      // Links
      const links: { source: string; target: string; weight: number }[] = []
      for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
          if (data[i].team === data[j].team) {
            links.push({ source: data[i].id, target: data[j].id, weight: Math.min(data[i].meetings, data[j].meetings) })
          }
        }
      }
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

      // Connection lines with dash animation
      g.append('g').selectAll('line')
        .data(links)
        .join('line')
        .attr('stroke', 'rgba(139, 92, 246, 0.2)')
        .attr('stroke-width', (d) => Math.max(1, d.weight / 5))
        .attr('stroke-dasharray', '6,4')
        .style('animation', 'flowLine 2s linear infinite')

      const nodeG = g.append('g').selectAll('g')
        .data(data)
        .join('g')
        .attr('cursor', 'pointer')
        .on('click', (_event, d) => setSelected(d))

      // Node circles
      nodeG.append('circle')
        .attr('r', (d) => d.id === 'vrajesh' ? 20 : Math.max(8, Math.min(16, d.meetings * 2)))
        .attr('fill', (d) => d.id === 'vrajesh' ? 'url(#center-glow)' : '#3b82f6')
        .attr('stroke', (d) => d.id === 'vrajesh' ? '#a78bfa' : 'rgba(59, 130, 246, 0.4)')
        .attr('stroke-width', (d) => d.id === 'vrajesh' ? 2 : 1)
        .attr('filter', (d) => d.id === 'vrajesh' ? 'url(#center-glow-filter)' : '')
        .attr('opacity', (d) => d.id === 'vrajesh' ? 1 : 0.8)

      // Labels
      nodeG.append('text')
        .text((d) => d.name.split(' ')[0])
        .attr('font-size', 10)
        .attr('font-family', 'Outfit, sans-serif')
        .attr('fill', '#cbd5e1')
        .attr('text-anchor', 'middle')
        .attr('dy', (d) => d.id === 'vrajesh' ? 34 : 26)
        .attr('opacity', 0.8)

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
      <div className="animate-fade-in-up">
        <h1 className="text-2xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>People Map</h1>
        <p className="text-sm mt-1" style={{ color: 'var(--text-dim)' }}>
          Neural network of connections. Node size = meeting frequency.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden radar-bg animate-fade-in-up delay-200" style={{
        height: 'calc(100vh - 200px)',
        background: 'rgba(5, 5, 15, 0.8)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
      }}>
        <svg ref={svgRef} width="100%" height="100%" />

        {/* Selected person tooltip */}
        {selected && (
          <div className="absolute top-4 right-4 glass-panel p-5 max-w-xs animate-fade-in">
            <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{selected.name}</h3>
            <div className="mt-3 space-y-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {selected.role && <p><span style={{ color: 'var(--text-dim)' }}>Role:</span> {selected.role}</p>}
              {selected.team && <p><span style={{ color: 'var(--text-dim)' }}>Team:</span> {selected.team}</p>}
              <p><span style={{ color: 'var(--text-dim)' }}>Meetings:</span> <span className="font-mono-nums">{selected.meetings}</span></p>
              {selected.lastInteraction && <p><span style={{ color: 'var(--text-dim)' }}>Last:</span> {selected.lastInteraction}</p>}
            </div>
            <button onClick={() => setSelected(null)} className="text-xs mt-3 hover:underline" style={{ color: 'var(--accent-cyan)' }}>Close</button>
          </div>
        )}
      </div>

      {/* People grid */}
      <div className="glass-panel p-5 animate-fade-in-up delay-400">
        <h2 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>All People ({people.length})</h2>
        <div className="grid grid-cols-2 gap-2">
          {people.map(p => (
            <div key={p.id} className="flex items-center justify-between p-3 rounded-xl transition-colors hover:bg-white/[0.03]"
              style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.04)' }}>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{p.name}</span>
              <span className="text-xs font-mono-nums" style={{ color: 'var(--text-dim)' }}>{p.meetings} meetings</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
