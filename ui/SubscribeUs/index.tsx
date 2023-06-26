import React, { ChangeEvent } from "react";
import Input from "../Input";
import { Box, Container, Grid, Text } from "@mantine/core";

const SubscribeUs = () => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <Box style={{ backgroundColor: "#3498DA" }} component="section">
      <Container size="xl">
        <Grid align="center">
          <Grid.Col md={6}>
            <Text
              style={{
                fontSize: "40px",
                fontWeight: "600",
                color: "white",
                lineHeight: "48px",
              }}
              //   lineClamp={5}
            >
              <span style={{ color: "#62F88A" }}>Subscribe</span> us for get
              news events and offers
            </Text>
          </Grid.Col>
          <Grid.Col md={2}></Grid.Col>
          <Grid.Col md={4}>
            <Input
              onChange={handleChange}
              style={{ color: "red" }}
              type="text"
              label="text"
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default SubscribeUs;
