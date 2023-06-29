"use client";

import { productsData } from "@/data/data";
import { products } from "@/libs/Data";
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
              {products.map((product, index) => (
                <Grid.Col span={12} md={4} key={index}>
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
