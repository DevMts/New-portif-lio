import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Project } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
