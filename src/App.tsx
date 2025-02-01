import { Theme } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <Theme appearance='dark'>
      <Navbar />
      <main>
        <Hero />
      </main>
    </Theme>
  )
}
