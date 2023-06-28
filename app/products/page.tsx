"use client";

import { productsData } from "@/data/data";
import ProductsCard from "@/ui/Cards";
import Sidebar from "@/ui/SideBar";
import { Box, Container, Grid } from "@mantine/core";

const ProductsPage = () => {
  return (
    <Box component="section">
      <Container size="lg">
        <Grid>
          <Grid.Col span={12} md={3}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col span={12} md={9}>
            <Grid>
              {productsData.map((product) => (
                <Grid.Col span={12} md={4} key={product.id}>
                  <ProductsCard data={product} />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsPage;
