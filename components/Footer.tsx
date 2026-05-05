import Link from 'next/link'

const ecosystem = [
  { label: 'SMM28', href: 'https://smm.kagujje.com', desc: 'Buy & Resell Social Media Services' },
  { label: 'AutoForex', href: 'https://autoforex.kagujje.com', desc: 'Automated Forex Trading Bots' },
  { label: 'Daily Quizz', href: 'https://daily.qzz.io', desc: 'Earn UGX Daily — Withdraw to MoMo' },
  { label: 'MDM28', href: 'https://mdm.kagujje.com', desc: 'Device Management for Businesses' },
]

const social = [
  { label: 'TikTok', href: 'https://tiktok.com/@kagujje.inc' },
  { label: 'Twitter', href: 'https://twitter.com/kagujje' },
  { label: 'Instagram', href: 'https://instagram.com/kagujje' },
  { label: 'Telegram', href: 'https://t.me/dicksonkagujje' },
  { label: 'WhatsApp', href: 'https://wa.me/254103022997' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505]" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="grid md:grid-cols-4 gap-16 mb-20">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-xl font-black tracking-[-0.04em] mb-6 text-white">KAGUJJE</div>
            <p className="text-sm text-white/30 leading-relaxed max-w-sm mb-8 font-light">
              Tools that grow your audience, automate your trading, and put real money in your pocket. Use them yourself or resell to clients.
            </p>
            <div className="space-y-2">
              <a href="mailto:dicksonkagujje@gmail.com"
                className="block text-sm text-white/25 hover:text-white transition-colors font-light">
                dicksonkagujje@gmail.com
              </a>
              <a href="https://wa.me/254103022997" target="_blank" rel="noopener noreferrer"
                className="block text-sm text-white/25 hover:text-white transition-colors font-light">
                +254 103 022 997
              </a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <div className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Ecosystem</div>
            <div className="space-y-4">
              {ecosystem.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="block group">
                  <div className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">{item.label}</div>
                  <div className="text-[0.6rem] text-white/20 font-light">{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Connect</div>
            <div className="space-y-3">
              {social.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="block text-sm text-white/35 hover:text-white transition-colors font-light">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="text-[0.55rem] uppercase tracking-widest text-white/15">
            2026 Kagujje Digital. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
            <span className="text-[0.55rem] uppercase tracking-widest text-white/20">All Systems Operational</span>
          </div>
          <div className="text-[0.55rem] uppercase tracking-widest text-white/15">
            Built by Kasiba Shardick
          </div>
        </div>

      </div>
    </footer>
  )
}
