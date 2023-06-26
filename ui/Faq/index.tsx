import { FaqTpes } from "@/libs/types/types";
import React from "react";
import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));
const Faq: React.FC<FaqTpes> = ({ title, data }) => {
  const { classes } = useStyles();

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        {title}
      </Title>
      <Accordion variant="separated">
        {data.map((data, index) => {
          return (
            <div key={index}>
              <Accordion.Item className={classes.item} value={data.value}>
                <Accordion.Control>{data.faqTitle}</Accordion.Control>
                <Accordion.Panel>{data.faqDescription}</Accordion.Panel>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion>
    </Container>
  );
};

export default Faq;