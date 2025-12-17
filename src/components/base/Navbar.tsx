import {
    Box,
    Button,
    Container,
    Flex,
    IconButton,
    Text,
} from '@chakra-ui/react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { RefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { scrollToSection } from '../../utils/scrollToSection';
import LanguageSelect from '../elements/LanguageSelect';
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTrigger,
} from '../ui/drawer';

type NavbarProps = {
    sections: {
        main: RefObject<HTMLDivElement>;
        skills: RefObject<HTMLDivElement>;
        projects: RefObject<HTMLDivElement>;
        contact: RefObject<HTMLDivElement>;
    };
};

type SectionKey = keyof NavbarProps['sections'];

const Navbar = ({ sections }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t } = useTranslation();

    const links: { name: string; key: SectionKey }[] = [
        { name: t('navbar.buttons.skills'), key: 'skills' },
        { name: t('navbar.buttons.projects'), key: 'projects' },
        { name: t('navbar.buttons.contact'), key: 'contact' },
    ];

    return (
        <Box
            as="nav"
            py={4}
            width="100%"
            borderBottomWidth="1px"
            position={{ base: 'sticky', md: 'fixed' }}
            top={0}
            zIndex="1000"
            backgroundColor="rgba(9,9,11,.8)"
            backdropFilter="blur(13px) saturate(150%)"
        >
            <Container maxW="7xl">
                <Flex justify="space-between" align="center">
                    <Button
                        variant="plain"
                        p={0}
                        onClick={() => scrollToSection(sections.main)}
                    >
                        <Text
                            as="h1"
                            fontSize="2xl"
                            fontWeight="bold"
                            className="accent-font"
                        >
                            Oskar Kąklewski
                        </Text>
                    </Button>

                    <Flex gap={2}>
                        <Flex gap={2} align="center">
                            <Box display={{ base: 'none', sm: 'inline-block' }}>
                                <Flex align="center">
                                    {links.map((link) => (
                                        <NavLinkButton
                                            key={link.name}
                                            type="navbar"
                                            name={link.name}
                                            handleClick={() => {
                                                scrollToSection(
                                                    sections[link.key],
                                                );
                                            }}
                                        />
                                    ))}
                                </Flex>
                            </Box>
                            <LanguageSelect />
                        </Flex>

                        <DrawerRoot
                            open={isMenuOpen}
                            onOpenChange={(e) => setIsMenuOpen(e.open)}
                        >
                            <DrawerBackdrop />
                            <DrawerTrigger asChild display={{ sm: 'none' }}>
                                <IconButton
                                    aria-label="Open Menu"
                                    variant="outline"
                                    display="flex"
                                >
                                    <IconMenu2 stroke={1.75} />
                                </IconButton>
                            </DrawerTrigger>
                            <DrawerContent
                                position="relative"
                                zIndex="tooltip"
                                color="white"
                                backgroundColor="rgba(9,9,11,.9)"
                                backdropFilter="blur(13px) saturate(130%)"
                                shadow="none"
                                borderLeftWidth="1px"
                                borderLeftColor={'gray.900'}
                            >
                                <DrawerHeader>
                                    <button
                                        type="button"
                                        aria-label="Close Menu"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <IconX stroke={1.75} />
                                    </button>
                                </DrawerHeader>
                                <DrawerBody>
                                    <Flex
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="start"
                                        gap={35}
                                        height="100%"
                                        pl={4}
                                        pb={100}
                                    >
                                        {links.map((link) => (
                                            <NavLinkButton
                                                key={link.name}
                                                type="menu"
                                                name={link.name}
                                                handleClick={() => {
                                                    setIsMenuOpen(false);
                                                    scrollToSection(
                                                        sections[link.key],
                                                        50,
                                                    );
                                                }}
                                            />
                                        ))}
                                    </Flex>
                                </DrawerBody>
                            </DrawerContent>
                        </DrawerRoot>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

type NavLinkButtonProps = {
    type: 'navbar' | 'menu';
    name: string;
    handleClick: () => void;
};

const NavLinkButton = ({ type, name, handleClick }: NavLinkButtonProps) => (
    <Button
        variant="ghost"
        fontSize={type === 'menu' ? 40 : undefined}
        size={type === 'navbar' ? 'lg' : 'md'}
        color="#FAFAFA"
        onClick={handleClick}
    >
        {name}
    </Button>
);

export default Navbar;
