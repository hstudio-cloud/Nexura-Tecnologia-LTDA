import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Zap, MessageCircle, Briefcase, Home, Calculator, Calendar, Palette, ArrowUpRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/5584999422597?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20fazer%20um%20or%C3%A7amento.'

const services = [
  {
    icon: Globe,
    category: 'Digital',
    title: 'Criação de sites profissionais',
    desc: 'Sites modernos, responsivos e focados em resultado — do portfólio à loja online.',
    color: '#00e5ff',
    badge: 'Mais pedido',
  },
  {
    icon: Zap,
    category: 'Digital',
    title: 'Landing pages de alta conversão',
    desc: 'Páginas de venda diretas ao ponto, otimizadas para converter visitantes em clientes.',
    color: '#00e5ff',
    badge: null,
  },
  {
    icon: MessageCircle,
    category: 'Marketing',
    title: 'Captação de clientes via WhatsApp',
    desc: 'Estratégias digitais para atrair clientes e direcionar para o seu WhatsApp comercial.',
    color: '#25d366',
    badge: null,
  },
  {
    icon: Briefcase,
    category: 'Digital',
    title: 'Portfólios e páginas institucionais',
    desc: 'Presença digital completa para profissionais liberais, clínicas e empresas locais.',
    color: '#00e5ff',
    badge: null,
  },
  {
    icon: Home,
    category: 'Construção',
    title: 'Projetos de casas',
    desc: 'Anteprojeto com planta conceitual e fachada ilustrativa para quem já tem terreno.',
    color: '#f59e0b',
    badge: 'Exclusivo Assú/RN',
  },
  {
    icon: Calculator,
    category: 'Construção',
    title: 'Orçamento preliminar de obra',
    desc: 'Estimativa de custo com base no projeto, para planejar antes de iniciar a construção.',
    color: '#f59e0b',
    badge: null,
  },
  {
    icon: Calendar,
    category: 'Construção',
    title: 'Planejamento de obra',
    desc: 'Cronograma básico de execução com etapas, materiais e orientação inicial de obra.',
    color: '#f59e0b',
    badge: null,
  },
  {
    icon: Palette,
    category: 'Marketing',
    title: 'Identidade visual e presença digital',
    desc: 'Criação de marca, logo, paleta e materiais que comunicam profissionalismo.',
    color: '#a855f7',
    badge: null,
  },
]

const categoryColor = {
  Digital: '#00e5ff',
  Marketing: '#a855f7',
  Construção: '#f59e0b',
}

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-glass rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${service.color}08, transparent 60%)` }} />

      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${service.color}10`,
            borderColor: `${service.color}25`,
          }}>
          <service.icon size={20} style={{ color: service.color }} />
        </div>
        {service.badge && (
          <span className="font-mono text-[10px] px-2 py-1 rounded-full"
            style={{
              background: `${service.color}15`,
              color: service.color,
              border: `1px solid ${service.color}30`,
            }}>
            {service.badge}
          </span>
        )}
      </div>

      <div>
        <span className="font-mono text-[10px] uppercase tracking-widest mb-1 block"
          style={{ color: categoryColor[service.category] }}>
          {service.category}
        </span>
        <h3 className="font-display text-base font-700 text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
          {service.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed font-body">{service.desc}</p>
      </div>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className="mt-auto flex items-center gap-1.5 text-xs font-mono transition-colors duration-200"
        style={{ color: service.color }}>
        Saiba mais
        <ArrowUpRight size={12} />
      </a>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-nexura-black" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-4 block">O que fazemos</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
              Soluções digitais e <br className="hidden sm:block" />
              <span className="text-gradient">projetos para você.</span>
            </h2>
            <p className="text-white/45 text-sm max-w-xs font-body sm:text-right">
              Tecnologia e construção sob o mesmo teto, para quem precisa de resultado real.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
