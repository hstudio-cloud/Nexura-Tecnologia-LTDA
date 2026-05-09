import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import heitorCutout from '../assets/heitor-cutout.png'
import nexuraMarkHeader from '../assets/nexura-mark-header.png'

const WA_LINK =
  'https://wa.me/5584999422597?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20falar%20com%20Heitor.'

const pillars = [
  'Sites com visual profissional',
  'Solucoes digitais e IA',
  'Execucao com padrao Nexura',
]

export default function AboutHeitor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="heitor" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-nexura-black" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 70% at 72% 35%, rgba(255,59,48,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-[#130a0b] via-[#100d14] to-[#09090c]">
            <div
              className="absolute left-[-48px] top-6 h-[470px] w-[380px] opacity-95"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,59,48,0.34) 0%, rgba(127,29,29,0.18) 48%, rgba(69,10,10,0.12) 100%)',
                clipPath:
                  'polygon(50% 0%, 78% 0%, 58% 38%, 100% 38%, 48% 100%, 0% 100%, 26% 54%, 0% 54%)',
                filter: 'drop-shadow(0 0 42px rgba(255,59,48,0.34))',
              }}
            />

            <img
              src={nexuraMarkHeader}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-6 w-[300px] select-none opacity-[0.14]"
            />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#09090c] via-[#09090cd9] to-transparent" />
            <div className="absolute right-0 top-0 h-full w-[62%] bg-gradient-to-l from-[#0d0d14] via-transparent to-transparent opacity-70" />

            <img
              src={heitorCutout}
              alt="Heitor"
              className="absolute bottom-0 left-1/2 z-10 w-[430px] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.42)]"
            />

            <div className="absolute left-5 top-5 rounded-full border border-[#ff3b30]/25 bg-[#ff3b30]/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#ff7d75]">
              Sobre mim
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-20">
              <div className="inline-flex flex-col rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
                <span
                  className="font-display text-2xl text-white"
                  style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                >
                  Heitor
                </span>
                <span className="font-body text-sm text-white/50">Responsavel pelos projetos da Nexura</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="pointer-events-none absolute right-0 top-0 hidden select-none font-display text-[170px] leading-none text-white/[0.04] xl:block">
            HEITOR
          </div>

          <span className="section-label mb-4 block">Sobre</span>
          <h2
            className="mb-6 font-display text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
          >
            Quem e <span className="text-gradient">Heitor?</span>
          </h2>

          <div className="max-w-2xl space-y-6">
            <p className="font-body text-lg leading-relaxed text-white/58">
              Sou Heitor, a pessoa por tras de boa parte dos projetos da Nexura. Meu foco e transformar ideias em
              presenca digital forte, com visual profissional, estrutura clara e resultado de verdade.
            </p>

            <p className="font-body text-base leading-relaxed text-white/48">
              Esta secao ainda vai receber mais detalhes sobre minha trajetoria, experiencias e bastidores da Nexura.
              Por enquanto, ela ja apresenta quem esta conduzindo os projetos, o cuidado com o visual e a execucao.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 font-body text-sm text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <span>Falar com Heitor</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
