"use client";
import { animated, config, useSpring, useTransition } from "@react-spring/web";
import { useState } from "react";

import ForgotPassword from "./ForgotPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const Auth = ({ isOpen }: { isOpen: boolean }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  // const cartAnimation = useSpring({
  //   transform: isSignUp ? "translateX(-220%)" : "translateX(230%)",
  // });
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
        <animated.div className="cart-bolx">
          {isSignUp && forgotPassword === false ? (
            <SignUp state={setIsSignUp} onClick={toggleForm} />
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
