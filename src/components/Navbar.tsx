import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
} from '@chakra-ui/react'
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer'
import { IconMenu2 } from '@tabler/icons-react'

const links = [
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export default function Navbar() {
  return (
    <Box
      as='nav'
      py={4}
      width='100%'
      borderBottomWidth='1px'
      position='sticky'
      top={0}
      zIndex='1000'
      backgroundColor='rgba(9,9,11,.8)'
      backdropFilter='blur(13px) saturate(150%)'>
      <Container maxW='7xl'>
        <Flex justify='space-between' align='center'>
          <Link
            href='/'
            fontSize='xl'
            fontWeight='bold'
            _hover={{
              textDecoration: 'none',
            }}>
            Oskar Kąklewski
          </Link>

          <Box display={{ base: 'none', sm: 'inline-block' }}>
            <Flex gap={6}>
              {links.map(link => (
                <NavbarLink
                  key={link.name}
                  linkName={link.name}
                  linkHref={link.href}
                />
              ))}
            </Flex>
          </Box>

          <DrawerRoot>
            <DrawerBackdrop />
            <DrawerTrigger asChild display={{ sm: 'none' }}>
              <IconButton
                aria-label='Open Menu'
                variant='outline'
                display='flex'>
                <IconMenu2 stroke={1.75} />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent position='relative' zIndex='tooltip'>
              <DrawerHeader>
                <DrawerTitle>Drawer Title</DrawerTitle>
              </DrawerHeader>
              <DrawerBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant='outline'>Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        </Flex>
      </Container>
    </Box>
  )
}

type NavbarLinkProps = {
  linkName: string
  linkHref: string
}

function NavbarLink({ linkName, linkHref }: NavbarLinkProps) {
  return (
    <Link
      href={linkHref}
      _hover={{
        textDecoration: 'none',
        color: 'teal.400',
      }}
      transition='color .12s'
      transitionTimingFunction='ease-in-out'>
      {linkName}
    </Link>
  )
}
