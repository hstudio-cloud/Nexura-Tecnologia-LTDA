import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, MessageSquare } from 'lucide-react'

const WA_LINK = 'https://wa.me/5584997070028?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20fazer%20um%20or%C3%A7amento.'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contato" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-nexura-black" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,229,255,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.1), transparent)' }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-7"
        >
          {/* Glow icon */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-nexura-cyan/25 bg-nexura-cyan/8 animate-glow">
            <MessageSquare size={28} className="text-nexura-cyan" />
          </div>

          <div>
            <span className="section-label mb-4 inline-flex justify-center">Vamos começar</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight mt-2"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
              Vamos construir algo{' '}
              <span className="text-gradient">profissional para sua ideia?</span>
            </h2>
          </div>

          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl font-body">
            Chame a Nexura no WhatsApp e peça um orçamento para site, projeto digital ou anteprojeto de casa.
            Respondemos rápido e sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-4 px-8 justify-center">
              <span>Falar no WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline text-base py-4 px-8 justify-center">
              <span>Solicitar orçamento</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="font-mono text-xs text-white/25 tracking-wide">
            Sem burocracia • Resposta em até 24h • Assú/RN e região
          </p>
        </motion.div>
      </div>
    </section>
  )
}
