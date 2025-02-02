import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'

const projects = [
  {
    image: 'screenshots/kalkdoktor.png',
    name: 'Kalkdoktor',
    description:
      'A web app with medical calculators and scales that help doctors diagnose their patients and choose the right treatment.',
    tools: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
    demoUrl: 'https://kalkdoktor.pl',
    codeUrl: 'https://github.com/kaklewski/kalkdoktor',
  },
  {
    image: 'screenshots/zenith-calendar.png',
    name: 'Zenith Calendar',
    description: 'A calendar app inspired by Google Calendar.',
    tools: ['React', 'TypeScript', 'SASS', 'Vite'],
    demoUrl: 'https://zenith-calendar.netlify.app',
    codeUrl: 'https://github.com/kaklewski/zenith-calendar',
  },
  {
    image: 'screenshots/zenith-docs.png',
    name: 'Zenith Docs',
    description: 'A modern, collaborative text editor inspired by Google Docs.',
    tools: ['React', 'TypeScript', 'SASS', 'Firebase', 'Vite'],
    demoUrl: 'https://zenith-docs.netlify.app/',
    codeUrl: 'https://github.com/kaklewski/zenith-docs',
  },
  {
    image: 'screenshots/pokedex.png',
    name: 'Pokedex',
    description: 'Fetch API and search your favorite pokemon.',
    tools: ['React', 'JavaScript', 'SASS', 'Vite'],
    demoUrl: 'https://kaklewski.github.io/pokemon-search',
    codeUrl: 'https://github.com/kaklewski/pokemon-search',
  },
  {
    image: 'screenshots/gymnormous.png',
    name: 'GYMnormous',
    description: 'Fetch API and search your favorite pokemon.',
    tools: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://kaklewski.github.io/gymnormous',
    codeUrl: 'https://github.com/kaklewski/gymnormous',
  },
  {
    image: 'screenshots/projekty-wnetrz.png',
    name: 'Projekty Wnętrz',
    description: "An interior designer's portfolio website.",
    tools: ['JavaScript', 'HTML5', 'SASS', 'Vite'],
    demoUrl: 'https://projektywnetrz.net',
    codeUrl: 'https://github.com/kaklewski/projekty-wnetrz',
  },
  {
    image: 'screenshots/stomatolog-piasecki.png',
    name: 'Stomatolog Piasecki',
    description: 'A dental website made for one of my clients.',
    tools: ['JavaScript', 'HTML5', 'SASS', 'Gulp'],
    demoUrl: 'https://stomatologpiasecki.pl',
    codeUrl: 'https://github.com/kaklewski/stomatolog-piasecki',
  },
]

export default function Projects() {
  return (
    <Container maxW='7xl' id='projects' py={{ base: 20, md: 36 }}>
      <Heading size='4xl' mb={4}>
        Featured Projects && Clients
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        {projects.map(project => {
          return (
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              tools={project.tools}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

type ProjectCardProps = {
  image: string
  name: string
  description: string
  tools: string[]
  demoUrl: string
  codeUrl: string
}

function ProjectCard({
  image,
  name,
  description,
  tools,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card.Root overflow='hidden'>
      <Box maxW='100%' aspectRatio='16/9' overflow={'hidden'}>
        <Image
          objectFit='cover'
          src={image}
          alt={`Screenshot of ${name}`}
          transition='scale .25s'
          transitionTimingFunction='ease-in-out'
          _hover={{ scale: '1.03' }}
        />
      </Box>
      <Box>
        <Card.Body>
          <Card.Title mb='2'>{name}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <HStack mt='4'>
            {tools.map(tool => (
              <Badge variant='outline' colorPalette='teal'>
                {tool}
              </Badge>
            ))}
          </HStack>
        </Card.Body>
        <Card.Footer>
          <Button rounded='full' asChild>
            <a href={demoUrl}>
              <IconExternalLink stroke={1.75} /> Live Version
            </a>
          </Button>
          <Button variant='surface' rounded='full' asChild>
            <a href={codeUrl}>
              <IconBrandGithub stroke={1.75} />
              Source Code
            </a>
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  )
}
