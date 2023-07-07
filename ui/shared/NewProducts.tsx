import React from "react";
import ProductsCard from "../Cards";
import { Box, Grid, Pagination, Title, Text } from "@mantine/core";
import usePaginate from "@/libs/hooks/usePaginate";
import { CompanyProductTypes } from "@/libs/interface/interface";
import { StaticImageData } from "next/image";
interface Iprops {
  data: CompanyProductTypes[] | undefined;
  title: string;
  identify: string;
}
const NewCompanyProducts: React.FC<Iprops> = ({ data, title, identify }) => {
  const pagination = usePaginate({
    data: data,
    itemsPerPage: 5,
  });
  const { paginateData, handlePageChange, totalPage } = pagination;
  return (
    <Box style={{ position: "relative" }}>
      <Title order={3} ta={"center"} mb={30}>
        {title}
      </Title>

      <Grid>
        {paginateData?.map(
          (product: {
            id: number;
            title: string;
            category: string;
            rating: number;
            price: number;
            sold: number;
            src: any;
          }) => (
            <Grid.Col span={12} md={3} key={product.id}>
              <Text
                style={{
                  color: "red",
                  fontSize: "25px",
                  fontWeight: "800",
                  marginBottom: "-26px",
                  marginLeft: "-8px",
                  zIndex: "9",
                  position: "absolute",
                }}
              >
                {identify}
              </Text>
              <ProductsCard data={{ ...product, quantity: 1 }} />
            </Grid.Col>
          )
        )}
      </Grid>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <Pagination my={50} total={totalPage} onChange={handlePageChange} />
      </Box>
    </Box>
  );
};

export default NewCompanyProducts;
