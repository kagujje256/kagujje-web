import Link from 'next/link'

const ecosystem = [
  { label: 'SMM28', href: 'https://smm.kagujje.com', desc: 'Social Media Panel' },
  { label: 'AutoForex', href: 'https://autoforex.kagujje.com', desc: 'Forex Automation' },
  { label: 'MDM28', href: 'https://mdm.kagujje.com', desc: 'Device Management' },
  { label: 'UG Movies', href: 'https://movies.kagujje.com', desc: 'Streaming Platform' },
]

const social = [
  { label: 'TikTok', href: 'https://tiktok.com/@kagujje.inc' },
  { label: 'Twitter', href: 'https://twitter.com/kagujje' },
  { label: 'Instagram', href: 'https://instagram.com/kagujje' },
  { label: 'GitHub', href: 'https://github.com/kagujje256' },
  { label: 'Telegram', href: 'https://t.me/dicksonkagujje' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-20 px-6 md:px-10 lg:px-16 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-[-0.04em] mb-6">KAGUJJE</div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8">
              Transforming beautiful brands into high-performing machines. Content, ads & websites that deliver real results.
            </p>
            <div className="space-y-2">
              <a href="mailto:dicksonkagujje@gmail.com" className="block text-sm text-white/30 hover:text-white transition-colors">
                dicksonkagujje@gmail.com
              </a>
              <a href="https://wa.me/254103022997" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/30 hover:text-white transition-colors">
                +254 103 022 997
              </a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <div className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Ecosystem</div>
            <div className="space-y-4">
              {ecosystem.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="block group">
                  <div className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">{item.label}</div>
                  <div className="text-[0.6rem] text-white/20">{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/30 mb-6">Connect</div>
            <div className="space-y-3">
              {social.map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="block text-sm text-white/40 hover:text-white transition-colors hover:translate-x-1 duration-300">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <div className="text-[0.6rem] uppercase tracking-widest text-white/20">
            © 2026 Kagujje Digital. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[0.6rem] uppercase tracking-widest text-white/30">All Systems Operational</span>
          </div>
          <div className="text-[0.6rem] uppercase tracking-widest text-white/20">
            Built by Kasiba Shardick
          </div>
        </div>
      </div>
    </footer>
  )
}
