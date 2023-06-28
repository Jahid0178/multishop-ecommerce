import { CompanyProductTypes } from "@/libs/interface/interface";
import { getNewAndOldCompanyProducts } from "@/libs/utils";
import { Box, Container, Grid, Pagination } from "@mantine/core";
import React from "react";
import ProductsCard from "../Cards";
import usePaginate from "@/libs/hooks/usePaginate";
import NewompanyProducts from "./NewompanyProducts";
import OldCompanyProducts from "./OldCompanyProducts";
interface CompanyProductsProps {
  products: CompanyProductTypes[];
}
const CompanyProducts: React.FC<CompanyProductsProps> = ({ products }) => {
  const [newProducts, setNewProducts] = React.useState<CompanyProductTypes[]>();
  const [paginate, setPaginate] = React.useState([]);
  const [oldProducts, setOldProducts] = React.useState<CompanyProductTypes[]>();

  React.useEffect(() => {
    const data = getNewAndOldCompanyProducts(products);
    const { newCompanyProducts, oldCompanyProducts } = data;
    setNewProducts(newCompanyProducts);
    setOldProducts(oldCompanyProducts);
  }, [products]);
  console.log(oldProducts);
  return (
    <Container size="xl">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "50px",
          margin: "2px 0px",
        }}
      >
        Company product
      </h1>
      <NewompanyProducts data={newProducts} />
      <OldCompanyProducts data={oldProducts} />
    </Container>
  );
};

export default CompanyProducts;
