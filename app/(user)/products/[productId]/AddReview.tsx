import { Button, Space, TextInput, Textarea, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

const AddReview = () => {
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
        <>
            <Title order={3}>
                Add a review
            </Title>
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
                    placeholder="YOUR RATING"
                    type="number"
                    required={true}
                    min="1"
                    max="5"
                    {...form.getInputProps("number")}
                />
                <Space h="md" />
                <Textarea
                    placeholder="Enter Your Review"
                    minRows={5}
                    required={true}
                    {...form.getInputProps("message")}
                    maxLength={200}
                />
                <Button type="submit" mt={20} radius="lg">
                    Submit
                </Button>
            </form>
        </>
    );
};

export default AddReview;