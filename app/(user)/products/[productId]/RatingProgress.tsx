import { Flex, Progress, Text } from '@mantine/core';
type IProps = {
    star: number,
    percent: number
}

const RatingProgress = ({ star, percent }: IProps) => {
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
                    {star} STARS
                </Text>
                <Text>
                    {percent}%
                </Text>
            </Flex>
            <Progress color="yellow" size="sm" value={percent} animate />
        </>
    );
};

export default RatingProgress;