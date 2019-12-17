import React from "react";

import "../../styles/signin-signup-form/signin-signup-form.scss";
import SignIn from "../../components/sign-in/signin";
import SignUp from "../../components/signup/signup";

const SignInSignUpForms = () => {
  return (
    <div className="sign-in-sign-up-forms">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInSignUpForms;
