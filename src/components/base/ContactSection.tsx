import {
    Box,
    Button,
    Card,
    Container,
    Field,
    Flex,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMapPin,
    IconSend,
} from '@tabler/icons-react';
import { FormEvent, forwardRef, useCallback } from 'react';
import CustomHeading from '../elements/Heading';
import { Toaster, toaster } from '../ui/toaster';

const ContactSection = forwardRef<HTMLDivElement>((props, ref) => {
    const handleSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const form = event.currentTarget;
            const formData = new FormData(form);

            try {
                await fetch('/', {
                    method: 'POST',
                    body: formData,
                });

                toaster.create({
                    title: 'Message sent!',
                    description: 'Thanks for reaching out!',
                    type: 'success',
                    closable: true,
                });

                form.reset();
            } catch (err) {
                toaster.create({
                    title: 'Error',
                    description: `Something went wrong. Error description: ${(err as Error).message}`,
                    type: 'error',
                    closable: true,
                });
            }
        },
        [],
    );

    return (
        <Container
            maxW="7xl"
            id="contact"
            py={{ base: 20, md: 36 }}
            backgroundImage="url(background.png)"
            ref={ref}
        >
            <Toaster />

            <CustomHeading text="Contact Me || Say Hello" />

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 16, md: 6 }}>
                <FormCard handleSubmit={handleSubmit} />
                <SocialLinks />
            </SimpleGrid>
        </Container>
    );
});

type FormCardProps = {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const FormCard = ({ handleSubmit }: FormCardProps) => {
    return (
        <Card.Root variant="outline">
            <Card.Body>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <Stack gap={6}>
                        <Field.Root
                            maxH="0"
                            maxW="0"
                            visibility="collapse"
                            position="absolute"
                        >
                            <Field.Label>Bot</Field.Label>
                            <Input name="bot-field" title="bot-field" />
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>Name</Field.Label>
                            <Input
                                placeholder="Skyler White"
                                type="text"
                                name="name"
                            />
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>Email</Field.Label>
                            <Input
                                placeholder="skyler.white@proton.me"
                                type="email"
                                name="email"
                            />
                        </Field.Root>
                        <Field.Root required>
                            <Field.Label>Message</Field.Label>
                            <Textarea
                                placeholder="My name is Skyler White, yo!"
                                rows={5}
                                name="message"
                            />
                        </Field.Root>
                        <Button
                            variant="surface"
                            rounded="full"
                            maxW="fit-content"
                            alignSelf="center"
                            colorPalette="teal"
                            type="submit"
                        >
                            <IconSend /> Submit
                        </Button>
                    </Stack>
                </form>
            </Card.Body>
        </Card.Root>
    );
};

const SocialLinks = () => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <Flex direction="column" gap={{ base: 8, md: 12 }} color="teal.400">
                <Box>
                    <Flex gap={1} alignItems="center">
                        <IconMapPin stroke={1} size={50} />
                        <Text
                            className="accent-font"
                            color="white"
                            fontSize="20px"
                        >
                            Gdańsk, Poland
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap={1} alignItems="center">
                        <IconBrandLinkedin stroke={1} size={50} />
                        <Link
                            href="https://www.linkedin.com/in/oskar-kaklewski/"
                            target="_blank"
                        >
                            <Text className="accent-font" fontSize="20px">
                                /in/oskar-kaklewski
                            </Text>
                        </Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap={1} alignItems="center">
                        <IconBrandGithub stroke={1} size={50} />
                        <Link
                            href="https://github.com/kaklewski"
                            target="_blank"
                        >
                            <Text className="accent-font" fontSize="20px">
                                /kaklewski
                            </Text>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ContactSection;
