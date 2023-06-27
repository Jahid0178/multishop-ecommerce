"use client";

import { Button, Modal, Space, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FormEvent } from "react";

const ContactModal = ({ opened, close }: any) => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Contact Us"
      centered
      overlayProps={{ blur: 3 }}
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          placeholder="Enter Your Name"
          type="text"
          required={true}
          {...form.getInputProps("name")}
        />
        <Space h="md" />
        <TextInput
          placeholder="Enter Your Email"
          type="email"
          required={true}
          {...form.getInputProps("email")}
        />
        <Space h="md" />
        <TextInput
          placeholder="Enter Your Number"
          type="text"
          required={true}
          {...form.getInputProps("number")}
        />
        <Space h="md" />
        <Textarea
          placeholder="Enter Your Message"
          minRows={5}
          required={true}
          {...form.getInputProps("message")}
        />
        <Button type="submit" mt={20} radius="lg">
          Submit
        </Button>
      </form>
    </Modal>
  );
};

export default ContactModal;
