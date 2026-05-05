'use client'

const services = [
  {
    n: 'Social Media Growth',
    d: 'Buy TikTok views, Instagram followers, YouTube subscribers and 260+ services at wholesale prices. Resell to clients at 3–5x markup.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80&auto=format&fit=crop',
    color: '#22c55e',
    earn: 'Resell at 3–5x markup',
  },
  {
    n: 'Forex Automation',
    d: 'Connect your broker, choose GRID or DCA strategy, and let AI trade for you 24/5. Free $10,000 demo account — no credit card needed.',
    image: 'https://images.unsplash.com/photo-1611974789855-0c3b8f06e1b9?w=400&q=80&auto=format&fit=crop',
    color: '#3b82f6',
    earn: 'Trade 24/5 hands-free',
  },
  {
    n: 'Device Management',
    d: 'Remote lock, app management, and real-time monitoring for Android fleets. Built for schools, businesses, and organizations.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80&auto=format&fit=crop',
    color: '#8b5cf6',
    earn: 'Manage 10,000+ devices',
  },
  {
    n: 'Film & Content',
    d: 'Cinematic storytelling from script to screen. Professional video production for brands, events, and digital platforms.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80&auto=format&fit=crop',
    color: '#f59e0b',
    earn: 'Professional production',
  },
  {
    n: 'Tech Development',
    d: 'Custom software, APIs, and web platforms built to scale. From idea to production-ready product.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&auto=format&fit=crop',
    color: '#ec4899',
    earn: 'End-to-end delivery',
  },
  {
    n: 'Digital Marketing',
    d: 'Performance marketing that converts. Strategic brand amplification across social media, search, and paid channels.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80&auto=format&fit=crop',
    color: '#14b8a6',
    earn: 'Measurable ROI',
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
              What<br />
              <span className="text-white/15">We Do</span>
            </h2>
          </div>
          <p className="text-white/35 max-w-xs text-sm leading-relaxed font-light">
            Six disciplines. Every one built to generate real, measurable value for clients and users across East Africa.
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
              <div className="relative overflow-hidden" style={{ height: '160px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.n}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'brightness(0.65) saturate(0.75)' }}
                  draggable={false}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.75) 0%, transparent 55%)' }} />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-[0.5rem] font-black uppercase tracking-wider" style={{ color: s.color }}>
                    {s.earn}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1.5 text-white/85">{s.n}</h3>
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
                  style={{ filter: 'brightness(0.65) saturate(0.75)' }}
                  draggable={false}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.75) 0%, transparent 55%)' }} />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-[0.5rem] font-black uppercase tracking-wider" style={{ color: s.color }}>
                    {s.earn}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1.5 text-white/85">{s.n}</h3>
                <p className="text-[0.7rem] text-white/35 leading-relaxed whitespace-normal font-light">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
