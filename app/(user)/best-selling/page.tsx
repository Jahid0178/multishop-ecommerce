"use client";

import { productsData } from "@/data/data";
import ProductsCard from "@/ui/Cards";
import { Box, Container, Grid } from "@mantine/core";

const BestSellingPage = () => {
  return (
    <Box component="section">
      <Container size="lg">
        <Grid>
          {productsData.map((product) => (
            <Grid.Col key={product.id} span={12} md={3}>
              <ProductsCard data={{ ...product, quantity: 1 }} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BestSellingPage;
