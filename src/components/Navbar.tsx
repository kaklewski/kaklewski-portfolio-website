import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
} from '@chakra-ui/react'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from '../components/ui/drawer'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'

const links = [
  {
    name: 'Skills',
    href: 'skills',
  },
  {
    name: 'Projects',
    href: 'projects',
  },
  {
    name: 'Contact',
    href: 'contact',
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
      position={{ base: 'sticky', md: 'fixed' }}
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
            <DrawerContent
              position='relative'
              zIndex='tooltip'
              color='white'
              backgroundColor='rgba(9,9,11,.9)'
              backdropFilter='blur(13px) saturate(130%)'
              shadow='none'
              borderLeftWidth='1px'
              borderLeftColor={'gray.900'}>
              <DrawerHeader>
                <button
                  type='button'
                  aria-label='Close Menu'
                  onClick={() => setIsMenuOpen(false)}>
                  <IconX stroke={1.75} />
                </button>
              </DrawerHeader>
              <DrawerBody>
                <Flex
                  direction='column'
                  justifyContent='center'
                  alignItems='start'
                  gap={35}
                  height='100%'
                  pl={4}
                  pb={100}>
                  {links.map(link => (
                    <MenuLink
                      key={link.name}
                      linkName={link.name}
                      linkHref={link.href}
                      closeMenu={setIsMenuOpen}
                    />
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
    <Button
      variant='plain'
      size='lg'
      p={0}
      _hover={{
        textDecoration: 'none',
        color: 'teal.400',
      }}
      transition='color .12s'
      onClick={() => scrollToSection(linkHref)}>
      {linkName}
    </Button>
  )
}

type MenuLinkProps = NavbarLinkProps & {
  closeMenu: (arg: boolean) => void
}

function MenuLink({ linkName, linkHref, closeMenu }: MenuLinkProps) {
  return (
    <Button
      variant='plain'
      p={0}
      color='white'
      fontSize={40}
      fontWeight='900'
      onClick={() => {
        closeMenu(false)
        scrollToSection(linkHref)
      }}>
      {linkName}
    </Button>
  )
}
