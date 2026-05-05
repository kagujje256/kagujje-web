'use client'

const stats = [
  { v: '50+', l: 'Projects Built' },
  { v: '2020', l: 'Founded' },
  { v: '6+', l: 'Products Live' },
  { v: '100%', l: 'Commitment' },
]

const timeline = [
  { year: '2020', title: 'Started', desc: 'Began as a small digital agency in Uganda' },
  { year: '2021', title: 'Expanded', desc: 'Launched forex & crypto services' },
  { year: '2022', title: 'Grew', desc: 'Reached first 1M+ users across platforms' },
  { year: '2023', title: 'Innovated', desc: 'Introduced AI-powered solutions' },
  { year: '2024', title: 'Scaled', desc: 'MDM28 launched, 10K+ devices managed' },
  { year: '2026', title: 'Now', desc: 'Full ecosystem: SMM, Forex, MDM, Streaming' },
]

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-black/30 block mb-6">
              The Architect
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] uppercase mb-8">
              Services that<br />
              <span className="text-black/20">change the world.</span>
            </h2>
            <p className="text-lg text-black/60 leading-relaxed font-light mb-6">
              I'm Kasiba Shardick, a Ugandan creator based in Malaba, Kenya. My journey began at St. Patrick P/S and led through Lordsmeade Vocational and Cardinal Nsubuga SS, shaping a vision for digital empowerment.
            </p>
            <p className="text-lg text-black/60 leading-relaxed font-light">
              Today, I build digital powerhouses — services that ease daily work, solve complex problems, and make life enjoyable. From SMM panels to forex automation, from device management to streaming platforms.
            </p>
          </div>

          {/* Profile image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full shadow-[0_0_80px_rgba(0,0,0,0.15)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Kasiba Shardick"
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  // Fallback if profile.jpg not uploaded yet
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
                }}
                style={{
                  maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center w-full">
                <div className="text-sm font-black uppercase tracking-[0.3em] text-white drop-shadow-lg">Kasiba Shardick</div>
                <div className="text-[0.6rem] font-light uppercase tracking-[0.2em] text-white/60 mt-1">Founder & Creator</div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -right-4 top-1/4 glass bg-white/80 rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-black text-black">6+</div>
              <div className="text-[0.6rem] text-black/50 uppercase tracking-wider">Live Products</div>
            </div>
            <div className="absolute -left-4 bottom-1/4 glass bg-white/80 rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-black text-black">2026</div>
              <div className="text-[0.6rem] text-black/50 uppercase tracking-wider">Current Year</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-black/10 mb-20">
          {stats.map(s => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-black">{s.v}</div>
              <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-black/30 mt-2">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-black/30 block mb-12">Journey</span>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-black/10" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-[0.6rem] tracking-widest text-black/30 font-black">{item.year}</span>
                  <h3 className="text-lg font-black text-black mt-1">{item.title}</h3>
                  <p className="text-sm text-black/50 mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 border-2 border-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
