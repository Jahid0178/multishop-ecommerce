import { Divider, Flex, Rating, Text } from '@mantine/core';

const ProductReviews = () => {
    return (
        <>
            <Divider my="sm" variant="dashed" />
            <Flex justify={"space-between"}>
                <Rating defaultValue={4.9} size="sm" />
                <Text>
                    10 Mar 2022
                </Text>
            </Flex>
            <Text size={"xs"} mb={5}>
                by Dr.Shamsuzzoha S
            </Text>
            <Text>
                ইনফ্রারেড ডিটেকটর টি ভালোই কাজ করে। তবে সার্কিট টি অনেক হালকা মানের, তাই এর স্থায়িত্ব নিয়ে আমি সন্দিহান।আশা করছি দারাজ সামনে ইনফ্রারেড সিকিউরিটি র উপর আরও উন্নত এবং স্থায়িত্ব সম্পন্ন ভালো ডিভাইস এর পসার নিয়ে আসবে।
            </Text>
            <Divider my="sm" variant="dashed" />
        </>
    );
};

export default ProductReviews;