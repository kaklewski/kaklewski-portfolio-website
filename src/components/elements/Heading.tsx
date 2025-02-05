import { Heading } from '@chakra-ui/react'

export default function CustomHeading({ text }: { text: string }) {
  return (
    <Heading size={{ base: '3xl', sm: '4xl', md: '5xl' }} mb={4}>
      {text}
    </Heading>
  )
}
