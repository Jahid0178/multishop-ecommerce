import React from "react";
import { ProductType } from "../types/types";

interface PaginatePropsTypes {
  data: ProductType[] | undefined;
  itemsPerPage: number;
}

interface PaginateReturnType {
  paginateData: ProductType[];
  handlePageChange: (page: number) => void;
  totalPage: number;
}

const usePaginate = ({
  data,
  itemsPerPage,
}: PaginatePropsTypes): PaginateReturnType => {
  const [paginateData, setPaginateData] = React.useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPage = Math.ceil((data?.length || 0) / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  React.useEffect(() => {
    if (data) {
      const result = data.slice(indexOfFirst, indexOfLast);
      setPaginateData(result);
    }
  }, [data, indexOfFirst, indexOfLast]);

  return {
    handlePageChange,
    paginateData,
    totalPage,
  };
};

export default usePaginate;