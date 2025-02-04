import { Box, Container, Flex, IconButton, Text } from '@chakra-ui/react'
import { IconArrowUpDashed } from '@tabler/icons-react'
import { scrollToSection } from '../utils/scrollToSection'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box as='footer' py={8} width='100%' borderTopWidth='1px'>
      <Container maxW='7xl'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='sm'>© {year} Oskar Kąklewski</Text>
          <Box>
            <IconButton
              rounded='full'
              variant='outline'
              aria-label='Back to the top'
              onClick={() => scrollToSection('main')}>
              <IconArrowUpDashed stroke={1.75} />
            </IconButton>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
