import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    IconButton,
    Stack,
    Text,
} from '@chakra-ui/react';
import {
    IconArrowDownDashed,
    IconBrandGithub,
    IconBrandLinkedin,
} from '@tabler/icons-react';
import { ReactNode, RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import HeroBgImg from '../../img/hero-background.svg';
import scrollToSection from '../../utils/scrollToSection';

type HeroProps = {
    skillsSectionRef: RefObject<HTMLDivElement | null>;
};

const HeroSection = ({ skillsSectionRef }: HeroProps) => {
    return (
        <HeroSectionContainer>
            <HeroBg />
            <Container maxW="3xl" id="about">
                <Stack textAlign="center" py={{ base: 20, md: 36 }} gap={6}>
                    <HeroHeading />
                    <HeroTagline />
                    <Stack direction="row" align="center" alignSelf="center">
                        <LinkButton
                            url="https://github.com/kaklewski/"
                            icon={<IconBrandGithub />}
                        >
                            GitHub
                        </LinkButton>
                        <LinkButton
                            url="https://www.linkedin.com/in/oskar-kaklewski/"
                            icon={<IconBrandLinkedin />}
                        >
                            LinkedIn
                        </LinkButton>
                    </Stack>
                </Stack>
            </Container>

            <Box
                position="absolute"
                bottom={8}
                display={{ base: 'none', md: 'revert' }}
            >
                <ScrollDownButton skillsSectionRef={skillsSectionRef} />
            </Box>
        </HeroSectionContainer>
    );
};

type HeroSectionContainerProps = {
    children: ReactNode;
};

const HeroSectionContainer = ({ children }: HeroSectionContainerProps) => (
    <Flex
        position="relative"
        direction="column"
        justifyContent="center"
        alignItems="center"
        height={{ md: '100vh' }}
        backgroundImage="url(background.png)"
    >
        {children}
    </Flex>
);

const HeroBg = () => (
    <>
        <Box position="absolute" maxW="100%" w={{ base: '450px', md: '900px' }}>
            <HeroBgImg />
        </Box>

        <Box
            position="absolute"
            maxW="100%"
            w={{ base: '135px', md: '250px' }}
            h={{ base: '40px', md: '80px' }}
            bgColor="teal.400"
            filter={{ base: 'blur(40px)', md: 'blur(80px)' }}
            borderRadius={{ base: '50px', md: '100px' }}
        ></Box>
    </>
);

const HeroHeading = () => {
    const { t } = useTranslation();

    return (
        <Heading
            as="h2"
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
            className="accent-font"
        >
            {`${t('heroSection.greeting')} `}
            <Text as="span" color="teal.400">
                Oskar
            </Text>
        </Heading>
    );
};

const HeroTagline = () => (
    <Box backdropFilter="blur(2px)" borderRadius="xl" position="relative">
        <HeroTaglineBlur />
        <HeroTaglineText />
    </Box>
);

const HeroTaglineBlur = () => (
    <Box
        position="absolute"
        display={{ base: 'none', md: 'block' }}
        w="100%"
        h="100%"
        borderRadius="100%"
        top="10px"
        bgColor="#09090B"
        filter="blur(35px)"
    ></Box>
);

const HeroTaglineText = () => {
    const { t } = useTranslation();

    return (
        <Text
            position="relative"
            zIndex="1"
            maxW="80vw"
            textShadow="0 1px 25px #09090B"
            marginInline="auto"
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
        >
            {t('heroSection.tagline')}
        </Text>
    );
};

type LinkButtonProps = {
    url: string;
    icon: ReactNode;
    children: ReactNode;
};

const LinkButton = ({ url, icon, children }: LinkButtonProps) => (
    <Button
        variant="surface"
        colorPalette="teal"
        rounded="full"
        size="xl"
        asChild
    >
        <a href={url} target="_blank" rel="noopener noreferrer">
            {icon} {children}
        </a>
    </Button>
);

type ScrollDownButtonProps = {
    skillsSectionRef: RefObject<HTMLDivElement | null>;
};

const ScrollDownButton = ({ skillsSectionRef }: ScrollDownButtonProps) => (
    <IconButton
        variant="outline"
        rounded="full"
        size="lg"
        onClick={() => scrollToSection(skillsSectionRef)}
    >
        <IconArrowDownDashed />
    </IconButton>
);

export default HeroSection;
