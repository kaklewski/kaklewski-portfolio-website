import { Box, Separator } from '@chakra-ui/react';
import { useRef } from 'react';
import ContactSection from './components/base/ContactSection';
import Footer from './components/base/Footer';
import HeroSection from './components/base/HeroSection';
import Navbar from './components/base/Navbar';
import ProjectsSection from './components/base/ProjectsSection';
import SkillsSection from './components/base/SkillsSection';

const App = () => {
    const mainContentRef = useRef<HTMLDivElement>(null);
    const skillsSectionRef = useRef<HTMLDivElement>(null);
    const projectsSectionRef = useRef<HTMLDivElement>(null);
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const sections = {
        main: mainContentRef,
        skills: skillsSectionRef,
        projects: projectsSectionRef,
        contact: contactSectionRef,
    };

    return (
        <>
            <Navbar sections={sections} />
            <Box as="main" ref={mainContentRef}>
                <HeroSection skillsSectionRef={skillsSectionRef} />
                <SkillsSection ref={skillsSectionRef} />
                <Separator />
                <ProjectsSection ref={projectsSectionRef} />
                <Separator />
                <ContactSection ref={contactSectionRef} />
                <Footer mainContentRef={mainContentRef} />
            </Box>
        </>
    );
};

export default App;
