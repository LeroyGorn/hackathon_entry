import React from "react";
import { Formik, Form } from "formik";
import * as Styled from "../../styles/auth-form.styled";
import AuthModal from "../../common/auth/modal";
import AuthInput from "../../common/auth/input";
import { signUpData, signUpInitialValues } from "../../constants";
import { ISignUpData } from "../../types/auth.type";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (values: ISignUpData) => {
    console.log(values);
  };

  return (
    <AuthModal>
      <Styled.AuthTitle>{signUpData.title}</Styled.AuthTitle>
      <Formik onSubmit={handleSubmit} initialValues={signUpInitialValues}>
        <Form>
          {signUpData.inputs.map((input) => (
            <AuthInput
              key={input.id}
              type={input.type}
              name={input.name}
              label={input.label}
            />
          ))}
          <Styled.AuthSubmitButtonWrapper>
            <button type="submit">{signUpData.buttonText}</button>
          </Styled.AuthSubmitButtonWrapper>
          <Styled.BottomTextWrapper>
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>
          </Styled.BottomTextWrapper>
        </Form>
      </Formik>
    </AuthModal>
  );
};

export default SignUp;
