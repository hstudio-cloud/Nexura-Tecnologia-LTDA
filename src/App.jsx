import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import HouseProjects from './components/HouseProjects'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Stack from './components/Stack'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-nexura-black">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <HouseProjects />
        <Portfolio />
        <Process />
        <Stack />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
