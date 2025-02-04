import {
  Box,
  Button,
  Card,
  Container,
  Field,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { IconSend } from '@tabler/icons-react'

export default function Contact() {
  return (
    <Container
      maxW='7xl'
      id='contact'
      py={{ base: 20, md: 36 }}
      backgroundImage='url(background.png)'>
      <Heading size='4xl' mb={4}>
        Contact Me
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Box>
          <div>elo</div>
        </Box>

        <Card.Root variant='outline'>
          <Card.Body>
            <form
              name='contact'
              method='POST'
              data-netlify='true'
              data-netlify-honeypot='bot-field'>
              <Stack gap={6}>
                <Field.Root display='none'>
                  <Field.Label>Name</Field.Label>
                  <Input type='text' name='bot-filed' title='bot-field' />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder='Jon Snow' type='text' name='name' />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Email</Field.Label>
                  <Input
                    placeholder='me@example.com'
                    type='email'
                    name='email'
                  />
                </Field.Root>
                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea placeholder='Lorem ipsum' rows={5} name='message' />
                </Field.Root>
                <Button
                  variant='surface'
                  rounded='full'
                  maxW='fit-content'
                  alignSelf='center'
                  colorPalette='teal'
                  type='submit'>
                  <IconSend /> Submit
                </Button>
              </Stack>
            </form>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Container>
  )
}
