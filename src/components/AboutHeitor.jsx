import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import heitorCutout from '../assets/heitor-cutout.png'
import nexuraMarkHeader from '../assets/nexura-mark-header.png'

const WA_LINK =
  'https://wa.me/5584999422597?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Nexura%20e%20quero%20falar%20com%20Heitor.'

const nexuraServices = [
  'Desenvolvimento de sites profissionais',
  'Sistemas personalizados',
  'Inteligencia Artificial',
  'Automacoes',
  'Landing pages',
  'Solucoes digitais de alta performance',
]

const heitorFocus = ['visual premium', 'tecnologia moderna', 'estrategia digital', 'experiencia do usuario', 'performance']

function InfoCard({ label, title, description, items }) {
  return (
    <div className="relative">
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-3 font-display text-3xl leading-tight text-white sm:text-4xl"
        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
      >
        {label}
      </motion.h3>
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 block font-mono text-[10px] uppercase tracking-[0.28em] text-[#ff7d75]"
      >
        {title}
      </motion.span>
      <motion.h3
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 max-w-xl font-display text-2xl leading-tight text-white sm:text-3xl"
        style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
      >
        {description}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 max-w-2xl font-body text-base leading-relaxed text-white/55"
      >
        A Nexura Tecnologia Ltda nasceu com o objetivo de transformar ideias em solucoes digitais modernas,
        estrategicas e de alto impacto. Mais do que criar sites ou sistemas, a Nexura desenvolve experiencias digitais
        pensadas para gerar presenca, autoridade e crescimento real para empresas e marcas.
      </motion.p>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 font-body text-sm text-white/68 transition-transform duration-300 hover:-translate-y-1"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function AboutHeitor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="heitor" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-nexura-black" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-20">
        <div className="relative">
          <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[linear-gradient(180deg,#09090c_0%,#09090c_18%,#0a0f1b_52%,#09090c_100%)]" />
          <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_34%_34%,rgba(37,99,235,0.10),transparent_18%),radial-gradient(circle_at_72%_20%,rgba(59,130,246,0.08),transparent_16%),radial-gradient(circle_at_82%_52%,rgba(127,29,29,0.08),transparent_18%)]" />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
          >
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
              <div className="absolute right-[10%] top-[14%] h-44 w-44 rounded-full bg-[#2563eb]/16 blur-3xl" />
              <div className="absolute left-[20%] bottom-[14%] h-36 w-36 rounded-full bg-[#0ea5e9]/10 blur-3xl" />
              <motion.img
                src={nexuraMarkHeader}
                alt="Nexura"
                initial={{ opacity: 0, scale: 0.92, y: 18 }}
                animate={inView ? { opacity: 0.98, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-[360px] max-w-none object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.42)] sm:w-[430px] lg:w-[500px]"
              />
            </div>

            <InfoCard
              label={
                <>
                  Sobre a <span className="text-[#ff3b30]">Nexura</span>
                </>
              }
              title="Solucoes digitais com presenca, autoridade e crescimento real."
              description="Cada projeto e construido com foco em design moderno, performance, posicionamento e resultado."
              items={nexuraServices}
            />
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[linear-gradient(180deg,#09090c_0%,#0c0b11_100%)]" />
          <div className="absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_70%_18%,rgba(159,18,57,0.12),transparent_20%),radial-gradient(circle_at_20%_62%,rgba(127,29,29,0.10),transparent_18%)]" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16"
          >
            <div className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-white/5 bg-gradient-to-br from-[#130a0b] via-[#100d14] to-[#09090c]">
              <div
                className="absolute left-[-42px] top-5 h-[520px] w-[390px] opacity-95"
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
                className="pointer-events-none absolute right-4 top-8 w-[320px] select-none opacity-[0.14]"
              />
              <div className="absolute inset-y-0 left-[30%] w-28 bg-gradient-to-r from-transparent via-[#ff3b30]/10 to-transparent blur-2xl" />
              <div className="absolute right-[14%] top-[10%] h-44 w-44 rounded-full bg-[#ff3b30]/10 blur-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09090c] via-[#09090cd9] to-transparent" />
              <div className="absolute right-0 top-0 h-full w-[62%] bg-gradient-to-l from-[#0d0d14] via-transparent to-transparent opacity-70" />
              <div className="absolute left-1/2 top-[18%] z-[9] h-24 w-24 -translate-x-[12%] rounded-full bg-[#150f10]/82 blur-xl" />

              <img
                src={heitorCutout}
                alt="Heitor"
                className="absolute bottom-[-96px] left-1/2 z-10 w-[560px] max-w-none -translate-x-[40%] object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.42)] sm:bottom-[-112px] sm:w-[620px]"
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
                  <span className="font-body text-sm text-white/50">Fundador e CEO da Nexura</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute right-0 top-0 hidden select-none font-display text-[150px] leading-none text-white/[0.04] xl:block">
                NEXURA
              </div>

              <span className="section-label mb-4 block">Sobre</span>
              <h2
                className="mb-6 max-w-3xl font-display text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-5xl"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
              >
                QUEM ESTA POR TRAS DA <span className="text-gradient">NEXURA?</span>
              </h2>

              <div className="max-w-2xl space-y-6">
                <p className="font-body text-lg leading-relaxed text-white/58">
                  Meu nome e Heitor, fundador e CEO da Nexura. Sou responsavel pela direcao criativa, desenvolvimento e
                  execucao da maior parte dos projetos da empresa.
                </p>

                <p className="font-body text-base leading-relaxed text-white/48">
                  Meu foco e unir visual premium, tecnologia moderna, estrategia digital, experiencia do usuario e
                  performance para criar solucoes que realmente transmitam valor e profissionalismo.
                </p>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {heitorFocus.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 font-body text-sm text-white/62">
                      {item}
                    </div>
                  ))}
                </div>

                <p className="font-body text-base leading-relaxed text-white/48">
                  A Nexura representa exatamente isso: tecnologia, identidade e inovacao aplicadas de forma estrategica
                  para transformar negocios em presenca digital forte.
                </p>

                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  <span>Falar com Heitor</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
