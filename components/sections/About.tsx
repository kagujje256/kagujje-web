'use client'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { v: '50+', l: 'Projects Shipped' },
  { v: '2020', l: 'Started' },
  { v: '6+', l: 'Products Live' },
  { v: 'EA', l: 'East Africa' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * 14,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[#050505]">

      {/* Full-bleed photo background — top half */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background scene photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85&auto=format&fit=crop"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25) saturate(0.4)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.6) 60%, #050505 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,5,5,0.5) 0%, transparent 50%)' }} />

        {/* Profile photo — positioned right */}
        <div
          className="absolute right-0 bottom-0 h-full"
          style={{
            width: 'clamp(280px, 38vw, 560px)',
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.2}px)`,
            transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1)',
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
              filter: 'contrast(1.05) brightness(0.9)',
              transform: `scale(1.04) translate(${mousePos.x * -0.1}px, ${mousePos.y * -0.1}px)`,
              transition: 'transform 1s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
          {/* Left fade — blends photo into background */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050505 0%, rgba(5,5,5,0.4) 30%, transparent 60%)' }} />
          {/* Bottom fade */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050505 0%, transparent 35%)' }} />
          {/* Red rim light enhancement */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, rgba(140,15,15,0.1) 0%, transparent 50%)' }} />
          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
              backgroundSize: '150px',
            }}
          />
        </div>

        {/* Text content — left side */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 max-w-[1500px] mx-auto">
          <div
            className="max-w-xl transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
          >
            <span className="text-[0.55rem] font-black uppercase tracking-[0.5em] text-white/25 block mb-6">
              The Architect
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-[-0.04em] leading-[0.88] uppercase mb-8">
              Building<br />
              <span className="text-white/15">digital</span><br />
              powerhouses.
            </h2>
            <p className="text-base text-white/45 leading-relaxed font-light max-w-md">
              I'm <span className="text-white font-medium">Kasiba Shardick</span>, a Ugandan creator and builder based in Malaba, Kenya. I design and ship digital products that solve real problems.
            </p>
          </div>
        </div>

        {/* Name tag — bottom right of photo */}
        <div
          className="absolute bottom-8 right-6 md:right-12 z-10 text-right transition-all duration-1000 delay-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <div className="text-[0.5rem] font-black uppercase tracking-[0.4em] text-white/30 mb-1">Founder & Creator</div>
          <div className="text-sm font-black uppercase tracking-tight text-white/70">Kasiba Shardick</div>
        </div>
      </div>

      {/* Bio + stats — below photo */}
      <div className="px-6 md:px-12 lg:px-20 py-20 max-w-[1500px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <div
            className="transition-all duration-1000 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <p className="text-base text-white/45 leading-relaxed font-light mb-6">
              Born in Jinja, Uganda on 12th March 2004. My journey began with a vision for digital empowerment across East Africa — building tools that generate real income and solve real problems.
            </p>
            <p className="text-base text-white/35 leading-relaxed font-light">
              From SMM panels to forex automation, from device management to streaming platforms — every product in this ecosystem is built to stand independently, generate revenue, and serve users at scale.
            </p>
          </div>

          {/* Tags + location */}
          <div
            className="transition-all duration-1000 delay-400"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <div className="flex flex-wrap gap-2 mb-10">
              {['Full-Stack Development', 'Product Design', 'East Africa', 'AI & Automation', 'Digital Media', 'Forex Trading'].map(tag => (
                <span key={tag} className="text-[0.6rem] font-medium uppercase tracking-wider px-3 py-1.5 text-white/30"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div className="text-[0.55rem] uppercase tracking-widest text-white/20 mb-2">Born</div>
                <div className="text-sm font-semibold text-white/70">Jinja, Uganda</div>
                <div className="text-xs text-white/25 mt-0.5">12th March 2004</div>
              </div>
              <div>
                <div className="text-[0.55rem] uppercase tracking-widest text-white/20 mb-2">Based</div>
                <div className="text-sm font-semibold text-white/70">Malaba, Kenya</div>
                <div className="text-xs text-white/25 mt-0.5">East African Hub</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 transition-all duration-1000 delay-500"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.l}
              className="transition-all duration-700"
              style={{ transitionDelay: `${600 + i * 80}ms`, opacity: visible ? 1 : 0 }}
            >
              <div className="text-4xl md:text-5xl font-black tracking-tighter text-white">{s.v}</div>
              <div className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/20 mt-2">{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
