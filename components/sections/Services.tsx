'use client'

const services = [
  { n: 'SMM Services', d: 'Buy social media engagement at wholesale prices. TikTok, Instagram, YouTube, Twitter.', icon: '📱', color: '#22c55e' },
  { n: 'Forex Automation', d: 'AI-powered trading bots. GRID & DCA strategies. Connect any broker in minutes.', icon: '📈', color: '#3b82f6' },
  { n: 'MDM Solutions', d: 'Enterprise device management for schools, businesses, and organizations.', icon: '🔒', color: '#8b5cf6' },
  { n: 'Film Production', d: 'Cinematic storytelling. From script to screen. Professional video content.', icon: '🎬', color: '#f59e0b' },
  { n: 'Tech Development', d: 'Custom software, APIs, and platforms. Built to scale and perform.', icon: '⚡', color: '#ec4899' },
  { n: 'Digital Marketing', d: 'Strategic brand amplification. Performance marketing that converts.', icon: '🚀', color: '#14b8a6' },
]

// Marquee items — doubled for seamless loop
const marqueeItems = [...services, ...services]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-48 border-y border-white/5 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-white/30 block mb-4">
              Core Capabilities
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase">
              Our<br />
              <span className="text-white/20">Services</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Engineered for performance. Built for the future. Every service designed to generate real value.
          </p>
        </div>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative mb-6">
        <div className="flex gap-5 animate-marquee whitespace-nowrap">
          {marqueeItems.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] glass rounded-2xl p-6 hover:border-white/15 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2 group-hover:text-white transition-colors"
                    style={{ color: s.color }}>
                    {s.n}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed whitespace-normal">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 — right to left */}
      <div className="relative">
        <div className="flex gap-5 animate-marquee-reverse whitespace-nowrap">
          {[...marqueeItems].reverse().map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] glass rounded-2xl p-6 hover:border-white/15 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2 group-hover:text-white transition-colors"
                    style={{ color: s.color }}>
                    {s.n}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed whitespace-normal">{s.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
