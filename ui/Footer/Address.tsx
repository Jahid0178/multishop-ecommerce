import { Divider, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import UsaFlag from "../../public/assets/usaFlag.png";
import ThilandFlag from "../../public/assets/thilandFlag.png";
import { Addresses } from "@/data/data";


const Address = () => {
    return (
        <>
            <Title order={5}>
                Addresses
            </Title>
            <Divider mr={"xl"} mb={5} />

            {
                Addresses.map(address => (
                    <Flex key={address.id} align={"flex-start"} mb={10}>
                        <Image
                            src={address.flag}
                            alt={`${address.contry} Flag`}
                            width={20}
                            height={15}

                        />
                        <Text ml={"sm"}>
                            {address.address}
                        </Text>
                    </Flex>
                ))
            }

        </>
    )
}

export default Address;