import { InputFieldProps } from "@/libs/interface/interface";
import { Box, Button, Grid, TextInput } from "@mantine/core";
import React from "react";
const Input: React.FC<InputFieldProps> = ({ type, style, onChange }) => {
  return (
    <Box style={{ width: "100%" }} component="section">
      <Grid align="center">
        <Grid.Col md={9}>
          <TextInput
            size="lg"
            onChange={onChange}
            placeholder="Type your email....."
          />
        </Grid.Col>
        <Grid.Col md={3}>
          <Button
            radius="md"
            style={{
              backgroundColor: "#07bc0c",
              width: "100%",
              padding: "15px 0px",
            }}
            size="lg"
          >
            Settings
          </Button>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Input;
