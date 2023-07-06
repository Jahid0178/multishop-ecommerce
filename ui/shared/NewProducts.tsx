import React from "react";
import ProductsCard from "../Cards";
import { Box, Grid, Pagination, Title } from "@mantine/core";
import usePaginate from "@/libs/hooks/usePaginate";
import { CompanyProductTypes } from "@/libs/interface/interface";
interface Iprops {
  data: CompanyProductTypes[] | undefined;
  title: string;
}
const NewompanyProducts: React.FC<Iprops> = ({ data, title }) => {
  const pagination = usePaginate({
    data: data,
    itemsPerPage: 5,
  });
  const { paginateData, handlePageChange, totalPage } = pagination;
  return (
    <div>
      <Title order={3} ta={"center"} mb={30}>{title}</Title>
      <Grid>
        {paginateData?.map(
          (product: {
            id: number;
            title: string;
            category: string;
            rating: number;
            price: number;
            sold: number;
            src: string;
          }) => (
            <Grid.Col span={12} md={3} key={product.id}>
              <ProductsCard data={product} />
            </Grid.Col>
          )
        )}
      </Grid>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <Pagination my={50} total={totalPage} onChange={handlePageChange} />
      </Box>
    </div>
  );
};

export default NewompanyProducts;
