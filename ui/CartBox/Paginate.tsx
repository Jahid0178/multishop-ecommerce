/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Box, Grid, Pagination, Image, Paper } from "@mantine/core";
import { paginateData, productsData } from "@/data/data";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}
const PaginationD: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(paginateData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const data = paginateData.slice(indexOfFirst, indexOfLast);

  return (
    <Box sx={{ height: "90%" }}>
      <Grid>
        {/* <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col> */}
        {data.map((data, index) => {
          return (
            <Grid.Col key={index} span={12} md={12}>
              <Box sx={{ display: "flex" }}>
                {data.title}
                <Image width={200} height={80} fit="contain" src={data.src} />
              </Box>
            </Grid.Col>
          );
        })}
      </Grid>

      <Box sx={{ position: "absolute", bottom: "7px" }}>
        <Pagination
          // initialPage={currentPage}
          total={totalPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default PaginationD;
