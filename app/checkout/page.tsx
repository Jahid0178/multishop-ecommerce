"use client";

import { Box, Button, Card, Container, Divider, Grid, Input, Select, Text, Textarea, Title } from "@mantine/core";
import { useId } from '@mantine/hooks';
const { getCode, getName } = require('country-list');
const countryList = require('country-list');

const CheckoutPage = () => {
    const id = useId();
    console.log(countryList.getNames())
    return (
        <Container size={"lg"} my={30}>
            <Grid>
                {/* Billing details */}
                <Grid.Col span={12} md={6}>
                    <Card shadow="sm" padding="xl" radius="md" withBorder>
                        <Title order={2} my={30}>
                            Billing details
                        </Title>

                        <Grid>
                            {/* first name  */}
                            <Grid.Col span={12} sm={6}>
                                <Input.Wrapper id={id} label="Farst Name" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // placeholder="Farst Name"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* last name  */}
                            <Grid.Col span={12} sm={6}>
                                <Input.Wrapper id={id} label="Last Name" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // placeholder="Last Name"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Company Name */}
                            <Grid.Col span={12}>
                                <Input.Wrapper id={id} label="Company Name" mx="auto">
                                    <Input<any>
                                        id={id}
                                        // placeholder="Company Name"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Country */}
                            <Grid.Col span={12}>
                                <Input.Wrapper id={id} label="Country" mx="auto">
                                    <Select
                                        data={countryList?.getNames()}
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Street Address */}
                            <Grid.Col span={12}>
                                <Input.Wrapper id={id} label="Street Address" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        placeholder="House number and street name"
                                        type="text"
                                        mb={15}
                                    />
                                    <Input<any>
                                        id={id}
                                        placeholder="Appartment suite"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Town / City  */}
                            <Grid.Col span={12}>
                                <Input.Wrapper id={id} label="Town / City" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // placeholder="Town / City"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* State / Country */}
                            <Grid.Col span={12}>
                                <Input.Wrapper id={id} label="State / Country" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // placeholder="Town / City"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Postcode / ZIP */}
                            <Grid.Col span={12}>
                                <Input.Wrapper id={id} label="Postcode / ZIP" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // placeholder="Postcode / ZIP"
                                        type="text"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Phone  */}
                            <Grid.Col span={12} sm={6}>
                                <Input.Wrapper id={id} label="Phone " required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // Phone"
                                        type="number"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>

                            {/* Email  */}
                            <Grid.Col span={12} sm={6}>
                                <Input.Wrapper id={id} label="Email" required mx="auto">
                                    <Input<any>
                                        id={id}
                                        // Email"
                                        type="email"
                                    />
                                </Input.Wrapper>
                            </Grid.Col>
                        </Grid>

                        {/* Additional information */}
                        <Title order={3} mt={30}>
                            Additional information
                        </Title>
                        <Input.Wrapper id={id} label="Order notes" mx="auto">
                            <Textarea
                                placeholder="Notes about your order, e.g. special notes for delivery"
                                // label="Order notes"
                                withAsterisk
                            />
                        </Input.Wrapper>
                    </Card>
                </Grid.Col>

                {/* order summary  */}
                <Grid.Col span={12} md={6}>
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
                </Grid.Col>
            </Grid>
        </Container>
    )
};

export default CheckoutPage;
