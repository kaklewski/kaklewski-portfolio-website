import {
    Badge,
    Box,
    Button,
    Card,
    Container,
    Flex,
    HStack,
    Image,
    SimpleGrid,
} from '@chakra-ui/react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import CustomHeading from '../elements/Heading';

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    const projects = [
        {
            image: 'screenshots/kalkdoktor.png',
            name: 'Kalkdoktor',
            description:
                'This is a web application designed as a toolkit for doctors, featuring a collection of medical calculators and scales that assist in diagnosing patients and selecting appropriate treatments. The app works fully offline and allows users to save their favorite calculators.',
            tools: ['React', 'TypeScript', 'Chakra UI', 'Vite', 'PWA'],
            demoUrl: 'https://kalkdoktor.pl',
            codeUrl: 'https://github.com/kaklewski/kalkdoktor',
        },
        {
            image: 'screenshots/zenith-calendar.png',
            name: 'Zenith Calendar',
            description:
                "A web application inspired by Google Docs that enables users to add and manage events in a modern and convenient way. Events are stored in the browser's local storage. The app also allows users to customize their preferred theme and the starting day of the week.",
            tools: ['React', 'TypeScript', 'SASS', 'Vite'],
            demoUrl: 'https://zenith-calendar.netlify.app',
            codeUrl: 'https://github.com/kaklewski/zenith-calendar',
        },
        {
            image: 'screenshots/zenith-docs.png',
            name: 'Zenith Docs',
            description:
                'A web application inspired by Google Docs that offers advanced text editing and real-time collaboration between multiple users. Content is automatically saved and synchronized using Google Firebase.',
            tools: ['React', 'TypeScript', 'SASS', 'Firebase', 'Vite'],
            demoUrl: 'https://zenith-docs.netlify.app/',
            codeUrl: 'https://github.com/kaklewski/zenith-docs',
        },
        {
            image: 'screenshots/pokedex.png',
            name: 'Pokédex',
            description:
                'Pokédex is a project that utilizes the PokéAPI, allowing users to search through the first-generation Pokémon list and view detailed information and images for each Pokémon.',
            tools: ['React', 'JavaScript', 'SASS', 'Vite'],
            demoUrl: 'https://kaklewski.github.io/pokemon-search',
            codeUrl: 'https://github.com/kaklewski/pokemon-search',
        },
        {
            image: 'screenshots/portfolio.png',
            name: 'Kaklewski Portfolio Website',
            description:
                'A modern Front End developer portfolio with a minimalist design. Created to highlight skills, projects, and experience in a clear and professional manner, ensuring viewers have an intuitive and enjoyable browsing experience.',
            tools: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
            demoUrl: 'https://kaklewski.pl',
            codeUrl: 'https://github.com/kaklewski/kaklewski-portfolio-website',
        },
        {
            image: 'screenshots/gymnormous.png',
            name: 'GYMnormous',
            description:
                'A modern fitness application designed for workout enthusiasts. It allows users to create a personalized workout plan based on selected parameters such as workout type, targeted muscle groups, and fitness goals.',
            tools: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
            demoUrl: 'https://kaklewski.github.io/gymnormous',
            codeUrl: 'https://github.com/kaklewski/gymnormous',
        },
        {
            image: 'screenshots/projekty-wnetrz.png',
            name: 'Projekty Wnętrz',
            description:
                'A portfolio website for an interior designer, created for one of my clients. The website follows a minimalist design, aiming to showcase projects and pricing in an appealing way. It is fully responsive and adapts to all devices.',
            tools: ['JavaScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
            demoUrl: 'https://projektywnetrz.net',
            codeUrl: 'https://github.com/kaklewski/projekty-wnetrz',
        },
        {
            image: 'screenshots/stomatolog-piasecki.png',
            name: 'Stomatolog Piasecki',
            description:
                'A website for a dental clinic, created for one of my clients. It is a fully responsive and modern-looking website that adjusts seamlessly to all devices.',
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

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                {projects.map((project) => (
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
            </SimpleGrid>
        </Container>
    );
});

type ProjectCardProps = {
    image: string;
    name: string;
    description: string;
    tools: string[];
    demoUrl: string;
    codeUrl: string;
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
                </Card.Footer>
            </Flex>
        </Card.Root>
    );
};

export default ProjectsSection;
