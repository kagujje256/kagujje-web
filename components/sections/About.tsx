'use client'
import { useRef, useEffect, useState } from 'react'

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 16,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-48 bg-[#050505] text-white relative overflow-hidden">

      {/* Ambient glow — echoes the red rim light from the photo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(160,20,20,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)' }} />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-[2]">

        {/* Label */}
        <div className="mb-20 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}>
          <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-white/20">The Architect</span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">

          {/* Text */}
          <div className="transition-all duration-1000 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-40px)' }}>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-black tracking-[-0.04em] leading-[0.88] uppercase mb-10">
              Building<br />
              <span className="text-white/15">digital</span><br />
              powerhouses.
            </h2>
            <div className="space-y-5 mb-10">
              <p className="text-base text-white/50 leading-relaxed font-light">
                I'm <span className="text-white font-semibold">Kasiba Shardick</span>, a Ugandan creator and builder based in Malaba, Kenya. I design and ship digital products that solve real problems — from social media growth tools to AI-powered forex automation.
              </p>
              <p className="text-base text-white/35 leading-relaxed font-light">
                Born in Jinja, Uganda on 12th March 2004. Every project in this ecosystem is built to generate revenue, serve users at scale, and stand independently.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Full-Stack Dev', 'Product Builder', 'East Africa', 'AI & Automation', 'Digital Media'].map(tag => (
                <span key={tag} className="text-[0.6rem] font-semibold uppercase tracking-wider px-3 py-1.5 border border-white/8 text-white/35 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cinematic photo — designed around the dark bg + red rim light aesthetic */}
          <div className="relative flex justify-center lg:justify-end transition-all duration-1000 delay-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(40px)' }}>

            {/* Red rim light ambient glow — extends the photo's existing light */}
            <div className="absolute pointer-events-none"
              style={{
                right: '-40px', top: '10%', bottom: '10%', width: '120px',
                background: 'linear-gradient(to left, rgba(180,20,20,0.18) 0%, transparent 100%)',
                filter: 'blur(30px)',
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
              }}
            />

            {/* Photo container */}
            <div
              className="relative overflow-hidden"
              style={{
                width: '340px', height: '430px',
                clipPath: 'polygon(0 0, 100% 0, 100% 86%, 86% 100%, 0 100%)',
                boxShadow: '0 50px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Kasiba Shardick"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
                }}
                style={{
                  transform: `scale(1.06) translate(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px)`,
                  transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1)',
                  filter: 'contrast(1.06) brightness(0.94) saturate(1.1)',
                }}
              />

              {/* Vignette — deepens the existing dark bg */}
              <div className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at 40% 40%, transparent 35%, rgba(0,0,0,0.5) 100%)' }} />

              {/* Bottom fade */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.15) 40%, transparent 65%)' }} />

              {/* Red rim light CSS enhancement — amplifies the photo's right-side rim */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to left, rgba(150,15,15,0.14) 0%, transparent 45%)' }} />

              {/* Subtle top darkening */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, transparent 25%)' }} />

              {/* Cinematic scan lines */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)',
                  backgroundSize: '100% 3px',
                }} />

              {/* Film grain on photo */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
                  backgroundSize: '150px',
                }} />

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-7 h-7 border-t border-r border-white/20" />
              <div className="absolute top-4 left-4 w-7 h-7 border-t border-l border-white/10" />

              {/* Name */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[0.5rem] font-black uppercase tracking-[0.5em] text-white/35 mb-1">Founder & Creator</div>
                <div className="text-lg font-black uppercase tracking-[-0.02em] text-white">Kasiba Shardick</div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute transition-all duration-1000 delay-700"
              style={{
                left: '-20px', top: '30%',
                opacity: visible ? 1 : 0,
                transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * -0.7}px)`,
                transition: 'opacity 1s 0.7s, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}>
              <div className="rounded-2xl p-4 shadow-2xl"
                style={{ background: 'rgba(8,8,8,0.92)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
                <div className="text-2xl font-black text-white">6+</div>
                <div className="text-[0.5rem] text-white/30 uppercase tracking-wider mt-0.5">Live Products</div>
              </div>
            </div>

            <div className="absolute transition-all duration-1000 delay-900"
              style={{
                right: '-16px', bottom: '28%',
                opacity: visible ? 1 : 0,
                transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px)`,
                transition: 'opacity 1s 0.9s, transform 0.6s cubic-bezier(0.16,1,0.3,1)',
              }}>
              <div className="rounded-2xl p-4 shadow-2xl"
                style={{ background: 'rgba(8,8,8,0.92)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}>
                <div className="text-2xl font-black text-white">2026</div>
                <div className="text-[0.5rem] text-white/30 uppercase tracking-wider mt-0.5">Building Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5 mb-24 transition-all duration-1000 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}>
          {stats.map((s, i) => (
            <div key={s.l} className="transition-all duration-700"
              style={{ transitionDelay: `${600 + i * 100}ms`, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}>
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-white">{s.v}</div>
              <div className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-white/20 mt-2">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="transition-all duration-1000 delay-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}>
          <span className="text-[0.6rem] font-black uppercase tracking-[0.5em] text-white/20 block mb-12">Journey</span>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5" />
            {timeline.map((item, i) => (
              <div key={item.year}
                className={`relative flex items-center mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="text-[0.6rem] tracking-widest text-white/20 font-black">{item.year}</span>
                  <h3 className="text-base font-black text-white mt-1">{item.title}</h3>
                  <p className="text-sm text-white/30 mt-1">{item.desc}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-2 h-2 bg-white/30 rounded-full -translate-x-1/2 border border-white/10" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
