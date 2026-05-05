'use client'
import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 'smm28',
    name: 'SMM28',
    tagline: 'Social Media Marketing Panel',
    desc: 'The cheapest SMM panel in East Africa. Buy TikTok views, Instagram followers, YouTube subscribers and 260+ more services. Instant delivery, mobile money payments.',
    url: 'https://smm.kagujje.com',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80&auto=format&fit=crop',
    tags: ['TikTok', 'Instagram', 'YouTube', 'Twitter'],
    status: 'LIVE',
    year: '2026',
    color: '#22c55e',
    stats: [{ v: '260+', l: 'Services' }, { v: '5x', l: 'Avg Margin' }, { v: '24/7', l: 'Delivery' }],
  },
  {
    id: 'autoforex',
    name: 'AutoForex',
    tagline: 'AI-Powered Forex Trading Bots',
    desc: 'Connect your broker, choose GRID or DCA strategy, and launch a fully automated trading bot in minutes. AI Presets optimize settings automatically. Runs 24/5.',
    url: 'https://autoforex.kagujje.com',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80&auto=format&fit=crop',
    tags: ['GRID', 'DCA', 'AI Presets', 'Exness', 'XM'],
    status: 'LIVE',
    year: '2026',
    color: '#3b82f6',
    stats: [{ v: '24/5', l: 'Automated' }, { v: '2 min', l: 'Setup' }, { v: 'Free', l: 'Demo' }],
  },
  {
    id: 'mdm28',
    name: 'MDM28',
    tagline: 'Mobile Device Management',
    desc: 'Enterprise-scale mobile device management for schools, businesses, and churches. Remote control, app management, security policies, and real-time monitoring.',
    url: 'https://mdm.kagujje.com',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop',
    tags: ['Android', 'Remote Control', 'Security', 'B2B'],
    status: 'LIVE',
    year: '2024',
    color: '#8b5cf6',
    stats: [{ v: '10K+', l: 'Devices' }, { v: 'Real-time', l: 'Monitoring' }, { v: 'B2B', l: 'Focus' }],
  },
  {
    id: 'movies',
    name: 'UG Movies',
    tagline: 'Ugandan Streaming Platform',
    desc: 'Premium streaming service for Ugandan and African content. HD quality, multiple subscription plans, MTN MoMo and Airtel Money payments.',
    url: 'https://movies.kagujje.com',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop',
    tags: ['Streaming', 'Uganda', 'MoMo', 'HD'],
    status: '2026',
    year: '2026',
    color: '#f59e0b',
    stats: [{ v: 'HD', l: 'Quality' }, { v: 'UGX', l: 'Payments' }, { v: '2026', l: 'Launch' }],
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [activeImage, setActiveImage] = useState(projects[0].image)

  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-white/30 block mb-4">
              What We Build
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase">
              Our<br />
              <span className="text-white/20">Projects</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Each project solves a real problem. Built to generate revenue, serve users, and scale.
          </p>
        </div>

        {/* Desktop: list + image */}
        <div className="hidden lg:grid grid-cols-[1fr_400px] gap-16 items-start">
          {/* Project list */}
          <div className="space-y-0">
            {projects.map((p, i) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-8 border-b border-white/5 hover:border-white/15 transition-all duration-500"
                onMouseEnter={() => { setHovered(p.id); setActiveImage(p.image) }}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center gap-8">
                  <span className="text-[0.6rem] font-black text-white/20 w-6">0{i + 1}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`text-[clamp(1.5rem,3vw,3rem)] font-black uppercase tracking-tighter transition-all duration-500 ${hovered === p.id ? 'translate-x-4' : ''}`}
                        style={{ color: hovered === p.id ? p.color : '#fafafa' }}>
                        {p.name}
                      </h3>
                      {p.status === 'LIVE' && (
                        <span className="text-[0.55rem] font-black px-2 py-0.5 rounded-full"
                          style={{ background: `${p.color}15`, color: p.color }}>
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/30">{p.tagline}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex gap-2 flex-wrap justify-end max-w-[200px]">
                    {p.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[0.55rem] text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className={`w-5 h-5 transition-all duration-500 ${hovered === p.id ? 'text-white translate-x-1 -translate-y-1' : 'text-white/20'}`} />
                </div>
              </a>
            ))}
          </div>

          {/* Sticky image */}
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              {projects.map(p => (
                <div
                  key={p.id}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: activeImage === p.image ? 1 : 0 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-4">
                      {p.stats.map(s => (
                        <div key={s.l}>
                          <div className="text-lg font-black" style={{ color: p.color }}>{s.v}</div>
                          <div className="text-[0.6rem] text-white/40 uppercase tracking-wider">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              {/* Default state */}
              {!hovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
                  <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/20">Hover a project</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: cards */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {projects.map(p => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl overflow-hidden hover-lift"
            >
              <div className="relative h-48 img-zoom">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                {p.status === 'LIVE' && (
                  <span className="absolute top-3 right-3 text-[0.55rem] font-black px-2 py-0.5 rounded-full"
                    style={{ background: `${p.color}20`, color: p.color }}>
                    LIVE
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black tracking-tight mb-1" style={{ color: p.color }}>{p.name}</h3>
                <p className="text-xs text-white/40 mb-3">{p.tagline}</p>
                <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{p.desc}</p>
                <div className="flex items-center gap-2 mt-4">
                  <ExternalLink className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-[0.6rem] text-white/30 uppercase tracking-wider">Visit</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
