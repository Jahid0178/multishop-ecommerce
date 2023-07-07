"use client";
import { useSearchParams } from "next/navigation";
import { IconDatabase, IconAt } from "@tabler/icons-react";
import { Button, Card, Input } from "@mantine/core";
const VerifyEmailPage = () => {
  const searchParams = useSearchParams();
  //   const { token } = router.query;/
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  // Implement the logic for verifying the email using the token

  return (
    <div style={{ width: "35%", margin: "0 auto" }}>
      {/* Add your email verification logic and UI components */}
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h1>Verify Email</h1>
        {/* <p>Token: {token}</p>
        <p>email: {email}</p> */}
        <Input
          icon={<IconAt />}
          variant="filled"
          placeholder={email ? email : "email"}
          disabled
        />
        <Input component="button">
          <Input.Placeholder>Token:{token}</Input.Placeholder>
        </Input>
        <Input component="button">
          <Input.Placeholder>Email:{email}</Input.Placeholder>
        </Input>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          size="md"
          leftIcon={<IconDatabase size="1rem" />}
          loading
        >
          Wait for verify
        </Button>
      </Card>
    </div>
  );
};

export default VerifyEmailPage;
