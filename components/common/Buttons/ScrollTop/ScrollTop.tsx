"use client";

import { useEffect, useState } from "react";
import { ActionIcon, createStyles } from "@mantine/core";
import { FaArrowCircleUp } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  button: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
}));

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const { classes } = useStyles();

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <ActionIcon
          className={classes.button}
          variant="transparent"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp color="#221ECD" size={40} />
        </ActionIcon>
      )}
    </>
  );
};

export default ScrollTop;
