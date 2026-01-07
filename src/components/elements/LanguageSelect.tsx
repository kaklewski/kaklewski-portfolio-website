import {
    HStack,
    IconButton,
    Portal,
    Select,
    createListCollection,
    useSelectContext,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSelect = () => {
    const { i18n, t } = useTranslation();

    const frameworks = createListCollection({
        items: [
            { label: t('navbar.languages.en'), value: 'en', icon: '🇬🇧' },
            { label: t('navbar.languages.pl'), value: 'pl', icon: '🇵🇱' },
        ],
    });

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

const SelectTrigger = () => {
    const select = useSelectContext();
    const items = select.selectedItems;

    const icon = items[0]?.icon || '🌐';

    return (
        <IconButton
            variant="outline"
            {...select.getTriggerProps()}
            size={{ base: 'md', md: 'lg' }}
        >
            {icon}
        </IconButton>
    );
};

export default LanguageSelect;
