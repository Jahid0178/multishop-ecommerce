/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Grid,
  Pagination,
  Image,
  Paper,
  Button,
  NumberInput,
  rem,
  ActionIcon,
} from "@mantine/core";
import { paginateData, productsData } from "@/data/data";
import React from "react";
import { ProductType } from "@/libs/types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  state: React.Dispatch<React.SetStateAction<ProductType[]>>;
}
const PaginationD: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  state,
}) => {
  const { items } = useSelector((state: RootState) => state.shoppingCart);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = Math.ceil(paginateData.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const data = React.useCallback(() => {
    const data = items.slice(indexOfFirst, indexOfLast);
    state(data);
  }, [items, indexOfFirst, indexOfLast, state]);

  React.useEffect(() => {
    data();
  }, [data]);

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
