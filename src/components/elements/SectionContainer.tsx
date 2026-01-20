import { Container } from '@chakra-ui/react';
import { forwardRef, ReactNode } from 'react';

type SectionContainerProps = {
    children: ReactNode;
    sectionId: string;
};

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
    ({ sectionId, children }, ref) => (
        <Container
            ref={ref}
            id={sectionId}
            as="section"
            maxW="7xl"
            py={{ base: 20, md: 36 }}
        >
            {children}
        </Container>
    ),
);

export default SectionContainer;
