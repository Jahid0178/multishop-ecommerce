"use client";

import Auth from "@/ui/Form";
import {
  Box,
  Container,
  Grid,
  BackgroundImage,
  Center,
  Text,
  MediaQuery,
} from "@mantine/core";

const SignUpPage = () => {
  return (
    <Box style={{ margin: "10px 0px" }}>
      <Container size="xl">
        <Grid>
          <Grid.Col span={12} md={4}>
            <Auth />
          </Grid.Col>
          <Grid.Col span={12} md={8}>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Box
                sx={{
                  backgroundImage: `url('https://www.koder.top/demo/authfy/demo/images/computer-1867758_1920-min.jpg')`,
                  height: "70vh",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  //   marginTop: "-10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: "35px",
                    fontWeight: "800",
                    color: "white",
                  }}
                >
                  Welcome to Multy Shop Account
                </Text>
              </Box>
            </MediaQuery>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUpPage;
