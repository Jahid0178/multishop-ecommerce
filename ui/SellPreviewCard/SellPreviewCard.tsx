import { Card, Text, Title, createStyles } from "@mantine/core";

type SellPreviewCardProps = {
  data: {
    title: string,
    totalProduct: number,
    totalSellProduct: number,
  }
}

const useStyles = createStyles((theme) => ({
  SellPreviewCard: {
    background: "#3498DA",
    color: "white",
    // // Use pseudo-classes
    // '&:hover': {
    //   background: "white",
    //   boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
    // },
  },
}));

const SellPreviewCard = ({ data }: SellPreviewCardProps) => {
  const { classes } = useStyles();
  const { title, totalProduct, totalSellProduct } = data;

  return (
    <Card ta="center" withBorder className={classes.SellPreviewCard}>
      <Title order={2} color="#40C057">{title}</Title>
      <Text component="p" fw="bold" size={20}>Total Product: {totalProduct}</Text>
      <Text component="p" fw="bold" size={20}>Total Sell: {totalSellProduct}</Text>
    </Card>
  )
}

export default SellPreviewCard
