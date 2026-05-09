import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, FileText, Layers, Code2, RotateCcw, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos seu negócio, seu público e seus objetivos. Para projetos residenciais, levantamos informações do terreno e necessidades da família.',
  },
  {
    icon: FileText,
    num: '02',
    title: 'Proposta',
    desc: 'Montamos uma proposta clara com escopo, prazo e investimento. Sem surpresas no meio do caminho.',
  },
  {
    icon: Layers,
    num: '03',
    title: 'Design & planejamento',
    desc: 'Criamos o visual ou planta conceitual antes de avançar. Você aprova cada etapa.',
  },
  {
    icon: Code2,
    num: '04',
    title: 'Desenvolvimento ou anteprojeto',
    desc: 'Construímos o site/sistema ou elaboramos a planta baixa e fachada ilustrativa com orçamento estimativo.',
  },
  {
    icon: RotateCcw,
    num: '05',
    title: 'Revisão',
    desc: 'Rodada de ajustes para garantir que tudo está exatamente como você esperava.',
  },
  {
    icon: Rocket,
    num: '06',
    title: 'Entrega e suporte',
    desc: 'Entregamos o projeto final com orientações de uso. Para construções, encaminhamos para profissional habilitado para ART/RRT.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="processo" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-nexura-dark" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 70% at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Processo</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight mt-2"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Do primeiro contato à <span className="text-gradient">entrega final.</span>
          </h2>
          <p className="text-white/45 text-base mt-4 max-w-lg mx-auto font-body">
            Um processo claro e direto, para você saber em que etapa está a qualquer momento.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-40px' })
            return (
              <motion.div
                key={step.num}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-glass rounded-2xl p-7 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-nexura-cyan/20 bg-nexura-cyan/5 group-hover:bg-nexura-cyan/10 group-hover:border-nexura-cyan/40 transition-all duration-300">
                    <step.icon size={20} className="text-nexura-cyan" />
                  </div>
                  <span className="font-display text-3xl font-800 opacity-[0.12] select-none"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: '#00e5ff' }}>
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-base font-700 text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed font-body">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
