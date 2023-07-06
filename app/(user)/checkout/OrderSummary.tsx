import { Box, Button, Card, Divider, Grid, Text, Title } from '@mantine/core';

const OrderSummary = () => {
    return (
        <>
            <Card shadow="sm" padding="xl" radius="md" withBorder>
                <Title order={3} my={30}>
                    Your order
                </Title>
                <Grid>
                    <Grid.Col span={6}>
                        <Text>
                            PRODUCT
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text ta="right">
                            TOTAL
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Divider my="xs" variant="dotted" />
                    </Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col span={6}>
                        <Text>
                            Ecommerce Kit x1
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text ta="right">
                            $59.00
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Divider my="sm" variant="dotted" />
                    </Grid.Col>
                </Grid>

                {/* SUBTOTAL */}
                <Grid>
                    <Grid.Col span={6}>
                        <Text>
                            SUBTOTAL
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text ta="right">
                            $59.00
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Divider my="md" />
                    </Grid.Col>
                </Grid>

                {/* TOTAL */}
                <Grid>
                    <Grid.Col span={6}>
                        <Text>
                            TOTAL
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text ta="right">
                            $59.00
                        </Text>
                    </Grid.Col>
                </Grid>

                {/* Order button  */}
                <Box ta="right" >
                    <Button my={35} color="indigo" size="md" uppercase>
                        PLACE ORDER
                    </Button>
                </Box>

            </Card>
        </>
    );
};

export default OrderSummary;