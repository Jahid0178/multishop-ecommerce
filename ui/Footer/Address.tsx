import { Box, Divider, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import UsaFlag from "../../public/assets/usaFlag.png";
import ThilandFlag from "../../public/assets/thilandFlag.png";
import { Addresses } from "@/data/data";

const Address = () => {
  return (
    <>
      <Title order={5}>Addresses</Title>
      <Divider mr={"xl"} mb={15} />

      {Addresses.map((address) => (
        <Box
          key={address.id}
          component="div"
          p={10}
          sx={{ backgroundColor: "#2E2E2E", borderRadius: "0.3rem" }}
          mb={5}
        >
          <Box component="div">
            <Flex align={"flex-start"} mb={10}>
              <Image
                src={address.flag}
                alt={`${address.contry} Flag`}
                width={20}
                height={15}
                style={{ marginTop: "0.4rem" }}
              />
              <Text ml={"sm"}>{address.address}</Text>
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Address;
