'use client'
import { useState } from 'react'
import { ArrowRight, Mail, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const msg = encodeURIComponent(`Hi Kagujje, I'm ${form.name} (${form.email}).\n\n${form.message}`)
    window.open(`https://wa.me/254103022997?text=${msg}`, '_blank')
    setSent(true)
    setSending(false)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505]">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.12) saturate(0.3)' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.85) 100%)' }} />
      </div>

      <div className="relative z-10 py-32 md:py-48 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1500px] mx-auto">

          {/* Big headline */}
          <div className="mb-24">
            <span className="text-[0.55rem] font-black uppercase tracking-[1em] text-white/20 block mb-10">
              Get in touch
            </span>
            <a
              href="mailto:dicksonkagujje@gmail.com"
              className="block text-[clamp(2.5rem,8vw,9rem)] font-black tracking-[-0.04em] uppercase leading-[0.84] text-white hover:text-white/25 transition-colors duration-700"
            >
              Let's build.
            </a>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Left */}
            <div>
              <h3 className="text-xl font-black tracking-tight mb-6 text-white/80">Start a conversation</h3>
              <p className="text-white/35 leading-relaxed mb-12 max-w-sm font-light text-sm">
                Ready to build something exceptional? Whether it's a new project, a partnership, or just a question — reach out.
              </p>

              <div className="space-y-7">
                {[
                  { icon: Mail, label: 'Email', value: 'dicksonkagujje@gmail.com', href: 'mailto:dicksonkagujje@gmail.com' },
                  { icon: MessageSquare, label: 'WhatsApp', value: '+254 103 022 997', href: 'https://wa.me/254103022997' },
                  { icon: Send, label: 'Telegram', value: '@dicksonkagujje', href: 'https://t.me/dicksonkagujje' },
                ].map(item => (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 group">
                    <div className="w-11 h-11 flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                      style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                      <item.icon className="w-4 h-4 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <div className="text-[0.55rem] uppercase tracking-widest text-white/25 mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="text-[0.55rem] uppercase tracking-widest text-white/20 mb-2">Location</div>
                <div className="text-sm font-medium text-white/60">Malaba, Kenya</div>
                <div className="text-xs text-white/25 mt-0.5">East African Hub</div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-9">
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'Kasiba Shardick' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'you@example.com' },
              ].map(field => (
                <div key={field.key} className="group">
                  <label className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/25 group-focus-within:text-white/60 transition-colors block mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={(form as any)[field.key]}
                    onChange={e => setForm(p => ({ ...p, [field.key]: e.target.value }))}
                    className="w-full bg-transparent py-4 text-base text-white focus:outline-none font-light placeholder:text-white/15 transition-all"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                    onFocus={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.5)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)')}
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}

              <div className="group">
                <label className="text-[0.55rem] font-black uppercase tracking-[0.3em] text-white/25 group-focus-within:text-white/60 transition-colors block mb-3">
                  Your Vision
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  rows={4}
                  className="w-full bg-transparent py-4 text-base text-white focus:outline-none resize-none font-light placeholder:text-white/15 transition-all"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                  onFocus={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.5)')}
                  onBlur={e => (e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)')}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group w-full py-5 bg-white text-black text-[0.65rem] font-black uppercase tracking-[0.3em] hover:bg-white/90 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {sent
                  ? 'Message sent via WhatsApp'
                  : sending
                  ? 'Sending...'
                  : <><span>Commence Project</span><ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></>
                }
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}
