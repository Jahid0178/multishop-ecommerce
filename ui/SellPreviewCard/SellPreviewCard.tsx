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
    background: "#EDF2FD",
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
    // Use pseudo-classes
    '&:hover': {
      background: "white",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px",
    },
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
