"use client";

import { Box, Container, Text } from "@mantine/core";

const ProductDetailsPage = ({ params }: any) => {
  const { productId } = params;

  return (
    <Box component="section">
      <Container size="lg">
        <Text component="p">Product Details Number: {productId}</Text>
      </Container>
    </Box>
  );
};

export default ProductDetailsPage;
