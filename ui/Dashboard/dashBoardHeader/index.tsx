import {
  Box,
  Text,
  TextInput,
  Avatar,
  Indicator,
  MediaQuery,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import React from "react";

const DashboardHeader = () => {
  return (
    <Box style={{ width: "100%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          radius="xl"
          size="md"
          placeholder="Search Product..."
          sx={{ maxWidth: "280px", width: "100%" }}
          rightSection={
            <IconSearch size={25} color="#221ECD" cursor="pointer" />
          }
        />
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Box style={{ alignItems: "flex-end" }}>
            <Box style={{ display: "flex", gap: "50px" }}>
              <Box
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  backgroundColor: "#d7d0e542",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AiOutlineBell />
              </Box>
              <Box
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  backgroundColor: "#d7d0e542",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Indicator inline label="New" size={15}>
                  <AiOutlineMail size={25} />
                </Indicator>
              </Box>
            </Box>
          </Box>
        </MediaQuery>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
