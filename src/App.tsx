import { Box, Separator, Theme } from '@chakra-ui/react';
import Contact from './components/base/Contact';
import Footer from './components/base/Footer';
import Hero from './components/base/Hero';
import Navbar from './components/base/Navbar';
import Projects from './components/base/Projects';
import Skills from './components/base/Skills';

export default function App() {
    return (
        <Theme appearance="dark">
            <Navbar />
            <Box as="main" id="main">
                <Hero />
                <Skills />
                <Separator />
                <Projects />
                <Separator />
                <Contact />
                <Footer />
            </Box>
        </Theme>
    );
}
