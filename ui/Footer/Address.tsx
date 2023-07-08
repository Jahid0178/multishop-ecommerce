import { Box, Col, Divider, Flex, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";
import UsaFlag from "../../public/assets/usaFlag.png";
import ThilandFlag from "../../public/assets/thilandFlag.png";
import { Addresses } from "@/data/data";
import { IconDeviceLandlinePhone, IconHome, IconMail, IconPhone } from "@tabler/icons-react";

const Address = () => {
  return (
    <>
      {/* <Title order={5}>Addresses</Title> */}
      {/* <Divider mr={"xl"} mb={15} /> */}

      <Box component="div" p={5} style={{ background: "#2E2E2E" }}>
        <Grid justify={"space-between"} >
          {Addresses.map((address) => (
            <Grid.Col
              key={address.id}
              span={12}
              md={6}
            // p={10}
            // sx={{ backgroundColor: "#2E2E2E", }}
            // my={10}
            >

              {/* Flag & Contry  */}
              <Box component="div">
                <Flex align={"flex-start"} mb={10}>
                  <Image
                    src={address.flag}
                    alt={`${address.contry} Flag`}
                    width={20}
                    height={15}
                    style={{ marginTop: "0.4rem" }}
                  />
                  <Text ml={"sm"}>{address.contry}</Text>
                </Flex>
              </Box>

              {/* Home */}
              <Box component="div">
                <Flex align={"flex-start"} mb={10}>
                  <IconHome size={18} color="white" />
                  <Text ml={"sm"}>{address.address}</Text>
                </Flex>
              </Box>
              {/* Email  */}
              <Box component="div">
                <Flex align={"flex-start"} mb={10}>
                  <IconMail size={18} color="white" />
                  <Text ml={"sm"}>{address.email}</Text>
                </Flex>
              </Box>
              {/* Mobile  */}
              <Box component="div">
                <Flex align={"flex-start"} mb={10}>
                  <IconPhone size={18} color="white" />
                  <Text ml={"sm"}>{address.mobile}</Text>
                </Flex>
              </Box>
              {/* Telephone */}
              <Box component="div">
                <Flex align={"flex-start"} mb={10}>
                  <IconDeviceLandlinePhone size={18} color="white" />
                  <Text ml={"sm"}>{address.tPhone}</Text>
                </Flex>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>

    </>
  );
};

export default Address;
