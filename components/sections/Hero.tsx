'use client'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    topic: 'Innovation',
    headline: ['Mastering', 'the Digital', 'Horizon'],
    sub: 'Strategic development and cinematic production for the modern age.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85&auto=format&fit=crop',
    accent: '#ffffff',
  },
  {
    topic: 'Finance',
    headline: ['Financial', 'Freedom', 'Decoded'],
    sub: 'Expert forex automation and crypto solutions for wealth building.',
    image: 'https://images.unsplash.com/photo-1611974789855-0c3b8f06e1b9?w=1920&q=85&auto=format&fit=crop',
    accent: '#22c55e',
  },
  {
    topic: 'Technology',
    headline: ['Tech', 'Development', 'Evolved'],
    sub: 'High-performing digital machines that deliver measurable results.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=85&auto=format&fit=crop',
    accent: '#3b82f6',
  },
  {
    topic: 'Media',
    headline: ['Cinematic', 'Storytelling', 'Unleashed'],
    sub: 'From vision to screen. Content that moves audiences worldwide.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=85&auto=format&fit=crop',
    accent: '#f59e0b',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = (idx: number) => {
    if (transitioning || idx === current) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
    }, 700)
  }

  useEffect(() => {
    const interval = setInterval(() => goTo((current + 1) % slides.length), 6000)
    return () => clearInterval(interval)
  }, [current, transitioning])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">

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
            style={{
              transform: i === current ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 8s ease-out',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'rgba(5,5,5,0.55)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, #050505 0%, rgba(5,5,5,0.5) 45%, rgba(5,5,5,0.05) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #050505 0%, transparent 45%)' }} />
        </div>
      ))}

      {/* Grain */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <div className="relative z-[3] h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">

        {/* Topic */}
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
                className="text-reveal font-black leading-[0.84] tracking-[-0.04em] uppercase"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 10.5rem)',
                  color: i === 1 ? slide.accent : 'rgba(255,255,255,0.13)',
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
          className="mt-8 text-base md:text-lg text-white/45 max-w-lg leading-relaxed font-light fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          {slide.sub}
        </p>

        {/* CTAs */}
        <div key={`cta-${current}`} className="mt-10 flex items-center gap-8 fade-up" style={{ animationDelay: '0.75s' }}>
          <a
            href="#projects"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.18em] hover:bg-white/90 transition-all"
          >
            View Projects
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-5">
          <div className="flex gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="h-8 flex items-center"
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

        {/* Vertical label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-[3] hidden xl:block">
          <div className="rotate-90 origin-center whitespace-nowrap">
            <span className="text-[0.5rem] font-black tracking-[0.6em] text-white/12 uppercase">
              Kagujje Digital — 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
