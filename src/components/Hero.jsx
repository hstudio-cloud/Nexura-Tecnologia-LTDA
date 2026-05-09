import { motion } from 'framer-motion'
import { ArrowUpRight, Globe, Home, Users, ChevronDown } from 'lucide-react'
import nexuraLogo from '../assets/nexura-logo.png'

const WA_LINK = 'https://wa.me/5584999422597?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20fazer%20um%20or%C3%A7amento.'

const floatingCards = [
  {
    icon: Globe,
    title: 'Site profissional',
    sub: 'Desde R$ 997',
    color: '#00e5ff',
    position: 'top-[18%] right-[5%] lg:right-[8%]',
    animation: 'animate-float',
  },
  {
    icon: Home,
    title: 'Projeto de casa',
    sub: 'Visualize antes de construir',
    color: '#2563eb',
    position: 'top-[52%] right-[3%] lg:right-[6%]',
    animation: 'animate-float-delay',
  },
  {
    icon: Users,
    title: 'Captação de clientes',
    sub: 'Tráfego + WhatsApp',
    color: '#00e5ff',
    position: 'bottom-[18%] right-[6%] lg:right-[10%]',
    animation: 'animate-float',
  },
]

const stagger = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-nexura-black" />
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -5%, rgba(0,229,255,0.10) 0%, transparent 60%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-64" style={{ background: 'linear-gradient(to bottom, transparent, #06060a)' }} />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.04] blur-3xl" style={{ background: 'radial-gradient(circle, #00e5ff, transparent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-[0.06] blur-3xl" style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={stagger.container} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={stagger.item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-nexura-cyan/20 bg-nexura-cyan/5 font-mono text-xs text-nexura-cyan">
                <span className="glow-dot animate-pulse-slow" />
                Assú/RN — Aberto para novos projetos
              </span>
            </motion.div>

            <motion.h1
              variants={stagger.item}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.05] tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
            >
              Sites, captação de clientes e projetos que <span className="text-gradient">tiram sua ideia do papel.</span>
            </motion.h1>

            <motion.p
              variants={stagger.item}
              className="text-white/55 text-lg leading-relaxed max-w-lg"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              A Nexura cria sites profissionais, páginas de venda, soluções digitais e projetos
              residenciais para clientes em <span className="text-white/80 font-medium">Assú/RN e região.</span>
            </motion.p>

            <motion.div variants={stagger.item} className="flex items-center gap-6 py-2">
              {[
                { label: 'Projetos entregues', value: '20+' },
                { label: 'Clientes atendidos', value: '15+' },
                { label: 'Cidades na região', value: '8+' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-700 text-nexura-cyan" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-xs font-body">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 pt-1">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <span>Falar no WhatsApp</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="#servicos" className="btn-outline text-sm">
                <span>Ver serviços</span>
                <ChevronDown size={16} />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative hidden lg:block h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-8 rounded-2xl border border-nexura-border/50 bg-nexura-card/60 backdrop-blur-sm overflow-hidden flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
              />
              <div className="relative z-10 text-center p-8">
                <div className="mx-auto mb-5 flex justify-center">
                  <img
                    src={nexuraLogo}
                    alt="Nexura Tecnologia LTDA"
                    className="w-full max-w-[360px] object-contain drop-shadow-[0_0_24px_rgba(0,229,255,0.14)]"
                  />
                </div>
                <p className="font-display text-xl font-700 text-white/90" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}>
                  Da ideia ao resultado
                </p>
                <p className="text-white/40 text-sm mt-2 font-body">Sites • Projetos • Captação</p>
              </div>
            </motion.div>

            {floatingCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className={`absolute ${card.position} ${card.animation}`}
              >
                <div
                  className="card-glass rounded-xl px-4 py-3 flex items-center gap-3 min-w-[180px] shadow-2xl"
                  style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 1px ${card.color}33` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-600 text-white leading-none mb-0.5" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
                      {card.title}
                    </p>
                    <p className="text-white/40 text-xs font-body">{card.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
