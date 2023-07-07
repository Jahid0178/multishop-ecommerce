import { CompanyProductTypes } from "@/libs/interface/interface";
import { getNewAndOldCompanyProducts } from "@/libs/utils";
import { Container, Title } from "@mantine/core";
import React from "react";

import NewProducts from "../shared/NewProducts";
import OldProducts from "../shared/OldProducts";
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
  return (
    <Container size="xl">
      <Title order={1} ta={"center"} mt={50} mb={10}>
        Company product
      </Title>
      <NewProducts
        identify="CN"
        title="New Company product"
        data={newProducts}
      />
      <OldProducts title="Old Company product" data={oldProducts} />
    </Container>
  );
};

export default CompanyProducts;
