import { Divider, Flex, Grid, Pagination, Rating, Text, Title } from "@mantine/core";
import AddReview from "./AddReview";
import ProductReviews from "./ProductReviews";
import RatingProgress from "./RatingProgress";

const ReviewsTab = () => {
    return (
        <>
            <Grid align="center">
                <Grid.Col span={12} md={5}>
                    <Title size="3rem" ta={"center"}>
                        4.9
                    </Title>
                    <Rating defaultValue={4.9} size="xl" mx="auto" />
                    <Title order={3} ta={"center"}>
                        Rated 5 out of 1 Rating
                    </Title>
                </Grid.Col>
                <Grid.Col span={12} md={7}>
                    {/* rating progress start  */}
                    <RatingProgress star={5} percent={60} />
                    <RatingProgress star={4} percent={20} />
                    <RatingProgress star={3} percent={10} />
                    <RatingProgress star={2} percent={5} />
                    <RatingProgress star={1} percent={0} />
                    {/* rating progress end  */}
                </Grid.Col>
            </Grid>

            <Divider my="sm" variant="dotted" />
            <Text>
                Product Reviews
            </Text>

            {/* Product Reviews start */}
            <ProductReviews />
            <ProductReviews />
            <Flex justify={"end"} mb={10}>
                <Pagination mr={0} total={5} />
            </Flex>
            {/* Product Reviews end */}

            {/* Add a review start */}
            <AddReview />
            {/* Add a review end */}
        </>
    );
};

export default ReviewsTab;