import {
    Badge,
    Box,
    Button,
    Card,
    Flex,
    Heading,
    HStack,
    Image,
    SimpleGrid,
} from '@chakra-ui/react';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { forwardRef, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import CustomHeading from '../elements/CustomHeading';
import SectionContainer from '../elements/SectionContainer';

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    const projects = {
        personal: [
            {
                image: 'screenshots/kalkdoktor.webp',
                name: t('projectsSection.projects.kalkdoktor.name'),
                description: t(
                    'projectsSection.projects.kalkdoktor.description',
                ),
                tools: ['React', 'TypeScript', 'Chakra UI', 'Vite', 'PWA'],
                demoUrl: 'https://kalkdoktor.pl',
                codeUrl: 'https://github.com/kaklewski/kalkdoktor',
            },
            {
                image: 'screenshots/lingva.webp',
                name: t('projectsSection.projects.lingvaSidebar.name'),
                description: t(
                    'projectsSection.projects.lingvaSidebar.description',
                ),
                tools: [
                    'JavaScript',
                    'HTML5',
                    'WebExtensions API',
                    'Lingva API',
                ],
                demoUrl:
                    'https://addons.mozilla.org/firefox/addon/lingva-in-sidebar',
                codeUrl: 'https://github.com/kaklewski/lingva-sidebar',
            },
            {
                image: 'screenshots/amnesia.webp',
                name: t('projectsSection.projects.amnesia.name'),
                description: t('projectsSection.projects.amnesia.description'),
                tools: ['JavaScript', 'HTML5', 'WebExtensions API'],
                demoUrl:
                    'https://addons.mozilla.org/firefox/addon/amnesia-cleaner/',
                codeUrl: 'https://github.com/kaklewski/amnesia',
            },
            {
                image: 'screenshots/portfolio.webp',
                name: t('projectsSection.projects.portfolio.name'),
                description: t(
                    'projectsSection.projects.portfolio.description',
                ),
                tools: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
                demoUrl: 'https://kaklewski.pl',
                codeUrl:
                    'https://github.com/kaklewski/kaklewski-portfolio-website',
            },
        ],
        demos: [
            {
                image: 'screenshots/react-pokedex.webp',
                name: t('projectsSection.projects.reactPokedex.name'),
                description: t(
                    'projectsSection.projects.reactPokedex.description',
                ),
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
                image: 'screenshots/zenith-calendar.webp',
                name: t('projectsSection.projects.zenithCalendar.name'),
                description: t(
                    'projectsSection.projects.zenithCalendar.description',
                ),
                tools: ['React', 'TypeScript', 'SASS', 'Vite'],
                demoUrl: 'https://zenith-calendar.netlify.app',
                codeUrl: 'https://github.com/kaklewski/zenith-calendar',
            },
            {
                image: 'screenshots/zenith-docs.webp',
                name: t('projectsSection.projects.zenithDocs.name'),
                description: t(
                    'projectsSection.projects.zenithDocs.description',
                ),
                tools: ['React', 'TypeScript', 'SASS', 'Firebase', 'Vite'],
                demoUrl: 'https://zenith-docs.netlify.app/',
                codeUrl: 'https://github.com/kaklewski/zenith-docs',
            },
        ],
        commercial: [
            {
                image: 'screenshots/mirek-handlarz.webp',
                name: t('projectsSection.projects.mirekHandlarz.name'),
                description: t(
                    'projectsSection.projects.mirekHandlarz.description',
                ),
                tools: ['TypeScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
                demoUrl: 'https://mirekhandlarz.pl',
            },
            {
                image: 'screenshots/projekty-wnetrz.webp',
                name: t('projectsSection.projects.projektyWnetrz.name'),
                description: t(
                    'projectsSection.projects.projektyWnetrz.description',
                ),
                tools: ['JavaScript', 'HTML5', 'SASS', 'Vite', 'RWD'],
                demoUrl: 'https://projektywnetrz.net',
                codeUrl: 'https://github.com/kaklewski/projekty-wnetrz',
            },
            {
                image: 'screenshots/stomatolog-piasecki.webp',
                name: t('projectsSection.projects.stomatologPiasecki.name'),
                description: t(
                    'projectsSection.projects.stomatologPiasecki.description',
                ),
                tools: ['JavaScript', 'HTML5', 'SASS', 'Gulp', 'RWD'],
                demoUrl: 'https://stomatologpiasecki.pl',
                codeUrl: 'https://github.com/kaklewski/stomatolog-piasecki',
            },
        ],
    };

    return (
        <SectionContainer sectionId="projects" ref={ref}>
            <CustomHeading text={t('projectsSection.heading')} />

            <ProjectGrid
                headingText={t('projectsSection.sections.personalProjects')}
            >
                {projects.personal.map((project) => (
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
                {projects.demos.map((project) => (
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
                {projects.commercial.map((project) => (
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
        </SectionContainer>
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
                    width="100%"
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
                            <ToolBadge key={tool} name={tool} />
                        ))}
                    </HStack>
                </Card.Body>
                <Card.Footer>
                    <LinkButton url={demoUrl} icon={<IconExternalLink />}>
                        {t('projectsSection.buttons.viewProject')}
                    </LinkButton>
                    {codeUrl && (
                        <LinkButton
                            url={codeUrl}
                            icon={<IconBrandGithub />}
                            variant="surface"
                        >
                            {t('projectsSection.buttons.viewCode')}
                        </LinkButton>
                    )}
                </Card.Footer>
            </Flex>
        </Card.Root>
    );
};

type ToolBadgeProps = {
    name: string;
};

const ToolBadge = ({ name }: ToolBadgeProps) => (
    <Badge variant="outline" colorPalette="teal">
        {name}
    </Badge>
);

type LinkButtonProps = {
    url: string;
    icon: ReactNode;
    variant?: 'solid' | 'subtle' | 'outline' | 'ghost' | 'surface' | 'plain';
    children: ReactNode;
};

const LinkButton = ({ url, icon, variant, children }: LinkButtonProps) => (
    <Button rounded="full" asChild variant={variant}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            {icon}
            {children}
        </a>
    </Button>
);

export default ProjectsSection;
