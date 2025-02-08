import {
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
  IconButton,
  Box,
} from '@chakra-ui/react'
import {
  IconArrowDownDashed,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import { scrollToSection } from '../../utils/scrollToSection'
import HeroBgImage from '../../img/hero-background.svg'

export default function Hero() {
  return (
    <Flex
      position='relative'
      direction='column'
      justifyContent='center'
      alignItems='center'
      height={{ md: '100vh' }}
      backgroundImage='url(background.png)'>
      <Box position='absolute' w={{ base: '450px', md: '900px' }}>
        <HeroBgImage />
      </Box>

      <Box
        position='absolute'
        w={{ base: '135px', md: '250px' }}
        h={{ base: '40px', md: '80px' }}
        bgColor='teal.400'
        filter={{ base: 'blur(40px)', md: 'blur(80px)' }}
        borderRadius={{ base: '50px', md: '100px' }}></Box>

      <Container maxW='3xl' id='about'>
        <Stack textAlign='center' py={{ base: 20, md: 36 }} gap={6}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight='110%'>
            {'Hello! myName = '}
            <Text as='span' color='teal.400'>
              Oskar
            </Text>
          </Heading>
          <Box backdropFilter='blur(2px)' borderRadius='xl' position='relative'>
            <Box
              position='absolute'
              display={{ base: 'none', md: 'block' }}
              w='100%'
              h='100%'
              borderRadius='100%'
              top='10px'
              bgColor='#09090B'
              filter='blur(35px)'></Box>

            <Text
              position='relative'
              zIndex='1'
              maxW='80vw'
              textShadow='0 1px 25px #09090B'
              marginInline='auto'
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}>
              I'm a Front-End Developer who builds fast, modern, and great
              looking web apps.
            </Text>
          </Box>
          <Stack direction='row' align='center' alignSelf='center'>
            <Button
              variant='surface'
              colorPalette='teal'
              rounded='full'
              size='xl'
              asChild>
              <a href='https://www.linkedin.com/in/oskar-kaklewski/'>
                <IconBrandLinkedin stroke={1.75} /> LinkedIn
              </a>
            </Button>
            <Button
              variant='surface'
              colorPalette='teal'
              rounded='full'
              size='xl'
              asChild>
              <a href='https://github.com/kaklewski/'>
                <IconBrandGithub stroke={1.75} /> GitHub
              </a>
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Box
        position='absolute'
        bottom={8}
        display={{ base: 'none', md: 'revert' }}>
        <IconButton
          variant='outline'
          rounded='full'
          size='lg'
          onClick={() => scrollToSection('skills')}>
          <IconArrowDownDashed stroke={1.75} />
        </IconButton>
      </Box>
    </Flex>
  )
}
