"use client";
import React from "react";

import { SignUpProps } from "@/libs/types/types";
import handleAuth from "@/libs/utils/handleAuth";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Box,
  Button,
  Card,
  PasswordInput,
  TextInput,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const SignUp: React.FC<SignUpProps> = ({ onClick }) => {
  const { data: session, status } = useSession();

  console.log("session", session);

  React.useEffect(() => {
    if (session) {
      const user = session;
      console.log(user);
      // You can access specific properties like user email or name
      console.log(user.email);
      console.log(user.name);
    }
    console.log("session", session);
  }, [session]);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
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

        <Button
          onClick={() =>
            signIn("google", {
              redirect: true,
              callbackUrl: "/home",
            })
          }
          size="xl"
        >
          Google login
        </Button>
      </Box>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit(({ name, email, password }) => {
            handleAuth({ name, email, password, endPoint: "signUp" });
          })}
        >
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
          onClick={onClick}
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
