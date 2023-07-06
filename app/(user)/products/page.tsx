'use client'
import { products } from "@/libs/Data";
import usePaginate from "@/libs/hooks/usePaginate";
import ProductsCard from "@/ui/Cards";
import ProductCategories from "@/ui/ProductCategory";
import RelatedSearches from "@/ui/RelatedSearches/Index";
import Sidebar from "@/ui/SideBar";
import { Box, Container, Grid, Pagination } from "@mantine/core";



const ProductsPage = () => {
  const pagination = usePaginate({
    data: products,
    itemsPerPage: 6,
  });
  const { paginateData, handlePageChange, totalPage } = pagination;

  return (
    <Box component="section">
      <Container size="lg">
        <Grid>
          <Grid.Col span={12} md={3}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col span={12} md={9}>
            <ProductCategories />
            <Grid justify="center">
              {paginateData.map((product, index) => (
                <Grid.Col span={12} md={4} key={index}>
                  <ProductsCard data={product} />
                </Grid.Col>
              ))}
              <Box mt={40}>
                <Pagination
                  total={totalPage}
                  onChange={handlePageChange}
                  radius="xs"
                  sx={{ justifyContent: "center" }}
                />
              </Box>
            </Grid>
            <RelatedSearches />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsPage;
