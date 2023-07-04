import { relatedSearches } from "@/data/data";
import { Box, Card, Flex, Grid, Pagination, Text, Title } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react";

const RelatedSearches = () => {
    return (
        <Box component="section">
            <Card p={20}>
                <Title order={2} mb={10}>
                    Related Searches
                </Title>
                <Grid>
                    {
                        relatedSearches.map(search => (
                            <Grid.Col span={12} md={6} lg={4} key={search.id}>
                                <Card withBorder={true}>
                                    <Flex align={"center"}>
                                        <IconSearch size={18} color="#3A3E43"  />
                                        <Text ml={20}>
                                            {search.searchedKeyWord}
                                        </Text>
                                    </Flex>
                                </Card>
                            </Grid.Col>
                        ))
                    }
                </Grid>
                <Pagination position="right" my={20} total={10} color="dark" radius="xs" withControls={false} withEdges />
            </Card>
        </Box>
    )
}

export default RelatedSearches;