import { Theme } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function App() {
  return (
    <Theme appearance='dark'>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects/>
      </main>
    </Theme>
  )
}
