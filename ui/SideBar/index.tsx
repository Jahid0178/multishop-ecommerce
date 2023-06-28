import { Card, Image, Text, Badge, Button, Group, Title, Divider, Input, Select } from '@mantine/core';
// import { IconSearch } from "@tabler/icons-react";

const Sidebar = () => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>
                SHOP BY
            </Title>
            <Divider size="xs" my={10} />
            <Title order={6} >
                SEARCH
            </Title>
            <Input
                // icon={<IconSearch size={18} />}
                my={5}
                placeholder="Search"
                radius="sm"
            />
            <Title order={6} mt={10}>
                CATEGORIES
            </Title>
            <Select
                label="Your favorite framework/library"
                placeholder="Pick one"
                // rightSection={<IconChevronDown size="1rem" />}
                rightSectionWidth={30}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                data={['React', 'Angular', 'Svelte', 'Vue']}
            />

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
            </Button>
        </Card>
    );
}

export default Sidebar;