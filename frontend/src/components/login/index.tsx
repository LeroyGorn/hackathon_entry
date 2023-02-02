import React from "react";
import { Formik, Form } from "formik";
import * as Styled from "../../styles/auth-form.styled";
import AuthModal from "../../common/auth/modal";
import AuthInput from "../../common/auth/input";
import { loginFormData, loginInitialValues } from "../../constants";
import { ILoginData } from "../../types/auth.type";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (values: ILoginData) => {
    console.log(values);
  };

  return (
    <AuthModal>
      <Styled.AuthTitle>{loginFormData.title}</Styled.AuthTitle>
      <Formik onSubmit={handleSubmit} initialValues={loginInitialValues}>
        <Form>
          {loginFormData.inputs.map((input) => (
            <AuthInput
              key={input.id}
              type={input.type}
              name={input.name}
              label={input.label}
            />
          ))}
          <Styled.AuthSubmitButtonWrapper>
            <button type="submit">{loginFormData.buttonText}</button>
          </Styled.AuthSubmitButtonWrapper>
          <Styled.BottomTextWrapper>
            <span>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </span>
          </Styled.BottomTextWrapper>
        </Form>
      </Formik>
    </AuthModal>
  );
};

export default Login;
