import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const WA_LINK = 'https://wa.me/5584999422597?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20fazer%20um%20or%C3%A7amento.'

// NOTE: Estes projetos são exemplos/placeholders.
// Substitua com projetos reais conforme o portfólio crescer.
const projects = [
  {
    category: 'Aplicativo',
    title: 'StartFit App',
    desc: 'Plataforma digital para academia com controle de mensalidades, treinos personalizados e acompanhamento de evolução do aluno.',
    tech: ['React', 'Node.js', 'Mobile', 'Dashboard'],
    color: '#00e5ff',
    gradient: 'from-cyan-500/10 to-blue-600/5',
    num: '01',
  },
  {
    category: 'Sistema web',
    title: 'Eleitora',
    desc: 'Sistema completo para gestão de prestação de contas eleitorais, com controle de receitas, despesas e relatórios automáticos.',
    tech: ['React', 'Banco de dados', 'PDF', 'Relatórios'],
    color: '#a855f7',
    gradient: 'from-purple-500/10 to-purple-900/5',
    num: '02',
  },
  {
    category: 'Projeto residencial',
    title: 'Casa econômica 8×16m',
    desc: 'Anteprojeto de casa com 2 quartos, suíte, garagem coberta e áreas de serviço. Orçamento preliminar estimado em até R$ 150 mil.',
    tech: ['Planta baixa', 'Fachada 3D', 'Orçamento', 'Cronograma'],
    color: '#f59e0b',
    gradient: 'from-amber-500/10 to-amber-900/5',
    num: '03',
  },
  {
    category: 'Landing page',
    title: 'Página para negócios locais',
    desc: 'Página profissional de alta conversão para captar clientes pelo WhatsApp, ideal para comércios, clínicas e profissionais autônomos.',
    tech: ['Design', 'WhatsApp', 'SEO local', 'Mobile'],
    color: '#22c55e',
    gradient: 'from-green-500/10 to-green-900/5',
    num: '04',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card-glass rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
    >
      {/* Top visual */}
      <div className={`h-44 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center border-b border-white/5 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at center, ${project.color}15, transparent 70%)` }} />
        <span className="font-display text-7xl font-800 opacity-[0.07] select-none"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, color: project.color }}>
          {project.num}
        </span>
        <div className="absolute bottom-4 left-5">
          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full"
            style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-700 text-white mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
          {project.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed mb-5 font-body">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-md text-white/40"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              {t}
            </span>
          ))}
        </div>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono transition-colors duration-200"
          style={{ color: project.color }}>
          Quero algo assim
          <ArrowUpRight size={12} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-nexura-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-4 block">Portfólio</span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
              Ideias que viraram <br className="hidden sm:block" />
              <span className="text-gradient">projetos reais.</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs font-body">
              Amostras de projetos digitais e residenciais desenvolvidos pela Nexura.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
