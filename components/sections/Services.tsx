'use client'

const services = [
  {
    n: 'SMM Services',
    d: 'Buy social media engagement at wholesale prices. TikTok, Instagram, YouTube, Twitter.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80&auto=format&fit=crop',
    color: '#22c55e',
  },
  {
    n: 'Forex Automation',
    d: 'AI-powered trading bots. GRID and DCA strategies. Connect any broker in minutes.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&q=80&auto=format&fit=crop',
    color: '#3b82f6',
  },
  {
    n: 'MDM Solutions',
    d: 'Enterprise device management for schools, businesses, and organizations.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80&auto=format&fit=crop',
    color: '#8b5cf6',
  },
  {
    n: 'Film Production',
    d: 'Cinematic storytelling. From script to screen. Professional video content.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80&auto=format&fit=crop',
    color: '#f59e0b',
  },
  {
    n: 'Tech Development',
    d: 'Custom software, APIs, and platforms. Built to scale and perform.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&auto=format&fit=crop',
    color: '#ec4899',
  },
  {
    n: 'Digital Marketing',
    d: 'Strategic brand amplification. Performance marketing that converts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&auto=format&fit=crop',
    color: '#14b8a6',
  },
]

const marqueeItems = [...services, ...services]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48 border-y border-white/[0.05] overflow-hidden">

      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[0.55rem] font-black uppercase tracking-[0.5em] text-white/25 block mb-5">
              Core Capabilities
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.88] uppercase">
              Our<br />
              <span className="text-white/15">Services</span>
            </h2>
          </div>
          <p className="text-white/35 max-w-xs text-sm leading-relaxed font-light">
            Engineered for performance. Every service designed to generate real, measurable value.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="mb-4">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {marqueeItems.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] overflow-hidden group cursor-default"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: '160px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.n}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'brightness(0.7) saturate(0.8)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                </div>
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1.5 text-white/80">{s.n}</h3>
                <p className="text-[0.7rem] text-white/35 leading-relaxed whitespace-normal font-light">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div>
        <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
          {[...marqueeItems].reverse().map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] overflow-hidden group cursor-default"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="relative overflow-hidden" style={{ height: '160px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.n}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'brightness(0.7) saturate(0.8)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)' }} />
                <div className="absolute bottom-3 left-4">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1.5 text-white/80">{s.n}</h3>
                <p className="text-[0.7rem] text-white/35 leading-relaxed whitespace-normal font-light">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
