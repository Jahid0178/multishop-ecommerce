import { ProductProps, ProductType } from "@/libs/types/types";
import { openProductModal } from "@/redux/showModal";
import { RootState } from "@/redux/store";
import { Badge, Box, Card, Group, Rating, Text, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaEye, FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const ProductsCard = ({ data }: { data: ProductType }): JSX.Element => {
  const dispatch = useDispatch();
  const { category, price, rating, sold, title, src, id } = data;
  const handleOpenModal = () => {
    dispatch(openProductModal(data));
  };
  return (
    <Box style={{ position: "relative" }}>
      <Card withBorder shadow="lg">
        <Card.Section>
          <Link href={`/products/${id}`} style={{ textDecoration: "none" }}>
            <Image
              src={
                "https://www.istorebangladesh.com/images/thumbs/0000286_macbook-pro-m1_550.png"
              }
              alt={"title"}
              width={550}
              height={480}
              style={{ width: "100%", height: "250px" }}
            />
          </Link>
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
      <Box
        style={{
          position: "absolute",
          top: "20px",
          right: "4px",
        }}
      >
        <Text>
          <FaHeart cursor="pointer" color="gray" size={26} />
        </Text>
        <Text>
          <FaEye
            cursor="pointer"
            color="gray"
            size={26}
            onClick={handleOpenModal}
          />
        </Text>
        <Text>
          <FaCartShopping cursor="pointer" color="gray" size={26} />
        </Text>
      </Box>
    </Box>
  );
};
export default ProductsCard;
