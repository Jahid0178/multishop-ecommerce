import { CompanyProductTypes } from "@/libs/interface/interface";
import { getNewAndOldPublicProducts } from "@/libs/utils";
import React from "react";
import NewProducts from "../shared/NewProducts";
import OldProducts from "../shared/OldProducts";
import { Container, Title } from "@mantine/core";
interface CompanyProductsProps {
  products: CompanyProductTypes[];
}
const PublicProducts: React.FC<CompanyProductsProps> = ({ products }) => {
  const [newProducts, setNewProducts] = React.useState<CompanyProductTypes[]>();
  const [paginate, setPaginate] = React.useState([]);
  const [oldProducts, setOldProducts] = React.useState<CompanyProductTypes[]>();

  React.useEffect(() => {
    const data = getNewAndOldPublicProducts(products);
    const { oldPublicProducts, newPublicProducts } = data;
    setNewProducts(newPublicProducts);
    setOldProducts(oldPublicProducts);
  }, [products]);
  return (
    <Container size="xl">
      <Title
        order={1}
        ta={"center"}
        mb={10}
      >
        Public product
      </Title>
      <NewProducts title="New Public product" data={newProducts} />
      <OldProducts title="Old Public product" data={oldProducts} />
    </Container>
  );
};

export default PublicProducts;
