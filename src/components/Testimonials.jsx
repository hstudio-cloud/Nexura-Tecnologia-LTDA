import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

// NOTE: Estes depoimentos são placeholders.
// Substitua com depoimentos reais de clientes quando disponíveis.
// Para adicionar novos, basta editar o array abaixo.
const testimonials = [
  {
    text: 'A Nexura transformou minha ideia em uma apresentação profissional. Tive algo que realmente vendeu o meu negócio.',
    author: 'Carlos Henrique',
    role: 'Empresário local — Assú/RN',
    stars: 5,
    initial: 'C',
    color: '#ff3b30',
  },
  {
    text: 'O site ficou moderno e direto para vender. Em menos de uma semana já recebi contatos pelo WhatsApp.',
    author: 'Fernanda Lima',
    role: 'Profissional autônoma',
    stars: 5,
    initial: 'F',
    color: '#b91c1c',
  },
  {
    text: 'Consegui visualizar minha casa antes mesmo de construir. A planta e a fachada ficaram exatamente como eu imaginava.',
    author: 'João Paulo',
    role: 'Cliente residencial — região de Assú',
    stars: 5,
    initial: 'J',
    color: '#f97316',
  },
]

function TestimonialCard({ t, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card-glass rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.04] blur-2xl"
        style={{ background: t.color, transform: 'translate(30%, -30%)' }} />

      {/* Quote icon */}
      <Quote size={28} className="opacity-20" style={{ color: t.color }} />

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={14} fill={t.color} style={{ color: t.color }} />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/70 text-base leading-relaxed font-body flex-1 italic">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-700 text-sm flex-shrink-0"
          style={{
            background: `${t.color}20`,
            border: `1px solid ${t.color}40`,
            color: t.color,
            fontFamily: 'Syne, sans-serif',
          }}>
          {t.initial}
        </div>
        <div>
          <p className="font-display text-sm font-600 text-white" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
            {t.author}
          </p>
          <p className="font-body text-xs text-white/40">{t.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-nexura-dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-4 inline-flex">Depoimentos</span>
          <h2 className="font-display text-3xl sm:text-4xl font-800 leading-tight mt-2"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            O que dizem nossos <span className="text-gradient">clientes.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
