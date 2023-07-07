import { FaqTpes } from "@/libs/types/types";
import React from "react";
import { Container, Title, Accordion, createStyles, rem, Box, Grid, Flex } from "@mantine/core";
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
    background: "linear-gradient(to right, #4a00e0 , #8e2de2)",
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
  },

}));
const Faq: React.FC<FaqTpes> = ({ title, data }) => {
  const { classes } = useStyles();

  // deviding data in to tow arrays 
  const leftAccordionData = data?.slice(0, Math.ceil((data?.length / 2)));
  const rightAccordionData = data?.slice(leftAccordionData?.length);

  return (
    <Box bg={"#03031F"}>
      <Container size="lg" className={classes.wrapper} >
        <Title align="center" className={classes.title}>
          {title}
        </Title>
        <Grid>
          <Grid.Col span={12} lg={6}>
            <Accordion variant="separated">
              {leftAccordionData?.map((data, index) => {
                return (
                  <Accordion.Item key={index} className={classes.item} value={data.value} >
                    <Accordion.Control>{data.faqTitle}</Accordion.Control>
                    <Accordion.Panel>{data.faqDescription}</Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Grid.Col>
          <Grid.Col span={12} lg={6}>
            <Accordion variant="separated">
              {rightAccordionData?.map((data, index) => {
                return (
                  <Accordion.Item key={index} className={classes.item} value={data.value} >
                    <Accordion.Control>{data.faqTitle}</Accordion.Control>
                    <Accordion.Panel>{data.faqDescription}</Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
