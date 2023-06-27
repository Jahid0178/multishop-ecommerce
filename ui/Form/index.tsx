import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { useSpring, animated, useTransition, config } from "@react-spring/web";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  // Transition for the form
  const formTransition = useTransition(isSignUp, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)", easing: "easeInOutQuad" },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
      easing: "easeInOutQuad",
    },
    config: config.slow,
  });

  // Toggle between sign-up and sign-in forms
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <div>
        <div style={{ position: "relative", width: "100%" }}>
          {formTransition((styles, item) =>
            item ? (
              <animated.div style={styles}>
                <SignUp onClick={toggleForm} />
              </animated.div>
            ) : (
              <animated.div style={styles}>
                <SignIn isSignUp={toggleForm} />
              </animated.div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
