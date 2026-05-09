import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/5584999422597?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20saber%20sobre%20projetos%20de%20casas.'
const HOUSE_RED = '#ef4444'
const HOUSE_RED_SOFT = '#f87171'

const items = [
  'Planta baixa conceitual',
  'Imagem ilustrativa da fachada',
  'Orçamento estimativo de obra',
  'Demolição e limpeza do terreno',
  'Cronograma básico de execução',
  'Encaminhamento para ART/RRT com profissional habilitado',
]

export default function HouseProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="casas" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-nexura-dark" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 10% 60%, rgba(239,68,68,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label mb-4 block" style={{ color: HOUSE_RED_SOFT }}>
              <span
                style={{ background: HOUSE_RED_SOFT, display: 'inline-block', width: '20px', height: '1px', marginRight: '8px' }}
              />
              Projetos residenciais
            </span>

            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
            >
              Projetos de casas para quem já tem terreno e quer{' '}
              <span
                style={{
                  background: `linear-gradient(135deg, ${HOUSE_RED_SOFT}, ${HOUSE_RED})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                visualizar antes de construir.
              </span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-8 font-body max-w-lg">
              Criamos anteprojetos com planta baixa conceitual, fachada ilustrativa, orçamento estimativo,
              ideia de distribuição dos cômodos e planejamento inicial da obra. Ideal para quem tem terreno
              em <span className="text-white/80 font-medium">Assú/RN e região</span> e quer planejar antes de gastar.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-sm"
              style={{ background: `linear-gradient(135deg, ${HOUSE_RED}, ${HOUSE_RED_SOFT})` }}
            >
              <span>Solicitar anteprojeto</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-glass rounded-2xl p-8 border" style={{ borderColor: 'rgba(239,68,68,0.18)' }}>
              <h3
                className="font-display text-lg font-700 text-white mb-6"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                O que está incluso no anteprojeto
              </h3>

              <ul className="space-y-4">
                {items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: HOUSE_RED_SOFT }} />
                    <span className="text-white/75 text-sm font-body leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div
                className="mt-8 p-4 rounded-xl flex items-start gap-3"
                style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.18)' }}
              >
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: HOUSE_RED_SOFT, opacity: 0.85 }} />
                <p className="text-white/40 text-xs leading-relaxed font-body">
                  Os materiais gerados pela Nexura são estudos iniciais e devem ser validados por
                  engenheiro ou arquiteto habilitado antes da execução.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
