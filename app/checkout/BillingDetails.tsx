import { Card, Grid, Input, Select, Textarea, Title } from "@mantine/core";
const { getCode, getName } = require('country-list');
const countryList = require('country-list');

type IProps = {
    title: string,
    id: string,

}

const BillingDetailes = ({ title, id }: IProps) => {
    return (
        <>
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
        </>
    )
}

export default BillingDetailes;