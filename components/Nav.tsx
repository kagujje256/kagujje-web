'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'

interface NavProps {
  onSearchOpen: () => void
}

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ onSearchOpen }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 border-b border-white/[0.06]'
            : 'py-7'
        }`}
        style={{
          background: scrolled ? 'rgba(5,5,5,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link href="/"
            className="text-lg font-black tracking-[-0.04em] text-white hover:text-white/60 transition-colors duration-300">
            KAGUJJE
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 px-3 py-2 text-white/35 hover:text-white transition-all text-xs"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[0.6rem] uppercase tracking-wider">Search</span>
              <kbd className="hidden md:inline text-[0.55rem] px-1.5 py-0.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              className="hidden md:flex items-center px-6 py-2.5 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.12em] hover:bg-white/88 transition-all"
            >
              Let's Talk
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white/50 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(5,5,5,0.98)', backdropFilter: 'blur(20px)' }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-black uppercase tracking-tight text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm"
          >
            Let's Talk
          </a>
        </div>
      )}
    </>
  )
}
