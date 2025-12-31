import {
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
import { FormEvent, forwardRef, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import CustomHeading from '../elements/CustomHeading';
import { Toaster, toaster } from '../ui/toaster';

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
    const { t } = useTranslation();

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
                    title: t('contactSection.toasts.success.title'),
                    description: t('contactSection.toasts.success.description'),
                    type: 'success',
                    closable: true,
                });

                form.reset();
            } catch (err) {
                toaster.create({
                    title: t('contactSection.toasts.error.title'),
                    description: `${t(
                        'contactSection.toasts.error.description',
                    )} ${(err as Error).message}`,
                    type: 'error',
                    closable: true,
                });
            }
        },
        [t],
    );

    return (
        <ContactSectionContainer ref={ref}>
            <Toaster />

            <CustomHeading text={t('contactSection.heading')} />

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 16, md: 6 }}>
                <ContactForm onSubmit={handleSubmit} />
                <ContactSocialLinks />
            </SimpleGrid>
        </ContactSectionContainer>
    );
});

const ContactSectionContainer = forwardRef<
    HTMLDivElement,
    { children: ReactNode }
>(({ children }, ref) => (
    <Container
        ref={ref}
        id="contact"
        maxW="7xl"
        py={{ base: 20, md: 36 }}
        backgroundImage="url(background.png)"
    >
        {children}
    </Container>
));

type ContactFormProps = {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const { t } = useTranslation();

    return (
        <Card.Root variant="outline">
            <Card.Body>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <Stack gap={6}>
                        <NetlifyHoneypot />

                        <FormField
                            label={t('contactSection.contactForm.nameLabel')}
                            placeholder={t(
                                'contactSection.contactForm.namePlaceholder',
                            )}
                            name="name"
                        />

                        <FormField
                            type="email"
                            label={t('contactSection.contactForm.emailLabel')}
                            placeholder={t(
                                'contactSection.contactForm.emailPlaceholder',
                            )}
                            name="email"
                        />

                        <FormTextarea
                            label={t('contactSection.contactForm.messageLabel')}
                            placeholder={t(
                                'contactSection.contactForm.messagePlaceholder',
                            )}
                            name="message"
                        />

                        <SubmitButton>
                            <IconSend />
                            {t('contactSection.contactForm.submitButton')}
                        </SubmitButton>
                    </Stack>
                </form>
            </Card.Body>
        </Card.Root>
    );
};

const NetlifyHoneypot = () => (
    <Field.Root maxH="0" maxW="0" visibility="collapse" position="absolute">
        <Field.Label>Bot</Field.Label>
        <Input name="bot-field" title="bot-field" />
    </Field.Root>
);

type FormFieldProps = {
    label: string;
    placeholder: string;
    name: string;
    type?: string;
};

const FormField = ({
    label,
    placeholder,
    name,
    type = 'text',
}: FormFieldProps) => (
    <Field.Root required>
        <Field.Label>{label}</Field.Label>
        <Input name={name} type={type} placeholder={placeholder} />
    </Field.Root>
);

type FormTextareaProps = {
    label: string;
    placeholder: string;
    name: string;
};

const FormTextarea = ({ label, placeholder, name }: FormTextareaProps) => (
    <Field.Root required>
        <Field.Label>{label}</Field.Label>
        <Textarea name={name} rows={5} placeholder={placeholder} />
    </Field.Root>
);

type SubmitButtonProps = { children: ReactNode };

const SubmitButton = ({ children }: SubmitButtonProps) => (
    <Button
        type="submit"
        variant="surface"
        rounded="full"
        maxW="fit-content"
        alignSelf="center"
        colorPalette="teal"
    >
        {children}
    </Button>
);

const ContactSocialLinks = () => {
    const { t } = useTranslation();

    return (
        <Flex justify="center" align="center">
            <Stack gap={{ base: 8, md: 12 }} color="teal.400">
                <SocialItem icon={<IconMapPin stroke={1} size={50} />}>
                    {t('contactSection.location')}
                </SocialItem>

                <SocialItem
                    icon={<IconBrandLinkedin stroke={1} size={50} />}
                    href="https://www.linkedin.com/in/oskar-kaklewski/"
                >
                    /in/oskar-kaklewski
                </SocialItem>

                <SocialItem
                    icon={<IconBrandGithub stroke={1} size={50} />}
                    href="https://github.com/kaklewski"
                >
                    /kaklewski
                </SocialItem>
            </Stack>
        </Flex>
    );
};

type SocialItemProps = {
    icon: ReactNode;
    href?: string;
    children: ReactNode;
};

const SocialItem = ({ icon, href, children }: SocialItemProps) => {
    const content = href ? (
        <Link href={href} target="_blank">
            {children}
        </Link>
    ) : (
        children
    );

    return (
        <Flex gap={2} align="center">
            {icon}
            <Text className="accent-font" color="white" fontSize="20px">
                {content}
            </Text>
        </Flex>
    );
};

export default ContactSection;
