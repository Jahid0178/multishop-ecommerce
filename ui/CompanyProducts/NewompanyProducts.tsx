import React from "react";
import ProductsCard from "../Cards";
import { Box, Grid, Pagination } from "@mantine/core";
import usePaginate from "@/libs/hooks/usePaginate";
import { CompanyProductTypes } from "@/libs/interface/interface";
interface Iprops {
  data: CompanyProductTypes[] | undefined;
}
const NewompanyProducts: React.FC<Iprops> = ({ data }) => {
  const pagination = usePaginate({
    data: data,
    itemsPerPage: 5,
  });
  const { paginateData, handlePageChange, totalPage } = pagination;
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2px 0px" }}>
        New Company product
      </h1>
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
            <Grid.Col span={12} md={4} key={product.id}>
              <ProductsCard data={product} />
            </Grid.Col>
          )
        )}
      </Grid>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <Pagination total={totalPage} onChange={handlePageChange} />
      </Box>
    </div>
  );
};

export default NewompanyProducts;
