import {
  Box,
  Button,
  Card,
  PasswordInput,
  TextInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const SignUp = ({ isSignUp }: { isSignUp: () => void }) => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "secret",
      confirmPassword: "sevret",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value: any, values: { password: any }) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  return (
    <Card>
      <Box mx="auto">
        <Text
          style={{
            fontSize: "50px",
            fontWeight: "800",
            color: "#2D385E",
            textAlign: "center",
          }}
        >
          MultyShop
        </Text>
        <Text
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#2D385E",
            textAlign: "center",
          }}
        >
          Sign up
        </Text>
      </Box>
      <Box mx="auto">
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            mt="sm"
            label="Email"
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />
          <Text style={{ marginTop: "8px", color: "#A2A2A3" }}>
            I agree to the{" "}
            <a
              style={{ color: "#6382FE" }}
              href="https://multishop-ecommerce-pduj.vercel.app/"
              target="_blank"
            >
              privacy policy
            </a>{" "}
            and terms of{" "}
            <a
              style={{ color: "#6382FE" }}
              href="https://multishop-ecommerce-pduj.vercel.app/"
              target="_blank"
            >
              service
            </a>
            .
          </Text>
          <Button size="lg" fullWidth type="submit" mt="sm">
            Sign up{" "}
          </Button>
        </form>
        <Text
          onClick={isSignUp}
          style={{
            color: "#6382FE",
            fontWeight: "600",
            cursor: "pointer",
            textAlign: "center",
            marginTop: "11px",
          }}
        >
          Already have an account?
        </Text>
      </Box>
    </Card>
  );
};

export default SignUp;
