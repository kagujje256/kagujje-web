'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

const slides = [
  {
    topic: 'Innovation',
    headline: ['Mastering', 'the Digital', 'Horizon'],
    sub: 'Strategic development and cinematic production for the modern age. We build digital powerhouses that redefine industry standards.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format&fit=crop',
    accent: '#ffffff',
  },
  {
    topic: 'Finance',
    headline: ['Financial', 'Freedom', 'Decoded'],
    sub: 'Expert forex automation and crypto solutions for wealth building. Smart tools for the modern investor.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c3b8f06e1b9?w=1920&q=80&auto=format&fit=crop',
    accent: '#22c55e',
  },
  {
    topic: 'Technology',
    headline: ['Tech', 'Development', 'Evolved'],
    sub: 'High-performing digital machines, content, ads & websites that deliver real results.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80&auto=format&fit=crop',
    accent: '#3b82f6',
  },
  {
    topic: 'Media',
    headline: ['Cinematic', 'Storytelling', 'Unleashed'],
    sub: 'From vision to screen. Movies that move audiences worldwide and define digital excellence.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80&auto=format&fit=crop',
    accent: '#f59e0b',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = (idx: number) => {
    if (transitioning || idx === current) return
    setPrev(current)
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
      setPrev(null)
    }, 800)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [current, transitioning])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.image}
            alt={s.topic}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 8s ease-out',
            }}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-[#050505]/50" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #050505 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.1) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050505 0%, transparent 40%)' }} />
        </div>
      ))}

      {/* Noise texture */}
      <div className="absolute inset-0 z-[2] opacity-30 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col justify-center px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        {/* Topic label */}
        <div
          key={`topic-${current}`}
          className="flex items-center gap-3 mb-8 fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="h-[1px] w-10" style={{ background: slide.accent + '60' }} />
          <span className="text-[0.6rem] font-black uppercase tracking-[0.5em]"
            style={{ color: slide.accent }}>
            {slide.topic}
          </span>
        </div>

        {/* Headline */}
        <div className="overflow-hidden">
          {slide.headline.map((line, i) => (
            <div
              key={`${current}-${i}`}
              className="overflow-hidden"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <h1
                className="text-reveal font-black leading-[0.85] tracking-[-0.04em] uppercase"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 10rem)',
                  color: i === 1 ? slide.accent : 'rgba(255,255,255,0.15)',
                  animationDelay: `${0.2 + i * 0.12}s`,
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p
          key={`sub-${current}`}
          className="mt-8 text-base md:text-lg text-white/50 max-w-xl leading-relaxed font-light fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          {slide.sub}
        </p>

        {/* CTAs */}
        <div
          key={`cta-${current}`}
          className="mt-10 flex items-center gap-6 fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a href="#projects"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-[0.7rem] font-black uppercase tracking-[0.15em] hover:bg-white/90 transition-all btn-magnetic">
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors flex items-center gap-3 group">
            About Me
            <div className="w-8 h-[1px] bg-white/20 group-hover:w-14 group-hover:bg-white/60 transition-all duration-500" />
          </a>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-6 md:left-10 lg:left-16 flex items-center gap-6">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="group relative h-8 flex items-center"
              >
                <div
                  className="h-[2px] transition-all duration-500"
                  style={{
                    width: i === current ? '2.5rem' : '1rem',
                    background: i === current ? slide.accent : 'rgba(255,255,255,0.2)',
                  }}
                />
              </button>
            ))}
          </div>
          <span className="text-[0.6rem] font-black tracking-widest text-white/30">
            <span style={{ color: slide.accent }}>0{current + 1}</span> / 0{slides.length}
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 right-6 md:right-10 hidden md:flex flex-col items-center gap-2">
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent to-white/20" />
          <ChevronDown className="w-4 h-4 text-white/20 animate-bounce" />
        </div>
      </div>

      {/* Side text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-[3] hidden xl:block">
        <div className="rotate-90 origin-center whitespace-nowrap">
          <span className="text-[0.55rem] font-black tracking-[0.6em] text-white/15 uppercase">
            Kagujje Digital Experience 2026
          </span>
        </div>
      </div>
    </section>
  )
}
