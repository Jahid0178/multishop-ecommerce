"use client";
import { animated, config, useSpring, useTransition } from "@react-spring/web";
import { useState } from "react";

import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Auth = ({ isOpen }: { isOpen: boolean }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  const cartAnimation = useSpring({
    transform: isOpen ? "translateX(-220%)" : "translateX(237%)",
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
        <animated.div className="auth" style={cartAnimation}>
          {isSignUp && forgotPassword === false ? (
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
      </div>
    </>
  );
};

export default Auth;
