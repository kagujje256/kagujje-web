'use client'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    topic: 'Innovation',
    headline: ['Mastering', 'the Digital', 'Horizon'],
    sub: 'Strategic development and cinematic production for the modern age. We build digital powerhouses that redefine industry standards.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85&auto=format&fit=crop',
    accent: '#ffffff',
    cta: { label: 'View Projects', href: '#projects' },
  },
  {
    topic: 'Finance',
    headline: ['Financial', 'Freedom', 'Decoded'],
    sub: 'Expert forex automation and crypto solutions for wealth building. Smart tools for the modern investor.',
    image: 'https://images.unsplash.com/photo-1611974789855-0c3b8f06e1b9?w=1920&q=85&auto=format&fit=crop',
    accent: '#22c55e',
    cta: { label: 'Try AutoForex', href: 'https://autoforex.kagujje.com' },
  },
  {
    topic: 'Technology',
    headline: ['Tech', 'Development', 'Evolved'],
    sub: 'High-performing digital machines, content, ads and websites that deliver real, measurable results.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=85&auto=format&fit=crop',
    accent: '#3b82f6',
    cta: { label: 'See Services', href: '#services' },
  },
  {
    topic: 'Media',
    headline: ['Cinematic', 'Storytelling', 'Unleashed'],
    sub: 'From vision to screen. Movies that move audiences worldwide and define digital excellence.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=85&auto=format&fit=crop',
    accent: '#f59e0b',
    cta: { label: 'Get in Touch', href: '#contact' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)

  // Touch / drag swipe
  const touchStartX = useRef<number | null>(null)
  const dragStartX = useRef<number | null>(null)
  const isDragging = useRef(false)

  const goTo = (idx: number) => {
    if (transitioning || idx === current) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
    }, 700)
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  // Auto-advance — pauses on hover/drag
  useEffect(() => {
    if (paused) return
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [current, transitioning, paused])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
    setTimeout(() => setPaused(false), 2000)
  }

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX
    isDragging.current = false
    setPaused(true)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true
  }
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return
    const diff = dragStartX.current - e.clientX
    if (Math.abs(diff) > 60) diff > 0 ? next() : prev()
    dragStartX.current = null
    setTimeout(() => setPaused(false), 2000)
  }

  const slide = slides[current]

  return (
    <section
      className="relative h-screen min-h-[700px] overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); dragStartX.current = null }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
    >
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.image}
            alt={s.topic}
            className="w-full h-full object-cover"
            draggable={false}
            style={{
              transform: i === current ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 8s ease-out',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(5,5,5,0.58)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, #050505 0%, rgba(5,5,5,0.55) 45%, rgba(5,5,5,0.08) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050505 0%, transparent 45%)' }} />
        </div>
      ))}

      {/* Grain */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto pointer-events-none">

        {/* Topic pill */}
        <div key={`topic-${current}`} className="flex items-center gap-3 mb-8 fade-up" style={{ animationDelay: '0.05s' }}>
          <div className="h-px w-8" style={{ background: slide.accent + '80' }} />
          <span className="text-[0.6rem] font-black uppercase tracking-[0.5em]" style={{ color: slide.accent }}>
            {slide.topic}
          </span>
        </div>

        {/* Headline */}
        <div>
          {slide.headline.map((line, i) => (
            <div key={`${current}-${i}`} className="overflow-hidden">
              <h1
                className="text-reveal font-black leading-[0.88] tracking-[-0.04em]"
                style={{
                  fontSize: 'clamp(2.8rem, 8.5vw, 9rem)',
                  color: i === 0 ? '#fafafa' : i === 1 ? slide.accent : 'rgba(255,255,255,0.25)',
                  animationDelay: `${0.15 + i * 0.1}s`,
                }}
              >
                {line}
              </h1>
            </div>
          ))}
        </div>

        {/* Sub */}
        <p
          key={`sub-${current}`}
          className="mt-8 text-base md:text-lg text-white/50 max-w-lg leading-relaxed font-light fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          {slide.sub}
        </p>

        {/* CTA — pointer-events re-enabled */}
        <div key={`cta-${current}`} className="mt-10 flex items-center gap-8 fade-up pointer-events-auto" style={{ animationDelay: '0.75s' }}>
          <a
            href={slide.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseDown={e => e.stopPropagation()}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.18em] hover:bg-white/90 transition-all"
            style={{ cursor: 'pointer' }}
          >
            {slide.cta.label}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            onMouseDown={e => e.stopPropagation()}
            className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            style={{ cursor: 'pointer' }}
          >
            All Projects
          </a>
        </div>
      </div>

      {/* Slide indicators — pointer-events re-enabled */}
      <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 z-[4] flex items-center gap-5 pointer-events-auto">
        <div className="flex gap-2.5">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              onMouseDown={e => e.stopPropagation()}
              className="h-8 flex items-center group"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className="h-px transition-all duration-500"
                style={{
                  width: i === current ? '2.5rem' : '1rem',
                  background: i === current ? slide.accent : 'rgba(255,255,255,0.2)',
                }}
              />
            </button>
          ))}
        </div>
        <span className="text-[0.55rem] font-black tracking-widest text-white/25">
          <span style={{ color: slide.accent }}>0{current + 1}</span> / 0{slides.length}
        </span>
      </div>

      {/* Swipe hint — mobile only, fades after first interaction */}
      <div className="absolute bottom-10 right-6 z-[4] md:hidden pointer-events-none">
        <span className="text-[0.5rem] uppercase tracking-widest text-white/20">Swipe</span>
      </div>

      {/* Prev / Next arrows — desktop */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[4] hidden md:flex flex-col gap-3 pointer-events-auto">
        <button
          onClick={prev}
          onMouseDown={e => e.stopPropagation()}
          className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/30 hover:text-white hover:border-white/40 transition-all"
          aria-label="Previous slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          onMouseDown={e => e.stopPropagation()}
          className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/30 hover:text-white hover:border-white/40 transition-all"
          aria-label="Next slide"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
