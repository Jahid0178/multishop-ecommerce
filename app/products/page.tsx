"use client";

import { products } from "@/libs/Data";
import ProductsCard from "@/ui/Cards";
import Sidebar from "@/ui/SideBar";
import { Box, Container, Grid, Pagination } from "@mantine/core";
import { useState } from "react";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 9;
  const totalPages = Math.ceil(products.length / productPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <Box component="section">
      <Container size="lg">
        <Grid>
          <Grid.Col span={12} md={3}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col span={12} md={9}>
            <Grid justify="center">
              {currentProducts.map((product, index) => (
                <Grid.Col span={12} md={4} key={index}>
                  <ProductsCard data={product} />
                </Grid.Col>
              ))}
              <Box mt={20}>
                <Pagination
                  total={totalPages}
                  currentpage={currentPage}
                  limit={5}
                  onChange={handlePageChange}
                  radius="xs"
                  sx={{ justifyContent: "center" }}
                />
              </Box>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsPage;
