import { Box, Separator, Theme } from '@chakra-ui/react'
import Navbar from './components/base/Navbar'
import Hero from './components/base/Hero'
import Skills from './components/base/Skills'
import Projects from './components/base/Projects'
import Contact from './components/base/Contact'
import Footer from './components/base/Footer'

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
