import { Heading } from '@chakra-ui/react';

type CustomHeadingProps = {
    text: string;
};

const CustomHeading = ({ text }: CustomHeadingProps) => (
    <Heading
        as="h2"
        size={{ base: '3xl', sm: '4xl', md: '5xl' }}
        mb={4}
        className="accent-font"
    >
        {text}
    </Heading>
);

export default CustomHeading;
