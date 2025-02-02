import { Box, Container, Flex, Link } from '@chakra-ui/react'

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
      zIndex='skipNav'
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
