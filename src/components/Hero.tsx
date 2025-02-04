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
import { scrollToSection } from '../utils/scrollToSection'

export default function Hero() {
  return (
    <Flex
      position='relative'
      direction='column'
      justifyContent='center'
      alignItems='center'
      height={{ md: '100vh' }}
      backgroundImage='url(background.png)'
      >
      <Container maxW='3xl' id='about'>
        <Stack textAlign='center' py={{ base: 20, md: 36 }} gap={8}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight='110%'>
            {'Hello! My name is '}
            <Text as='span' color='teal.400'>
              Oskar
            </Text>
          </Heading>
          <Text color='gray.400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ab
            fugit voluptates atque odit, porro exercitationem sit, rem id
            aliquid asperiores iusto, mollitia architecto. Pariatur ab corporis
            sit ratione consequuntur reiciendis.
          </Text>
          <Stack direction='row' align='center' alignSelf='center'>
            <Button variant='outline' rounded='full' size='xl' asChild>
              <a href='https://www.linkedin.com/in/oskar-kaklewski/'>
                <IconBrandLinkedin stroke={1.75} /> LinkedIn
              </a>
            </Button>
            <Button variant='outline' rounded='full' size='xl' asChild>
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
          colorPalette='teal'
          rounded='full'
          size='lg'
          onClick={() => scrollToSection('skills')}>
          <IconArrowDownDashed stroke={1.75} />
        </IconButton>
      </Box>
    </Flex>
  )
}
