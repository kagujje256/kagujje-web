'use client'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 'smm28',
    index: '01',
    name: 'SMM28',
    tagline: 'Social Media Marketing Panel',
    desc: 'The most affordable SMM panel in East Africa. 260+ services across TikTok, Instagram, YouTube, and Twitter. Instant delivery, mobile money payments.',
    url: 'https://smm.kagujje.com',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&q=85&auto=format&fit=crop',
    tags: ['TikTok', 'Instagram', 'YouTube'],
    status: 'Live',
    year: '2026',
    color: '#22c55e',
    stats: [{ v: '260+', l: 'Services' }, { v: '3.5x', l: 'Markup' }, { v: '24/7', l: 'Delivery' }],
  },
  {
    id: 'autoforex',
    index: '02',
    name: 'AutoForex',
    tagline: 'AI-Powered Forex Trading Bots',
    desc: 'Connect your broker, choose GRID or DCA strategy, and launch a fully automated trading bot in minutes. AI presets optimize settings automatically.',
    url: 'https://autoforex.kagujje.com',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=900&q=85&auto=format&fit=crop',
    tags: ['GRID', 'DCA', 'MT4/MT5'],
    status: 'Live',
    year: '2026',
    color: '#3b82f6',
    stats: [{ v: '24/5', l: 'Automated' }, { v: '2 min', l: 'Setup' }, { v: 'Free', l: 'Demo' }],
  },
  {
    id: 'mdm28',
    index: '03',
    name: 'MDM28',
    tagline: 'Mobile Device Management',
    desc: 'Enterprise-scale device management for schools, businesses, and organizations. Remote control, app management, security policies, real-time monitoring.',
    url: 'https://mdm.kagujje.com',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85&auto=format&fit=crop',
    tags: ['Android', 'Remote', 'B2B'],
    status: 'Live',
    year: '2024',
    color: '#8b5cf6',
    stats: [{ v: '10K+', l: 'Devices' }, { v: 'Real-time', l: 'Monitor' }, { v: 'B2B', l: 'Focus' }],
  },
  {
    id: 'movies',
    index: '04',
    name: 'UG Movies',
    tagline: 'Ugandan Streaming Platform',
    desc: 'Premium streaming for Ugandan and East African content. HD quality, multiple subscription tiers, MTN MoMo and Airtel Money payments.',
    url: 'https://movies.kagujje.com',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=85&auto=format&fit=crop',
    tags: ['Streaming', 'Uganda', 'HD'],
    status: '2026',
    year: '2026',
    color: '#f59e0b',
    stats: [{ v: 'HD', l: 'Quality' }, { v: 'UGX', l: 'Payments' }, { v: '2026', l: 'Launch' }],
  },
]

export default function Projects() {
  const [active, setActive] = useState<string | null>(null)
  const [previewImg, setPreviewImg] = useState(projects[0].image)
  const [previewProject, setPreviewProject] = useState(projects[0])

  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1500px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div>
            <span className="text-[0.55rem] font-black uppercase tracking-[0.5em] text-white/25 block mb-5">
              Selected Work
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.88] uppercase">
              Our<br />
              <span className="text-white/15">Projects</span>
            </h2>
          </div>
          <p className="text-white/35 max-w-xs text-sm leading-relaxed font-light">
            Each project solves a real problem. Built to generate revenue, serve users, and scale independently.
          </p>
        </div>

        {/* Desktop layout — list + sticky image */}
        <div className="hidden lg:grid grid-cols-[1fr_420px] gap-20 items-start">

          {/* List */}
          <div>
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-9 border-b border-white/[0.06] hover:border-white/20 transition-all duration-500"
                onMouseEnter={() => { setActive(p.id); setPreviewImg(p.image); setPreviewProject(p) }}
                onMouseLeave={() => setActive(null)}
              >
                <div className="flex items-center gap-10">
                  <span className="text-[0.55rem] font-black text-white/15 tabular-nums w-5">{p.index}</span>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3
                        className="font-black uppercase tracking-tighter transition-all duration-500"
                        style={{
                          fontSize: 'clamp(1.6rem, 3vw, 3.2rem)',
                          color: active === p.id ? p.color : '#fafafa',
                          transform: active === p.id ? 'translateX(12px)' : 'translateX(0)',
                        }}
                      >
                        {p.name}
                      </h3>
                      {p.status === 'Live' && (
                        <span
                          className="text-[0.5rem] font-black px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{ background: `${p.color}12`, color: p.color }}
                        >
                          Live
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/25 font-light">{p.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex gap-2 flex-wrap justify-end max-w-[180px]">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[0.5rem] text-white/25 border border-white/8 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 transition-all duration-500"
                    style={{
                      color: active === p.id ? '#ffffff' : 'rgba(255,255,255,0.15)',
                      transform: active === p.id ? 'translate(3px,-3px)' : 'translate(0,0)',
                    }}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Sticky image preview */}
          <div className="sticky top-28">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              {projects.map(p => (
                <div
                  key={p.id}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: previewImg === p.image ? 1 : 0 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.85)' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.2) 50%, transparent 75%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex gap-6 mb-4">
                      {p.stats.map(s => (
                        <div key={s.l}>
                          <div className="text-base font-black" style={{ color: p.color }}>{s.v}</div>
                          <div className="text-[0.55rem] text-white/35 uppercase tracking-wider mt-0.5">{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed font-light line-clamp-2">{p.desc}</p>
                  </div>
                </div>
              ))}

              {/* Default — no hover */}
              {!active && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[0.55rem] uppercase tracking-[0.5em] text-white/15">Hover to preview</span>
                </div>
              )}

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile — full cards with photos */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-5">
          {projects.map(p => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'brightness(0.8)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 60%)' }} />
                {p.status === 'Live' && (
                  <span
                    className="absolute top-3 right-3 text-[0.5rem] font-black px-2 py-0.5 rounded-full uppercase"
                    style={{ background: `${p.color}18`, color: p.color }}
                  >
                    Live
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black tracking-tight mb-1" style={{ color: p.color }}>{p.name}</h3>
                <p className="text-xs text-white/35 mb-3 font-light">{p.tagline}</p>
                <p className="text-xs text-white/25 leading-relaxed line-clamp-2 font-light">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
