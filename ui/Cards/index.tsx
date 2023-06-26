import { Badge, Box, Card, Group, Rating, Text, Title } from "@mantine/core";
import Image from "next/image";
<<<<<<< HEAD

const ProductsCard = ({ data }: any) => {
  const { category, price, rating, sold, title, src } = data;
  return (
    <Card withBorder>
      <Card.Section>
        <Image
          src={src}
          alt={title}
          width={550}
          height={480}
          style={{ width: "100%", height: "250px" }}
        />
      </Card.Section>
      <Badge>{category}</Badge>
      <Title order={4} my={10}>
        {title}
      </Title>
      <Group>
        <Rating value={rating} fractions={2} readOnly />
        <Text component="p">{rating}</Text>
      </Group>
      <Box
        component="div"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Text component="p" fw={500}>
          ${price}
        </Text>
        <Text component="p" fw={500} color="green">
          {sold} Sold
        </Text>
      </Box>
    </Card>
=======
import Link from "next/link";

const ProductsCard = ({ data }: any) => {
  const { category, price, rating, sold, title, src, id } = data;
  return (
    <Link href={`/products/${id}`} style={{ textDecoration: "none" }}>
      <Card withBorder>
        <Card.Section>
          <Image
            src={src}
            alt={title}
            width={550}
            height={480}
            style={{ width: "100%", height: "250px" }}
          />
        </Card.Section>
        <Badge>{category}</Badge>
        <Title order={4} my={10}>
          {title}
        </Title>
        <Group>
          <Rating value={rating} fractions={2} readOnly />
          <Text component="p">{rating}</Text>
        </Group>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Text component="p" fw={500}>
            ${price}
          </Text>
          <Text component="p" fw={500} color="green">
            {sold} Sold
          </Text>
        </Box>
      </Card>
    </Link>
>>>>>>> b371f0322c673e743da9a3b01cca1e4343600efd
  );
};

export default ProductsCard;
