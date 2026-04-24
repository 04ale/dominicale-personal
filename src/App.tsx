import HeroBanner from './components/HeroBanner'
import AboutMe from './components/AboutMe'
import Problem from './components/Problem'
import RealResults from './components/RealResults'
import Methods from './components/Methods'
import HowItWorks from './components/HowItWorks'
import Plans from './components/Plans'
import FinalCTA from './components/FinalCTA'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {

  return (
    <>
      <Header />
      <HeroBanner id="home" />
      <AboutMe id="sobremim" />
      <Problem id="problemas" />
      <RealResults id="resultados" />
      <Methods id="metodologia" />
      <HowItWorks id="comoeutrabalho" />
      <Plans id="planos" />
      <FinalCTA id="ctafinal" />
      <Footer id="" />
    </>
  )
}

export default App
