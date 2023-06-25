"use client";

import ProductsCard from "@/components/Cards/ProductsCard";
import { productsData } from "@/data/data";
import { Box, Container, Grid, Title } from "@mantine/core";

const HomePage = () => {
  return (
    <>
      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2}>New Company Products</Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="section">
        <Container size="lg">
          <Box component="div">
            <Title order={2}>Old Company Products</Title>
            <Box component="div" mt={20}>
              <Grid>
                {productsData.map((product) => (
                  <Grid.Col key={product.id} span={12} md={6} lg={3}>
                    <ProductsCard data={product} />
                  </Grid.Col>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
