import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stackItems = [
  { label: 'React', type: 'Frontend' },
  { label: 'Next.js', type: 'Frontend' },
  { label: 'Node.js', type: 'Backend' },
  { label: 'Tailwind', type: 'Frontend' },
  { label: 'Figma', type: 'Design' },
  { label: 'Vercel', type: 'Deploy' },
  { label: 'Netlify', type: 'Deploy' },
  { label: 'GitHub', type: 'Código' },
  { label: 'Canva', type: 'Design' },
  { label: 'AutoCAD', type: 'Projeto' },
  { label: 'PDF/DXF', type: 'Projeto' },
  { label: 'WhatsApp API', type: 'Marketing' },
]

const typeColors = {
  Frontend: '#ff3b30',
  Backend: '#b91c1c',
  Design: '#ef4444',
  Deploy: '#f97316',
  Código: '#dc2626',
  Projeto: '#7f1d1d',
  Marketing: '#25d366',
}

export default function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-nexura-black" />
      {/* Separator line top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,48,0.18), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Ferramentas</span>
          <h2 className="font-display text-2xl sm:text-3xl font-800 leading-tight mt-2"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
            Tecnologia que <span className="text-gradient">entrega resultado.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {stackItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl card-glass hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: typeColors[item.type], boxShadow: `0 0 6px ${typeColors[item.type]}` }} />
              <span className="font-display text-sm font-600 text-white/80 group-hover:text-white transition-colors"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
                {item.label}
              </span>
              <span className="font-mono text-[9px] text-white/25 uppercase tracking-wide">
                {item.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Separator line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,48,0.18), transparent)' }} />
    </section>
  )
}
