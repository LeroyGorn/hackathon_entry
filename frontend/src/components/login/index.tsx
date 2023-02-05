import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, FormikHelpers } from "formik";
import * as Styled from "../../styles/auth-form.styled";
import AuthModal from "../../common/auth/modal";
import AuthInput from "../../common/auth/input";
import { loginFormData, loginInitialValues } from "../../constants";
import { ILoginData } from "../../types/auth.types";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { ILoginResponse } from "../../types/response.types";
import { get } from "../../redux/slices/user-slice";
import { LoginSchema } from "../../validators/login.validator";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string>();
  const [data, setData] = useState<ILoginResponse>();

  const handleSubmit = (
    values: ILoginData,
    { resetForm }: FormikHelpers<ILoginData>
  ) => {
    authService
      .loginUser(values)
      .then((res) => {
        if (res) {
          res && setData(res);
          navigate("/");
        } else {
          setError("Invalid Email/Password");
        }
      })
      .catch((error) => console.log(error));
    resetForm();
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("ACCESS_TOKEN", data.access);
      localStorage.setItem("REFRESH_TOKEN", data.refresh);
      dispatch(get(data));
    }
  }, [data, dispatch]);

  return (
    <AuthModal>
      <Styled.AuthTitle>{loginFormData.title}</Styled.AuthTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={loginInitialValues}
        validationSchema={LoginSchema}
        validateOnBlur
      >
        {({ errors }) => (
          <Form>
            {loginFormData.inputs.map((input) => (
              <AuthInput
                key={input.id}
                type={input.type}
                name={input.name}
                label={input.label}
                error={errors[input.name as keyof ILoginData]}
              />
            ))}
            <Styled.AuthSubmitButtonWrapper>
              <Styled.FormButton type="submit">
                {loginFormData.buttonText}
              </Styled.FormButton>
            </Styled.AuthSubmitButtonWrapper>
            <Styled.BottomTextWrapper>
              {error && <Styled.ErrorAlert>{error}</Styled.ErrorAlert>}
              <span>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </span>
            </Styled.BottomTextWrapper>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
};

export default Login;
