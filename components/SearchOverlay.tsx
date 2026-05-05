'use client'
import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowUpRight } from 'lucide-react'

const allItems = [
  // Projects
  { type: 'Project', name: 'SMM28', desc: 'Social Media Marketing Panel — 260+ services', url: 'https://smm.kagujje.com', tags: ['smm', 'tiktok', 'instagram', 'youtube', 'social media', 'followers', 'views'] },
  { type: 'Project', name: 'AutoForex', desc: 'AI-Powered Automated Forex Trading', url: 'https://autoforex.kagujje.com', tags: ['forex', 'trading', 'bot', 'automation', 'grid', 'dca', 'broker'] },
  { type: 'Project', name: 'MDM28', desc: 'Mobile Device Management Platform', url: 'https://mdm.kagujje.com', tags: ['mdm', 'device', 'management', 'android', 'security', 'school', 'business'] },
  { type: 'Project', name: 'UG Movies', desc: 'Ugandan Streaming Platform', url: 'https://movies.kagujje.com', tags: ['movies', 'streaming', 'uganda', 'video', 'entertainment'] },
  // Services
  { type: 'Service', name: 'Buy TikTok Views', desc: 'Instant TikTok views from $0.08/1k', url: 'https://smm.kagujje.com', tags: ['tiktok', 'views', 'buy', 'cheap'] },
  { type: 'Service', name: 'Buy Instagram Followers', desc: 'Real Instagram followers, instant delivery', url: 'https://smm.kagujje.com', tags: ['instagram', 'followers', 'buy'] },
  { type: 'Service', name: 'Forex Trading Bot', desc: 'Automate your forex trading 24/5', url: 'https://autoforex.kagujje.com', tags: ['forex', 'bot', 'trading', 'automated'] },
  { type: 'Service', name: 'Device Management', desc: 'Manage Android devices remotely', url: 'https://mdm.kagujje.com', tags: ['device', 'android', 'remote', 'manage'] },
  // Pages
  { type: 'Page', name: 'About Kagujje', desc: 'Learn about Kasiba Shardick and the ecosystem', url: '#about', tags: ['about', 'bio', 'kasiba', 'shardick', 'founder'] },
  { type: 'Page', name: 'Contact', desc: 'Get in touch — WhatsApp, Email, Telegram', url: '#contact', tags: ['contact', 'whatsapp', 'email', 'telegram'] },
]

interface SearchOverlayProps {
  open: boolean
  onClose: () => void
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
      setQuery('')
    }
  }, [open])

  const results = query.trim()
    ? allItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.tags.some(t => t.includes(query.toLowerCase()))
      )
    : allItems.slice(0, 6)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl flex items-start justify-center pt-[15vh] px-6"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="w-full max-w-2xl">
        {/* Search input */}
        <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
          <Search className="w-5 h-5 text-white/40 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects, services, pages..."
            className="flex-1 bg-transparent text-xl text-white placeholder:text-white/20 outline-none font-light"
          />
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="space-y-1 max-h-[50vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="text-center py-12 text-white/20 text-sm">No results for "{query}"</div>
          ) : (
            results.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[0.55rem] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/30">
                    {item.type}
                  </span>
                  <div>
                    <div className="font-semibold text-sm group-hover:text-white transition-colors">{item.name}</div>
                    <div className="text-xs text-white/30 mt-0.5">{item.desc}</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </a>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[0.6rem] text-white/20">
          <span>Press <kbd className="bg-white/5 px-1.5 py-0.5 rounded">ESC</kbd> to close</span>
          <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  )
}
