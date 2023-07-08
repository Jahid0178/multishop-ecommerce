import { Box, Button, Flex, Grid, Input, Select, TextInput, Title } from "@mantine/core"
import Address from "./Address"
import { IconCurrencyDollar, IconWorld } from "@tabler/icons-react"

const FooterColOne = () => {
    return (
        <>
            <Title order={3}>
                Head office of the company
            </Title>
            <Address />
            <Box p={5} my={10} style={{ background: "#2E2E2E" }}>
                <Grid justify={"space-between"}>
                    <Grid.Col span={12} md={6} lg={3}>
                        <Input.Wrapper mx="auto" >
                            <Select
                                icon={<IconWorld size={18} color="#3A3E43" />}
                                defaultValue={"English"}
                                data={["English", "Spanish"]}
                            />
                        </Input.Wrapper>
                    </Grid.Col>
                    <Grid.Col span={12} md={6} lg={5}>
                        <Input.Wrapper mx="auto" >
                            <Select
                                icon={<IconCurrencyDollar size={18} color="#3A3E43" />}
                                defaultValue={"USD - U.S. Dollar"}
                                data={["USD - U.S. Dollar", "INR - Indian rupy"]}
                            />
                        </Input.Wrapper>
                    </Grid.Col>
                    <Grid.Col span={12} md={6} lg={4}>
                        <Input.Wrapper mx="auto" >
                            <Select
                                defaultValue={"United Stated"}
                                data={["United Stated", "United Kingdom"]}
                            />
                        </Input.Wrapper>
                    </Grid.Col>
                </Grid>
            </Box>
            <Flex align={"end"}>
                <TextInput
                    label="SIGN UP FOR SHEIN STYLE NEWS"
                    placeholder="Your Email Address"
                    type="email"
                />
                <Button color="dark" radius="xs">
                    Subscribe
                </Button>
            </Flex>
        </>
    )
}

export default FooterColOne;