import React from "react";
import { CompanyProductTypes } from "@/libs/interface/interface";
import usePaginate from "@/libs/hooks/usePaginate";
import { Box, Grid, Pagination } from "@mantine/core";
import ProductsCard from "../Cards";
interface Iprops {
  data: CompanyProductTypes[] | undefined;
}
const OldCompanyProducts: React.FC<Iprops> = ({ data }) => {
  const pagination = usePaginate({
    data: data,
    itemsPerPage: 5,
  });
  const { paginateData, handlePageChange, totalPage } = pagination;
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", margin: "2px 0px" }}>
          Old Company product
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
    </div>
  );
};

export default OldCompanyProducts;
