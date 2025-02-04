import { Box, Separator, Theme } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Theme appearance='dark'>
      <Navbar />
      <Box as='main' id='main'>
        <Hero />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Contact />
        <Footer />
      </Box>
    </Theme>
  )
}
