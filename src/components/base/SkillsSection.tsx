import { Badge, Card, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import {
    SiCss,
    SiDocker,
    SiExpress,
    SiFigma,
    SiFlask,
    SiGit,
    SiGithub,
    SiGulp,
    SiHtml5,
    SiJavascript,
    SiLinux,
    SiNetlify,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiSass,
    SiSolid,
    SiSqlite,
    SiSvelte,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from '@icons-pack/react-simple-icons';
import { IconBrandAdobePhotoshop, IconVersions } from '@tabler/icons-react';
import { forwardRef, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import CustomHeading from '../elements/CustomHeading';

const SkillsSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    return (
        <SkillsSectionContainer ref={ref}>
            <CustomHeading text={t('skillsSection.heading')} />
            <SkillCardGrid />
        </SkillsSectionContainer>
    );
});

const SkillsSectionContainer = forwardRef<
    HTMLDivElement,
    { children: ReactNode }
>(({ children }, ref) => (
    <Container
        ref={ref}
        maxW="7xl"
        id="skills"
        py={{ base: 20, md: 36 }}
        backgroundImage="url(background.png)"
    >
        {children}
    </Container>
));

const SkillCardGrid = () => (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        <SkillCard title="JavaScript">
            <SkillBadge color="blue" icon={<SiTypescript />}>
                TypeScript
            </SkillBadge>
            <SkillBadge color="yellow" icon={<SiJavascript />}>
                JavaScript
            </SkillBadge>
            <SkillBadge color="cyan" icon={<SiReact />}>
                React
            </SkillBadge>
            <SkillBadge color="blue" icon={<SiSolid />}>
                Solid
            </SkillBadge>
            <SkillBadge color="orange" icon={<SiSvelte />}>
                Svelte
            </SkillBadge>
        </SkillCard>

        <SkillCard title="Front End">
            <SkillBadge color="orange" icon={<SiHtml5 />}>
                HTML5
            </SkillBadge>
            <SkillBadge color="purple" icon={<SiCss />}>
                CSS3
            </SkillBadge>
            <SkillBadge color="pink" icon={<SiSass />}>
                SASS
            </SkillBadge>
            <SkillBadge color="blue" icon={<SiTailwindcss />}>
                Tailwind
            </SkillBadge>

            <SkillBadge color="gray" icon={<IconVersions stroke={1.5} />}>
                RWD
            </SkillBadge>
        </SkillCard>

        <SkillCard title="Bundling">
            <SkillBadge color="purple" icon={<SiVite />}>
                Vite
            </SkillBadge>
            <SkillBadge color="pink" icon={<SiGulp />}>
                Gulp
            </SkillBadge>
        </SkillCard>

        <SkillCard title="Back End">
            <SkillBadge color="red" icon={<SiNodedotjs />}>
                Node.js
            </SkillBadge>
            <SkillBadge color="yellow" icon={<SiExpress />}>
                Express
            </SkillBadge>
            <SkillBadge color="blue" icon={<SiPython />}>
                Python
            </SkillBadge>
            <SkillBadge color="gray" icon={<SiFlask />}>
                Flask
            </SkillBadge>
            <SkillBadge color="green" icon={<SiSqlite />}>
                SQL
            </SkillBadge>
        </SkillCard>

        <SkillCard title="DevOps && CD/CI">
            <SkillBadge color="red" icon={<SiGit />}>
                Git
            </SkillBadge>
            <SkillBadge color="yellow" icon={<SiLinux />}>
                Linux
            </SkillBadge>
            <SkillBadge color="blue" icon={<SiDocker />}>
                Docker
            </SkillBadge>
            <SkillBadge color="teal" icon={<SiNetlify />}>
                Netlify
            </SkillBadge>
            <SkillBadge color="gray" icon={<SiGithub />}>
                GitHub
            </SkillBadge>
        </SkillCard>

        <SkillCard title="Design">
            <SkillBadge
                color="blue"
                icon={<IconBrandAdobePhotoshop stroke={1.5} />}
            >
                Photoshop
            </SkillBadge>
            <SkillBadge color="orange" icon={<SiFigma />}>
                Figma
            </SkillBadge>
        </SkillCard>
    </SimpleGrid>
);

type SkillCardProps = {
    title: string;
    children: ReactNode;
};

const SkillCard = ({ title, children }: SkillCardProps) => (
    <Card.Root variant="outline">
        <Card.Header>
            <Card.Title>{title}</Card.Title>
        </Card.Header>
        <Card.Body>
            <Flex gap={3} wrap="wrap">
                {children}
            </Flex>
        </Card.Body>
    </Card.Root>
);

type SkillBadgeProps = {
    color: string;
    icon: ReactNode;
    children: ReactNode;
};

const SkillBadge = ({ color, icon, children }: SkillBadgeProps) => (
    <Badge
        size={{ base: 'md', lg: 'lg' }}
        variant="surface"
        colorPalette={color}
        py={{ base: 1, lg: 2 }}
    >
        <Flex gap={2} alignItems="center">
            {icon}
            {children}
        </Flex>
    </Badge>
);

export default SkillsSection;
