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
import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import CustomHeading from '../elements/Heading';

const SkillsSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

    return (
        <Container
            maxW="7xl"
            id="skills"
            py={{ base: 20, md: 36 }}
            backgroundImage="url(background.png)"
            ref={ref}
        >
            <CustomHeading text={t('skillsSection.heading')} />

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                <SkillCard title="JavaScript">
                    <SkillBadge color="blue">
                        <SiTypescript />
                        TypeScript
                    </SkillBadge>
                    <SkillBadge color="yellow">
                        <SiJavascript />
                        JavaScript
                    </SkillBadge>
                    <SkillBadge color="cyan">
                        <SiReact />
                        React
                    </SkillBadge>
                    <SkillBadge color="blue">
                        <SiSolid />
                        Solid
                    </SkillBadge>
                    <SkillBadge color="orange">
                        <SiSvelte />
                        Svelte
                    </SkillBadge>
                </SkillCard>

                <SkillCard title="Front End">
                    <SkillBadge color="orange">
                        <SiHtml5 />
                        HTML5
                    </SkillBadge>
                    <SkillBadge color="purple">
                        <SiCss />
                        CSS3
                    </SkillBadge>
                    <SkillBadge color="pink">
                        <SiSass />
                        SASS
                    </SkillBadge>
                    <SkillBadge color="blue">
                        <SiTailwindcss />
                        Tailwind
                    </SkillBadge>
                    <SkillBadge color="gray">
                        <IconVersions stroke={1.5} />
                        RWD
                    </SkillBadge>
                </SkillCard>

                <SkillCard title="Bundling">
                    <SkillBadge color="purple">
                        <SiVite />
                        Vite
                    </SkillBadge>
                    <SkillBadge color="pink">
                        <SiGulp />
                        Gulp
                    </SkillBadge>
                </SkillCard>

                <SkillCard title="Back End">
                    <SkillBadge color="red">
                        <SiNodedotjs />
                        Node.js
                    </SkillBadge>
                    <SkillBadge color="yellow">
                        <SiExpress />
                        Express
                    </SkillBadge>
                    <SkillBadge color="blue">
                        <SiPython />
                        Python
                    </SkillBadge>
                    <SkillBadge color="gray">
                        <SiFlask />
                        Flask
                    </SkillBadge>
                    <SkillBadge color="green">
                        <SiSqlite />
                        SQL
                    </SkillBadge>
                </SkillCard>

                <SkillCard title="DevOps && CD/CI">
                    <SkillBadge color="red">
                        <SiGit />
                        Git
                    </SkillBadge>
                    <SkillBadge color="yellow">
                        <SiLinux />
                        Linux
                    </SkillBadge>
                    <SkillBadge color="blue">
                        <SiDocker />
                        Docker
                    </SkillBadge>
                    <SkillBadge color="teal">
                        <SiNetlify />
                        Netlify
                    </SkillBadge>
                    <SkillBadge color="gray">
                        <SiGithub />
                        GitHub
                    </SkillBadge>
                </SkillCard>

                <SkillCard title="Design">
                    <SkillBadge color="blue">
                        <IconBrandAdobePhotoshop stroke={1.5} />
                        Photoshop
                    </SkillBadge>
                    <SkillBadge color="orange">
                        <SiFigma />
                        Figma
                    </SkillBadge>
                </SkillCard>
            </SimpleGrid>
        </Container>
    );
});

type SkillCardProps = {
    children: React.ReactNode;
    title: string;
};

const SkillCard = ({ children, title }: SkillCardProps) => {
    return (
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
};

type SkillBadgeProps = {
    children: React.ReactNode;
    color: string;
};

const SkillBadge = ({ children, color }: SkillBadgeProps) => {
    return (
        <Badge
            size={{ base: 'md', lg: 'lg' }}
            variant="surface"
            colorPalette={color}
            py={{ base: 1, lg: 2 }}
        >
            <Flex gap={2} alignItems="center">
                {children}
            </Flex>
        </Badge>
    );
};

export default SkillsSection;
