import { categories } from '@/data/data';
import { Card, Image, Text, Badge, Button, Group, Title, Divider, Input, Select, Flex, RangeSlider, Box } from '@mantine/core';
import { IconChevronDown, IconSearch } from "@tabler/icons-react";

const Sidebar = () => {
    // dumy tags 
    const tags = ["bag", "Medacia", "lion", "t shirt", "wemen", "kids", "Bathroom", "toys"];
    
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>
                SHOP BY
            </Title>
            <Divider size="xs" my={10} />

            {/* search  */}
            <Title order={6} >
                SEARCH
            </Title>
            <Input
                icon={<IconSearch size={18} color="#3A3E43" />}
                my={5}
                placeholder="Search..."
                radius="sm"
                type='search'
            />

            {/* Categories  */}
            <Title order={6} mt={10} mb={5}>
                CATEGORIES
            </Title>
            <Select
                defaultValue="All"
                allowDeselect
                rightSection={<IconChevronDown size="1rem" />}
                rightSectionWidth={30}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                data={categories.map(category => category.categori)}
            />

            {/* Tags  */}
            <Title order={6} mt={20} mb={10}>
                TAGS
            </Title>
            <Flex gap="md" wrap="wrap">
                {
                    tags.map(tag => (
                        <Button size='xs' variant="outline" color="gray" radius="xl">{tag}</Button>
                    ))
                }
            </Flex>

            {/* price  */}
            <Title order={6} mt={30} mb={10}>
                PRICE
            </Title>
            <Text mb={5}>Price : $527-$736</Text>
            <RangeSlider defaultValue={[20, 80]} mb={10} />

            {/* reset and apply button  */}
            <Flex justify={'space-between'}>
                <Button variant="outline" color="red">
                    RESET RESULT
                </Button>
                <Button>
                    APPLY
                </Button>
            </Flex>
        </Card>
    );
}

export default Sidebar;