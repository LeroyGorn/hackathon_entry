import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Styled from "../../styles/auth-form.styled";
import AuthModal from "../../common/auth/modal";
import AuthInput from "../../common/auth/input";
import { signUpData, signUpInitialValues } from "../../constants";
import { ISignUpData } from "../../types/auth.types";
import { Link, useNavigate } from "react-router-dom";
import { SignupSchema } from "../../validators/signup.validator";
import { authService } from "../../services/authService";

const SignUp = () => {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const handleSubmit = (
    values: ISignUpData,
    { resetForm }: FormikHelpers<ISignUpData>
  ) => {
    authService
      .registerUser(values)
      .then((res) => {
        if (res) {
          navigate("/login");
        } else {
          setError("Error ocurred");
        }
      })
      .catch((err) => setError(err));
    resetForm();
  };

  return (
    <AuthModal>
      <Styled.AuthTitle>{signUpData.title}</Styled.AuthTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={signUpInitialValues}
        validationSchema={SignupSchema}
        validateOnBlur
      >
        {({ errors }) => (
          <Form>
            {signUpData.inputs.map((input) => (
              <AuthInput
                key={input.id}
                type={input.type}
                name={input.name}
                label={input.label}
                error={errors[input.name as keyof ISignUpData]}
              />
            ))}
            <Styled.CenterButtonWrapper>
              <Styled.FormButton type="submit">
                {signUpData.buttonText}
              </Styled.FormButton>
            </Styled.CenterButtonWrapper>
            <Styled.BottomTextWrapper>
              {error && <Styled.ErrorAlert>{error}</Styled.ErrorAlert>}
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </Styled.BottomTextWrapper>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
};

export default SignUp;
