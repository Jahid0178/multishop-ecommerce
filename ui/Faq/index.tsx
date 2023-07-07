import { FaqTpes } from "@/libs/types/types";
import React from "react";
import { Container, Title, Accordion, createStyles, rem, Box, Grid, Flex } from "@mantine/core";
import AccordionCompo from "./Accordion";
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

  // deviding data into tow arrays (for using in tow accordions)
  const leftAccordionData = data?.slice(0, Math.ceil((data?.length / 2)));
  const rightAccordionData = data?.slice(leftAccordionData?.length);

  return (
    <Box bg={"#03031F"}>
      <Container size="lg" className={classes.wrapper} >
        <Title align="center" className={classes.title}>
          {title}
        </Title>
        <Grid>
          {/* Right side's accordion (in lg screen) */}
          <Grid.Col span={12} lg={6}>
            <AccordionCompo
              accordionData={leftAccordionData}
              styles={classes.item}
            />
          </Grid.Col>

          {/* Left side's accordion (in lg screen) */}
          <Grid.Col span={12} lg={6}>
            <AccordionCompo
              accordionData={rightAccordionData}
              styles={classes.item}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
