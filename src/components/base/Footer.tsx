import { Box, Container, Flex, IconButton, Text } from '@chakra-ui/react';
import { IconArrowUpDashed } from '@tabler/icons-react';
import { RefObject } from 'react';
import { scrollToSection } from '../../utils/scrollToSection';

type FooterProps = {
    mainContentRef: RefObject<HTMLDivElement>;
};

const Footer = ({ mainContentRef }: FooterProps) => {
    const year = new Date().getFullYear();

    return (
        <Box as="footer" py={8} width="100%" borderTopWidth="1px">
            <Container maxW="7xl">
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="sm" className="accent-font">
                        © {year} Oskar Kąklewski
                    </Text>
                    <Box>
                        <IconButton
                            rounded="full"
                            variant="outline"
                            aria-label="Back to the top"
                            onClick={() => scrollToSection(mainContentRef)}
                        >
                            <IconArrowUpDashed stroke={1.75} />
                        </IconButton>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Footer;
