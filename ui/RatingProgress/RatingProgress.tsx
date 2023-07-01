import { Flex, Progress, Text } from "@mantine/core"

const RatingProgress = ({ }) => {
    return (
        <>
            <Flex
                mih={50}
                gap="md"
                justify="space-between"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Text>
                    5 STARS
                </Text>
                <Text>
                    60%
                </Text>
            </Flex>
            <Progress color="yellow" size="sm" value={60} animate />
        </>
    )
}

export default RatingProgress