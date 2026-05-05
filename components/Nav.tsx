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
            ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/"
            className="text-xl font-black tracking-[-0.04em] text-white hover:text-white/70 transition-colors">
            KAGUJJE
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={onSearchOpen}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all text-xs"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden md:inline text-[0.6rem] bg-white/5 px-1.5 py-0.5 rounded">⌘K</kbd>
            </button>

            {/* CTA */}
            <a href="#contact"
              className="hidden md:flex items-center px-6 py-2.5 bg-white text-black text-[0.7rem] font-black uppercase tracking-[0.1em] hover:bg-white/90 transition-all btn-magnetic">
              Let's Talk
            </a>

            {/* Mobile menu */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/60 hover:text-white">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-black uppercase tracking-tight text-white/80 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm">
            Let's Talk
          </a>
        </div>
      )}
    </>
  )
}
