import { FaqTpes } from "@/libs/types/types";
import React from "react";
import { Container, Title, Accordion, createStyles, rem, Box, Grid } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: "white",
  },

  item: {
    color: "white",
    background: "linear-gradient(to right, #22076F , #7C46AE)",
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    // border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    //   }`,
  },
  mantineAccordionLabel: {
    color: "white",
  },
}));
const Faq: React.FC<FaqTpes> = ({ title, data }) => {
  const { classes } = useStyles();

  return (
    <Box bg={"#03031F"}>
      <Container size="lg" className={classes.wrapper} >
        <Title align="center" className={classes.title}>
          {title}
        </Title>
        <Accordion variant="separated">
          <Grid>
            {data.map((data, index) => {
              return (
                <Grid.Col span={12} md={6} key={index}>
                  <Accordion.Item className={classes.item} value={data.value} >
                    <Accordion.Control>{data.faqTitle}</Accordion.Control>
                    <Accordion.Panel>{data.faqDescription}</Accordion.Panel>
                  </Accordion.Item>
                </Grid.Col>
              );
            })}
          </Grid>
        </Accordion>
      </Container>
    </Box>
  );
};

export default Faq;
