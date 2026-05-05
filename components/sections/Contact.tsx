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
    // Open WhatsApp with message
    const msg = encodeURIComponent(`Hi Kagujje! I'm ${form.name} (${form.email}).\n\n${form.message}`)
    window.open(`https://wa.me/254103022997?text=${msg}`, '_blank')
    setSent(true)
    setSending(false)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-10 lg:px-16 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto">
        {/* Big CTA */}
        <div className="text-center mb-24">
          <span className="text-[0.6rem] font-black uppercase tracking-[1em] text-white/20 block mb-8">
            Get in touch
          </span>
          <a
            href="mailto:dicksonkagujje@gmail.com"
            className="block text-[clamp(2.5rem,8vw,9rem)] font-black tracking-[-0.04em] uppercase leading-[0.85] text-white hover:text-white/30 transition-colors duration-700"
          >
            Let's build.
          </a>
        </div>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left — info */}
          <div>
            <h3 className="text-2xl font-black tracking-tight mb-8">Start a conversation</h3>
            <p className="text-white/40 leading-relaxed mb-12 max-w-md">
              Ready to build something exceptional? Whether it's a new project, a partnership, or just a question — reach out and let's talk.
            </p>

            <div className="space-y-6">
              <a href="mailto:dicksonkagujje@gmail.com"
                className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <Mail className="w-5 h-5 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-0.5">Email</div>
                  <div className="text-sm font-medium">dicksonkagujje@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/254103022997" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <MessageSquare className="w-5 h-5 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-0.5">WhatsApp</div>
                  <div className="text-sm font-medium">+254 103 022 997</div>
                </div>
              </a>

              <a href="https://t.me/dicksonkagujje" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <Send className="w-5 h-5 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-0.5">Telegram</div>
                  <div className="text-sm font-medium">@dicksonkagujje</div>
                </div>
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-white/5">
              <div className="text-[0.6rem] uppercase tracking-widest text-white/30 mb-3">Location</div>
              <div className="text-sm font-medium">Malaba, Kenya</div>
              <div className="text-xs text-white/30 mt-1">East African Hub</div>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="group">
              <label className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/30 group-focus-within:text-white transition-colors block mb-3">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:border-white transition-all outline-none font-light placeholder:text-white/20"
                placeholder="Kasiba Shardick"
                required
              />
            </div>

            <div className="group">
              <label className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/30 group-focus-within:text-white transition-colors block mb-3">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:border-white transition-all outline-none font-light placeholder:text-white/20"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="group">
              <label className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-white/30 group-focus-within:text-white transition-colors block mb-3">
                Your Vision
              </label>
              <textarea
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white focus:border-white transition-all outline-none resize-none font-light placeholder:text-white/20"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="group relative w-full py-5 bg-white text-black text-[0.7rem] font-black uppercase tracking-[0.3em] hover:bg-white/90 transition-all btn-magnetic overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {sent ? '✓ Message Sent via WhatsApp' : sending ? 'Sending...' : (
                  <>Commence Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
