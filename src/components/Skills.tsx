import {
  Container,
  SimpleGrid,
  Card,
  Heading,
  Badge,
  Flex,
} from '@chakra-ui/react'
import {
  SiChakraui,
  SiDocker,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNetlify,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons'
import {
  IconBrandAdobePhotoshop,
  IconDatabase,
  IconMilkshake,
  IconVersions,
} from '@tabler/icons-react'
import React from 'react'

export default function Skills() {
  return (
    <Container maxW='6xl' id='skills'>
      <Heading size='4xl' mb={4}>
        My Skills && Stack
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
        <SkillCard title='JavaScript'>
          <SkillBadge color='blue'>
            <SiReact />
            React
          </SkillBadge>
          <SkillBadge color='yellow'>
            <SiJavascript />
            JavaScript
          </SkillBadge>
          <SkillBadge color='teal'>
            <SiChakraui />
            Chakra UI
          </SkillBadge>
          <SkillBadge color='blue'>
            <SiTypescript />
            TypeScript
          </SkillBadge>
        </SkillCard>

        <SkillCard title='Front End'>
          <SkillBadge color='orange'>
            <SiHtml5 />
            HTML5
          </SkillBadge>
          <SkillBadge color='pink'>
            <SiSass />
            SASS
          </SkillBadge>
          <SkillBadge color='blue'>
            <SiTailwindcss />
            Tailwind
          </SkillBadge>
          <SkillBadge color='gray'>
            <IconVersions stroke={1.5} />
            RWD
          </SkillBadge>
        </SkillCard>

        <SkillCard title='Back End'>
          <SkillBadge color='blue'>
            <SiPython />
            Python
          </SkillBadge>
          <SkillBadge color='gray'>
            <SiFlask />
            Flask
          </SkillBadge>
          <SkillBadge color='red'>
            <SiNodedotjs />
            Node
          </SkillBadge>
          <SkillBadge color='green'>
            <IconDatabase stroke={1.5} />
            SQL
          </SkillBadge>
          <SkillBadge color='blue'>
            <SiDocker />
            Docker
          </SkillBadge>
        </SkillCard>

        <SkillCard title='Bundling'>
          <SkillBadge color='purple'>
            <SiVite />
            Vite
          </SkillBadge>
          <SkillBadge color='pink'>
            <IconMilkshake stroke={1.5} />
            Gulp
          </SkillBadge>
        </SkillCard>

        <SkillCard title='Design'>
          <SkillBadge color='blue'>
            <IconBrandAdobePhotoshop stroke={1.5} />
            Photoshop
          </SkillBadge>
          <SkillBadge color='orange'>
            <SiFigma />
            Figma
          </SkillBadge>
        </SkillCard>

        <SkillCard title='DevOps && CD/CI'>
          <SkillBadge color='red'>
            <SiGit />
            Git
          </SkillBadge>
          <SkillBadge color='yellow'>
            <SiLinux />
            Linux
          </SkillBadge>
          <SkillBadge color='teal'>
            <SiNetlify />
            Netlify
          </SkillBadge>
          <SkillBadge color='gray'>
            <SiGithub />
            GitHub
          </SkillBadge>
        </SkillCard>
      </SimpleGrid>
    </Container>
  )
}

type SkillCardProps = {
  children: React.ReactNode
  title: string
}

function SkillCard({ children, title }: SkillCardProps) {
  return (
    <Card.Root variant='outline'>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Flex gap={3} wrap='wrap'>
          {children}
        </Flex>
      </Card.Body>
    </Card.Root>
  )
}

type SkillBadgeProps = {
  children: React.ReactNode
  color: string
}

function SkillBadge({ children, color }: SkillBadgeProps) {
  return (
    <Badge
      size={{ base: 'md', lg: 'lg' }}
      variant='surface'
      colorPalette={color}
      py={{ base: 1, lg: 2 }}>
      <Flex gap={2} alignItems='center'>
        {children}
      </Flex>
    </Badge>
  )
}
