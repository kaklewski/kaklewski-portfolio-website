import {
    Box,
    Button,
    Container,
    Flex,
    IconButton,
    Text,
} from '@chakra-ui/react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ReactNode, RefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import scrollToSection from '../../utils/scrollToSection';
import LanguageSelect from '../elements/LanguageSelect';
import {
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerRoot,
    DrawerTrigger,
} from '../ui/drawer';

type SectionRefs = {
    main: RefObject<HTMLDivElement | null>;
    skills: RefObject<HTMLDivElement | null>;
    projects: RefObject<HTMLDivElement | null>;
    contact: RefObject<HTMLDivElement | null>;
};

type SectionKey = keyof SectionRefs;

type NavbarProps = {
    sections: SectionRefs;
};

type NavLink = {
    label: string;
    section: SectionKey;
};

const Navbar = ({ sections }: NavbarProps) => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links: NavLink[] = [
        { label: t('navbar.buttons.skills'), section: 'skills' },
        { label: t('navbar.buttons.projects'), section: 'projects' },
        { label: t('navbar.buttons.contact'), section: 'contact' },
    ];

    const handleScroll = (section: SectionKey, offset?: number) => {
        scrollToSection(sections[section], offset);
    };

    return (
        <NavbarContainer>
            <Flex justify="space-between" align="center">
                <NavLogoLink onClick={() => handleScroll('main', 80)} />

                <Flex gap={2} align="center">
                    <DesktopNav links={links} onNavigate={handleScroll} />

                    <LanguageSelect />

                    <MobileNav
                        links={links}
                        isOpen={isMenuOpen}
                        onOpenChange={setIsMenuOpen}
                        onNavigate={(section) => {
                            setIsMenuOpen(false);
                            handleScroll(section, 50);
                        }}
                    />
                </Flex>
            </Flex>
        </NavbarContainer>
    );
};

type NavbarContainerProps = {
    children: ReactNode;
};

const NavbarContainer = ({ children }: NavbarContainerProps) => (
    <Box
        as="nav"
        py={4}
        width="100%"
        borderBottomWidth={1}
        position={{ base: 'sticky', md: 'fixed' }}
        top={0}
        zIndex="1000"
        backgroundColor="rgba(9,9,11,.8)"
        backdropFilter="blur(13px) saturate(150%)"
    >
        <Container maxW="7xl">{children}</Container>
    </Box>
);

type NavLogoLinkProps = {
    onClick: () => void;
};

const NavLogoLink = ({ onClick }: NavLogoLinkProps) => (
    <Button variant="plain" p={0} onClick={onClick}>
        <Text
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            className="accent-font"
            transition="color 0.2s"
            _hover={{ color: 'teal.400' }}
        >
            Oskar Kąklewski
        </Text>
    </Button>
);

type NavProps = {
    links: NavLink[];
    onNavigate: (section: SectionKey) => void;
};

const DesktopNav = ({ links, onNavigate }: NavProps) => (
    <Box display={{ base: 'none', sm: 'block' }}>
        <Flex gap={2}>
            {links.map(({ label, section }) => (
                <NavLinkButton
                    key={section}
                    variant="navbar"
                    label={label}
                    onClick={() => onNavigate(section)}
                />
            ))}
        </Flex>
    </Box>
);

type MobileNavProps = NavProps & {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
};

const MobileNav = ({
    links,
    isOpen,
    onOpenChange,
    onNavigate,
}: MobileNavProps) => {
    const { t } = useTranslation();

    return (
        <DrawerRoot open={isOpen} onOpenChange={(e) => onOpenChange(e.open)}>
            <DrawerBackdrop />

            <DrawerTrigger asChild display={{ sm: 'none' }}>
                <IconButton aria-label="Open menu" variant="outline">
                    <IconMenu2 />
                </IconButton>
            </DrawerTrigger>

            <DrawerContent
                backgroundColor="rgba(9,9,11,.9)"
                backdropFilter="blur(13px) saturate(130%)"
                borderLeftWidth={1}
                shadow="none"
            >
                <DrawerBody>
                    <IconButton
                        aria-label={t('navbar.buttons.closeMenu')}
                        variant="ghost"
                        style={{ position: 'absolute', top: 6, left: 6 }}
                        onClick={() => onOpenChange(false)}
                    >
                        <IconX />
                    </IconButton>
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="start"
                        h="100%"
                        gap={35}
                    >
                        {links.map(({ label, section }) => (
                            <NavLinkButton
                                key={section}
                                variant="menu"
                                label={label}
                                onClick={() => onNavigate(section)}
                            />
                        ))}
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </DrawerRoot>
    );
};

type NavLinkButtonProps = {
    variant: 'navbar' | 'menu';
    label: string;
    onClick: () => void;
};

const NavLinkButton = ({ variant, label, onClick }: NavLinkButtonProps) => (
    <Button
        variant={variant === 'navbar' ? 'ghost' : 'plain'}
        size={variant === 'navbar' ? 'lg' : 'md'}
        fontSize={variant === 'menu' ? 40 : undefined}
        color="whiteAlpha.900"
        onClick={onClick}
    >
        {label}
    </Button>
);

export default Navbar;
