import { Card, Text, Title } from "@mantine/core";

type SellPreviewCardProps = {
  data: {
    title: string,
    totalProduct: number,
    totalSellProduct: number,
  }
}

const SellPreviewCard = ({ data }: SellPreviewCardProps) => {
  const { title, totalProduct, totalSellProduct } = data;

  return (
    <Card ta="center" withBorder>
      <Title order={2} color="#40C057">{title}</Title>
      <Text component="p" fw="bold" size={20}>Total Product: {totalProduct}</Text>
      <Text component="p" fw="bold" size={20}>Total Sell: {totalSellProduct}</Text>
    </Card>
  )
}

export default SellPreviewCard
