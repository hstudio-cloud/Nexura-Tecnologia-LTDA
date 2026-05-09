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
            <div className="absolute inset-y-0 left-[30%] w-28 bg-gradient-to-r from-transparent via-[#ff3b30]/10 to-transparent blur-2xl" />
            <div className="absolute right-[18%] top-[10%] h-40 w-40 rounded-full bg-[#ff3b30]/10 blur-3xl" />

            <img
              src={nexuraMarkHeader}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-6 w-[300px] select-none opacity-[0.14]"
            />

            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#09090c] via-[#09090cd9] to-transparent" />
            <div className="absolute right-0 top-0 h-full w-[62%] bg-gradient-to-l from-[#0d0d14] via-transparent to-transparent opacity-70" />
            <div className="absolute left-1/2 top-[16%] z-[9] h-24 w-24 -translate-x-[18%] rounded-full bg-[#150f10]/80 blur-xl" />

            <img
              src={heitorCutout}
              alt="Heitor"
              className="absolute bottom-[-18px] left-1/2 z-10 w-[500px] max-w-none -translate-x-[42%] object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.42)] sm:w-[540px]"
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

            <div className="rounded-[26px] border border-[#ff3b30]/15 bg-gradient-to-br from-[#180a0c] via-[#0f0c11] to-[#09090c] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.28em] text-[#ff7d75]">
                    Sobre a Nexura
                  </span>
                  <h3
                    className="font-display text-2xl text-white"
                    style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
                  >
                    Solucoes digitais com presenca, autoridade e resultado.
                  </h3>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-right lg:block">
                  <span className="block font-display text-xl text-white">Nexura</span>
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-white/35">Tecnologia Ltda</span>
                </div>
              </div>

              <p className="mb-5 font-body text-sm leading-relaxed text-white/52">
                A Nexura Tecnologia Ltda nasceu com o objetivo de transformar ideias em solucoes digitais modernas,
                estrategicas e de alto impacto. Mais do que criar sites ou sistemas, desenvolvemos experiencias
                digitais pensadas para gerar crescimento real para empresas e marcas.
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {nexuraServices.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 font-body text-sm text-white/68"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 font-body text-sm leading-relaxed text-white/42">
                Cada projeto e construido com foco em design moderno, performance, posicionamento e resultado.
              </p>
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
