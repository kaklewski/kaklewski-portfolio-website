import {
    Badge,
    Box,
    Button,
    Card,
    Container,
    Flex,
    Heading,
    HStack,
    Image,
    SimpleGrid,
} from '@chakra-ui/react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { forwardRef, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import CustomHeading from '../elements/Heading';

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    const personalProjects = [
        {
            image: 'screenshots/kalkdoktor.png',
            name: 'Kalkdoktor',
            description:
                'Web application designed as a toolkit for medical professionals. The project focuses on implementing a collection of medical calculators and scales, offline-first functionality using PWA features, and persistent favorites to support quick access in clinical use.',
            tools: ['React', 'TypeScript', 'Chakra UI', 'Vite', 'PWA'],
            demoUrl: 'https://kalkdoktor.pl',
            codeUrl: 'https://github.com/kaklewski/kalkdoktor',
        },
        {
            image: 'screenshots/lingva.png',
            name: 'Lingva Translate in Sidebar',
            description:
                'Browser extension that integrates Lingva Translate directly into the sidebar. The project focuses on leveraging the WebExtensions API, integrating an external translation API, and delivering a fast, unobtrusive user experience for translating text without leaving the current page.',
            tools: ['JavaScript', 'HTML5', 'WebExtensions API', 'Lingva API'],
            demoUrl:
                'https://addons.mozilla.org/firefox/addon/lingva-in-sidebar',
            codeUrl: 'https://github.com/kaklewski/lingva-sidebar',
        },
        {
            image: 'screenshots/amnesia.png',
            name: 'Amnesia - History Cleaner',
            description:
                'Privacy-focused browser extension for automatic cleanup of browsing history. The project focuses on using browser APIs to manage history data, implementing time-based cleanup logic, and providing a lightweight, configurable solution for users who value privacy.',
            tools: ['JavaScript', 'HTML5', 'WebExtensions API'],
            demoUrl:
                'https://addons.mozilla.org/firefox/addon/amnesia-cleaner/',
            codeUrl: 'https://github.com/kaklewski/amnesia',
        },
        {
            image: 'screenshots/portfolio.png',
            name: 'My Portfolio Website',
            description:
                'Personal front-end portfolio website built to showcase projects and experience. The project focuses on a clean, minimalist UI, reusable layout components, responsive design, and performance optimization to deliver a clear and professional presentation.',
            tools: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
            demoUrl: 'https://kaklewski.pl',
            codeUrl: 'https://github.com/kaklewski/kaklewski-portfolio-website',
        },
    ];

    const technicalDemos = [
        {
            image: 'screenshots/react-pokedex.png',
            name: 'React Pokédex',
            description:
                'Client-side application built as a sandbox for experimenting with modern React libraries. The project focuses on data fetching and state management using the PokéAPI, enabling users to browse Pokémon, view detailed information, and manage a favorites list.',
            tools: [
                'React',
                'TypeScript',
                'Mantine UI',
                'TanStack libraries',
                'Vite',
                'PokéAPI',
            ],
            demoUrl: 'https://react-pokedex-2.netlify.app',
            codeUrl: 'https://github.com/kaklewski/react-pokedex',
        },
        {
            image: 'screenshots/zenith-calendar.png',
            name: 'Zenith Calendar',
            description:
                'Calendar web application for managing events with a clean and modern interface. The project focuses on state management, persistent data storage using browser local storage, and customizable user preferences such as theme selection and week start day.',
            tools: ['React', 'TypeScript', 'SASS', 'Vite'],
            demoUrl: 'https://zenith-calendar.netlify.app',
            codeUrl: 'https://github.com/kaklewski/zenith-calendar',
        },
        {
            image: 'screenshots/zenith-docs.png',
            name: 'Zenith Docs',
            description:
                'Document editing web application inspired by Google Docs. The project focuses on real-time collaboration, advanced text editing, and automatic content synchronization using Firebase, enabling multiple users to work on the same document simultaneously.',
            tools: ['React', 'TypeScript', 'SASS', 'Firebase', 'Vite'],
            demoUrl: 'https://zenith-docs.netlify.app/',
            codeUrl: 'https://github.com/kaklewski/zenith-docs',
        },
    ];

    const commercialProjects = [
        {
            image: 'screenshots/mirek-handlarz.png',
            name: 'MirekHandlarz.pl',
            description:
                'Front-end of a modern automotive classifieds platform. Focused on building reusable UI components, integrating REST APIs, implementing offer filtering and listing logic, and optimizing application performance for fast load times and smooth interaction with large datasets.',
            tools: ['TypeScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
            demoUrl: 'https://mirekhandlarz.pl',
        },
        {
            image: 'screenshots/projekty-wnetrz.png',
            name: 'Projekty Wnętrz',
            description:
                'Portfolio website for an interior designer. Focused on implementing a minimalist, content-driven UI, creating reusable layout components, and ensuring a fully responsive design to clearly present projects and offer across devices.',
            tools: ['JavaScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
            demoUrl: 'https://projektywnetrz.net',
            codeUrl: 'https://github.com/kaklewski/projekty-wnetrz',
        },
        {
            image: 'screenshots/stomatolog-piasecki.png',
            name: 'Stomatolog Piasecki',
            description:
                'Website for a dental clinic. Focused on usability and accessibility, with an emphasis on intuitive navigation, responsive layout, semantic HTML, and cross-device compatibility to provide a consistent and user-friendly experience.',
            tools: ['JavaScript', 'HTML5', 'SASS', 'Gulp', 'RWD'],
            demoUrl: 'https://stomatologpiasecki.pl',
            codeUrl: 'https://github.com/kaklewski/stomatolog-piasecki',
        },
    ];

    return (
        <Container
            maxW="7xl"
            id="projects"
            py={{ base: 20, md: 36 }}
            backgroundImage="url(background.png)"
            ref={ref}
        >
            <CustomHeading text={t('projectsSection.heading')} />

            <ProjectGrid headingText={'Personal Projects'}>
                {personalProjects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        tools={project.tools}
                        demoUrl={project.demoUrl}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </ProjectGrid>

            <ProjectGrid headingText={'Technical Demos'}>
                {technicalDemos.map((project) => (
                    <ProjectCard
                        key={project.name}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        tools={project.tools}
                        demoUrl={project.demoUrl}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </ProjectGrid>

            <ProjectGrid headingText={'Commercial Projects'}>
                {commercialProjects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        tools={project.tools}
                        demoUrl={project.demoUrl}
                        codeUrl={project.codeUrl}
                    />
                ))}
            </ProjectGrid>
        </Container>
    );
});

type ProjectGridProps = {
    headingText: string;
    children: ReactNode;
};

const ProjectGrid = ({ headingText, children }: ProjectGridProps) => {
    return (
        <>
            <Heading
                as="h3"
                size={{ base: 'xl', sm: '2xl', md: '3xl' }}
                className="accent-font"
                pb={4}
                pt={12}
            >
                {headingText}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} pb={8}>
                {children}
            </SimpleGrid>
        </>
    );
};

type ProjectCardProps = {
    image: string;
    name: string;
    description: string;
    tools: string[];
    demoUrl: string;
    codeUrl?: string;
};

const ProjectCard = ({
    image,
    name,
    description,
    tools,
    demoUrl,
    codeUrl,
}: ProjectCardProps) => {
    return (
        <Card.Root
            overflow="hidden"
            display="flex"
            direction="column"
            justifyContent="space-between"
        >
            <Box maxW="100%" aspectRatio="16/9" overflow={'hidden'}>
                <Image
                    objectFit="cover"
                    src={image}
                    alt={`Screenshot of ${name}`}
                    transition="scale .25s"
                    transitionTimingFunction="ease-in-out"
                    _hover={{ scale: '1.03' }}
                />
            </Box>
            <Flex
                direction="column"
                justifyContent="space-between"
                flexGrow="2"
            >
                <Card.Body display="flex" flexDir="column" flexGrow="2">
                    <Card.Title mb="2" fontSize="xl">
                        {name}
                    </Card.Title>
                    <Card.Description flexGrow="2">
                        {description}
                    </Card.Description>
                    <HStack mt="4">
                        {tools.map((tool) => (
                            <Badge
                                key={tool}
                                variant="outline"
                                colorPalette="teal"
                            >
                                {tool}
                            </Badge>
                        ))}
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <Button rounded="full" asChild>
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconExternalLink stroke={1.75} /> Live Demo
                        </a>
                    </Button>
                    {codeUrl && (
                        <Button variant="surface" rounded="full" asChild>
                            <a
                                href={codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IconBrandGithub stroke={1.75} />
                                Source Code
                            </a>
                        </Button>
                    )}
                </Card.Footer>
            </Flex>
        </Card.Root>
    );
};

export default ProjectsSection;
