'use client'
import { useState, useEffect, useRef } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import SearchOverlay from '@/components/SearchOverlay'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [preloader, setPreloader] = useState(true)
  const [preloaderFade, setPreloaderFade] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setPreloaderFade(true), 1600)
    const t2 = setTimeout(() => { setPreloader(false); setLoaded(true) }, 2200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <>
      {/* Preloader */}
      {preloader && (
        <div
          className={`fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center transition-opacity duration-600 ${preloaderFade ? 'opacity-0' : 'opacity-100'}`}
          style={{ transition: 'opacity 0.6s ease' }}
        >
          <div className="text-center">
            <div
              className="text-[clamp(3rem,10vw,7rem)] font-black tracking-[-0.04em] text-white"
              style={{ animation: 'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards' }}
            >
              KAGUJJE
            </div>
            <div className="text-[0.55rem] uppercase tracking-[0.6em] text-white/25 mt-3">
              Digital Excellence
            </div>
            {/* Loading bar */}
            <div className="mt-8 w-32 h-[1px] bg-white/10 mx-auto overflow-hidden">
              <div
                className="h-full bg-white/60"
                style={{ animation: 'lineGrow 1.4s ease forwards' }}
              />
            </div>
          </div>
        </div>
      )}

      <CursorGlow />

      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Nav onSearchOpen={() => setSearchOpen(true)} />
        <main>
          <Hero />
          <Projects />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
