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
            name: t('projectsSection.projects.kalkdoktor.name'),
            description: t('projectsSection.projects.kalkdoktor.description'),
            tools: ['React', 'TypeScript', 'Chakra UI', 'Vite', 'PWA'],
            demoUrl: 'https://kalkdoktor.pl',
            codeUrl: 'https://github.com/kaklewski/kalkdoktor',
        },
        {
            image: 'screenshots/lingva.png',
            name: t('projectsSection.projects.lingvaSidebar.name'),
            description: t(
                'projectsSection.projects.lingvaSidebar.description',
            ),
            tools: ['JavaScript', 'HTML5', 'WebExtensions API', 'Lingva API'],
            demoUrl:
                'https://addons.mozilla.org/firefox/addon/lingva-in-sidebar',
            codeUrl: 'https://github.com/kaklewski/lingva-sidebar',
        },
        {
            image: 'screenshots/amnesia.png',
            name: t('projectsSection.projects.amnesia.name'),
            description: t('projectsSection.projects.amnesia.description'),
            tools: ['JavaScript', 'HTML5', 'WebExtensions API'],
            demoUrl:
                'https://addons.mozilla.org/firefox/addon/amnesia-cleaner/',
            codeUrl: 'https://github.com/kaklewski/amnesia',
        },
        {
            image: 'screenshots/portfolio.png',
            name: t('projectsSection.projects.portfolio.name'),
            description: t('projectsSection.projects.portfolio.description'),
            tools: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
            demoUrl: 'https://kaklewski.pl',
            codeUrl: 'https://github.com/kaklewski/kaklewski-portfolio-website',
        },
    ];

    const technicalDemos = [
        {
            image: 'screenshots/react-pokedex.png',
            name: t('projectsSection.projects.reactPokedex.name'),
            description: t('projectsSection.projects.reactPokedex.description'),
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
            name: t('projectsSection.projects.zenithCalendar.name'),
            description: t(
                'projectsSection.projects.zenithCalendar.description',
            ),
            tools: ['React', 'TypeScript', 'SASS', 'Vite'],
            demoUrl: 'https://zenith-calendar.netlify.app',
            codeUrl: 'https://github.com/kaklewski/zenith-calendar',
        },
        {
            image: 'screenshots/zenith-docs.png',
            name: t('projectsSection.projects.zenithDocs.name'),
            description: t('projectsSection.projects.zenithDocs.description'),
            tools: ['React', 'TypeScript', 'SASS', 'Firebase', 'Vite'],
            demoUrl: 'https://zenith-docs.netlify.app/',
            codeUrl: 'https://github.com/kaklewski/zenith-docs',
        },
    ];

    const commercialProjects = [
        {
            image: 'screenshots/mirek-handlarz.png',
            name: t('projectsSection.projects.mirekHandlarz.name'),
            description: t(
                'projectsSection.projects.mirekHandlarz.description',
            ),
            tools: ['TypeScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
            demoUrl: 'https://mirekhandlarz.pl',
        },
        {
            image: 'screenshots/projekty-wnetrz.png',
            name: t('projectsSection.projects.projektyWnetrz.name'),
            description: t(
                'projectsSection.projects.projektyWnetrz.description',
            ),
            tools: ['JavaScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
            demoUrl: 'https://projektywnetrz.net',
            codeUrl: 'https://github.com/kaklewski/projekty-wnetrz',
        },
        {
            image: 'screenshots/stomatolog-piasecki.png',
            name: t('projectsSection.projects.stomatologPiasecki.name'),
            description: t(
                'projectsSection.projects.stomatologPiasecki.description',
            ),
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

            <ProjectGrid
                headingText={t('projectsSection.sections.personalProjects')}
            >
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

            <ProjectGrid
                headingText={t('projectsSection.sections.technicalDemos')}
            >
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

            <ProjectGrid
                headingText={t('projectsSection.sections.commercialProjects')}
            >
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
    const { t } = useTranslation();

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
                    <Card.Title mb="2" fontSize="xl" className="accent-font">
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
                            <IconExternalLink stroke={1.75} />{' '}
                            {t('projectsSection.buttons.viewProject')}
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
                                {t('projectsSection.buttons.viewCode')}
                            </a>
                        </Button>
                    )}
                </Card.Footer>
            </Flex>
        </Card.Root>
    );
};

export default ProjectsSection;
