import {
    HStack,
    IconButton,
    Portal,
    Select,
    createListCollection,
    useSelectContext,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const SelectTrigger = () => {
    const select = useSelectContext();
    const items = select.selectedItems as Framework[];
    return (
        <IconButton
            variant="outline"
            {...select.getTriggerProps()}
            size={{ base: 'md', md: 'lg' }}
        >
            {items[0].icon}
        </IconButton>
    );
};

const LanguageSelect = () => {
    const { i18n } = useTranslation();

    return (
        <Select.Root
            positioning={{ sameWidth: false }}
            collection={frameworks}
            defaultValue={[i18n.language]}
            onValueChange={(details) => {
                i18n.changeLanguage(details.value[0]);
            }}
        >
            <Select.HiddenSelect />
            <Select.Control>
                <SelectTrigger />
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content minW="32">
                        {frameworks.items.map((framework) => (
                            <Select.Item item={framework} key={framework.value}>
                                <HStack>
                                    {framework.icon} {framework.label}
                                </HStack>
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    );
};

const frameworks = createListCollection({
    items: [
        { label: 'English', value: 'en', icon: '🇬🇧' },
        { label: 'Polish', value: 'pl', icon: '🇵🇱' },
    ],
});

interface Framework {
    label: string;
    value: string;
    icon: string;
}

export default LanguageSelect;
