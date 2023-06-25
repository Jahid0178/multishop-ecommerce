import { Badge, Box, Card, Rating, Text, Title } from "@mantine/core";
import Image from "next/image";

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
      <Rating value={rating} fractions={2} />
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
  );
};

export default ProductsCard;
