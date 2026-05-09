import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Paintbrush, TrendingUp, Wrench } from 'lucide-react'

const pillars = [
  {
    icon: Paintbrush,
    title: 'Visual profissional',
    desc: 'Design cuidado, identidade consistente e presença que transmite credibilidade desde o primeiro segundo.',
  },
  {
    icon: TrendingUp,
    title: 'Conversão em clientes',
    desc: 'Sites e páginas construídos com um único objetivo: transformar visitas em contatos e vendas reais.',
  },
  {
    icon: Wrench,
    title: 'Execução prática',
    desc: 'Da ideia ao arquivo final, entregamos projetos com prazo, clareza e suporte — sem enrolação.',
  },
]

function PillarCard({ pillar, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card-glass rounded-2xl p-7 group transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-nexura-cyan/20 bg-nexura-cyan/5 group-hover:bg-nexura-cyan/10 group-hover:border-nexura-cyan/40 transition-all duration-300">
        <pillar.icon size={22} className="text-nexura-cyan" />
      </div>
      <h3 className="font-display text-lg font-700 text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
        {pillar.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed font-body">{pillar.desc}</p>
    </motion.div>
  )
}

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-nexura-dark" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(159,18,57,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top line */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="section-label mb-4 block">Manifesto</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight text-white mb-6"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Tecnologia, design e execução para negócios que querem{' '}
            <span className="text-gradient">sair do improviso.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl font-body">
            Criamos presença digital e materiais de venda para empresas locais, profissionais autônomos
            e clientes que precisam transformar uma ideia em algo{' '}
            <span className="text-white/80 font-medium">apresentável, vendável e profissional.</span>
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px origin-left"
          style={{ background: 'linear-gradient(90deg, rgba(255,59,48,0.45) 0%, rgba(159,18,57,0.24) 50%, transparent 100%)' }}
        />
      </div>
    </section>
  )
}
