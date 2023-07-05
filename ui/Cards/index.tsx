import { ProductProps } from "@/libs/types/types";
import { Badge, Box, Card, Group, Rating, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const ProductsCard = ({ data }: { data: ProductProps }): JSX.Element => {
  const { category, price, rating, sold, title, src, id } = data;
  return (
    <Link href={`/products/${id}`} style={{ textDecoration: "none" }}>
      <Card withBorder shadow="lg">
        <Card.Section>
          <Image
            src={
              "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
            }
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
  );
};
export default ProductsCard;
