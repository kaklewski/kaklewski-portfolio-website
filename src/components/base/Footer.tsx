import { Box, Container, Flex, IconButton, Text } from '@chakra-ui/react';
import { IconArrowUpDashed } from '@tabler/icons-react';
import { ReactNode, RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import scrollToSection from '../../utils/scrollToSection';

type FooterProps = {
    mainContentRef: RefObject<HTMLDivElement | null>;
};

const Footer = ({ mainContentRef }: FooterProps) => (
    <FooterContainer>
        <Flex justifyContent="space-between" alignItems="center">
            <CopyrightText />
            <FooterLink onClick={() => scrollToSection(mainContentRef, 80)} />
        </Flex>
    </FooterContainer>
);

type FooterContainerProps = {
    children: ReactNode;
};

const FooterContainer = ({ children }: FooterContainerProps) => (
    <Box as="footer" py={8} width="100%" borderTopWidth="1px">
        <Container maxW="7xl">{children}</Container>
    </Box>
);

const CopyrightText = () => {
    const year = new Date().getFullYear();

    return (
        <Text fontSize="sm" className="accent-font">
            © {year} Oskar Kąklewski
        </Text>
    );
};

type FooterLinkProps = {
    onClick: () => void;
};

const FooterLink = ({ onClick }: FooterLinkProps) => {
    const { t } = useTranslation();

    return (
        <IconButton
            rounded="full"
            variant="outline"
            aria-label={t('footer.buttons.scrollToTop')}
            onClick={onClick}
        >
            <IconArrowUpDashed />
        </IconButton>
    );
};

export default Footer;
