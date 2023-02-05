import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Styled from "../../styles/auth-form.styled";
import AuthModal from "../../common/auth/modal";
import AuthInput from "../../common/auth/input";
import { loginFormData, loginInitialValues } from "../../constants";
import { ILoginData } from "../../types/auth.types";
import { Link } from "react-router-dom";
import { authService } from "../../services/authService";
import { ILoginResponse } from "../../types/response.types";
import { get, showUser } from "../../redux/slices/user-slice";

const Login = () => {
  // const user = useSelector(showUser);
  const dispatch = useDispatch();
  const [data, setData] = useState<ILoginResponse | undefined>();
  const handleSubmit = (values: ILoginData) => {
    authService.loginUser(values).then((res) => res && setData(res));
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
