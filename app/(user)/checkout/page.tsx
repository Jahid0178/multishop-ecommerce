"use client";

import { Container, Grid } from "@mantine/core";
import { useId } from "@mantine/hooks";
import BillingDetailes from "./BillingDetails";
import OrderSummary from "./OrderSummary";
import { getCode, getName } from "country-list";
import countryList from "country-list";
// import countryList from 'country-list'

const CheckoutPage = () => {
  const id = useId();
  console.log(typeof id);
  console.log(countryList.getNames());
  return (
    <Container size={"lg"} my={30}>
      <Grid>
        {/* Billing details */}
        <Grid.Col span={12} md={6}>
          <BillingDetailes title={"Billing details"} id={id} />
        </Grid.Col>

        {/* order summary  */}
        <Grid.Col span={12} md={6}>
          <OrderSummary />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
