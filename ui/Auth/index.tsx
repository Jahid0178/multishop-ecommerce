import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { useSpring, animated, useTransition, config } from "@react-spring/web";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
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
    setForgotPassword(false);
    setIsSignUp((prev) => !prev);
  };
  const isForgottenPassword = () => {
    setForgotPassword(true);
  };
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        {formTransition((styles, item) => (
          <animated.div style={styles}>
            {item && forgotPassword === false ? (
              <SignUp onClick={toggleForm} />
            ) : forgotPassword === true ? (
              <ForgotPassword
                haveAccount={toggleForm}
                dont_Haveaccount={toggleForm}
              />
            ) : (
              <SignIn
                isSignUp={toggleForm}
                isForgottenPassword={isForgottenPassword}
              />
            )}
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default Auth;
