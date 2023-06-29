import { Box, Pagination, Button } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import usePaginate from "@/libs/hooks/usePaginate";

interface PaginationProps {
  itemsPerPage: number;
}
const PaginationD: React.FC<PaginationProps> = ({ itemsPerPage }) => {
  const { items } = useSelector((state: RootState) => state.shoppingCart);
  const pagination = usePaginate({
    data: items,
    itemsPerPage: itemsPerPage,
  });
  const { paginateData, handlePageChange, totalPage } = pagination;
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Button size="lg" style={{ margin: "10px 0px" }} fullWidth>
        Procced To cart
      </Button>

      <Box>
        <Pagination total={totalPage} onChange={handlePageChange} />
      </Box>
    </Box>
  );
};

export default PaginationD;
