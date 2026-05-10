import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
