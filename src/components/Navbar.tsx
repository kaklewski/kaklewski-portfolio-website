import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
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
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

          <DrawerRoot
            open={isMenuOpen}
            onOpenChange={e => setIsMenuOpen(e.open)}>
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
                <Flex justifyContent='end' alignItems='center'>
                  <button
                    type='button'
                    aria-label='Close Menu'
                    onClick={() => setIsMenuOpen(false)}>
                    <IconX stroke={1.75} />
                  </button>
                </Flex>
              </DrawerHeader>
              <DrawerBody>
                <Flex
                  direction='column'
                  justifyContent='center'
                  gap={10}
                  height='100%'
                  pb={100}>
                  {links.map(link => (
                    <Button
                      variant='ghost'
                      size='lg'
                      onClick={() => setIsMenuOpen(false)}
                      fontSize={25}
                      textAlign='start'>
                      <NavbarLink
                        key={link.name}
                        linkName={link.name}
                        linkHref={link.href}
                      />
                    </Button>
                  ))}
                </Flex>
              </DrawerBody>
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
