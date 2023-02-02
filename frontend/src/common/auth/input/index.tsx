import React from "react";
import { useFormikContext } from "formik";
import {
  AuthInputElement,
  AuthInputLabel,
  AuthInputWrapper,
} from "../../../styles/auth-form.styled";

interface IAuthInputProps {
  name: string;
  label: string;
  type: string;
}

const AuthInput = ({ name, label, type }: IAuthInputProps) => {
  return (
    <AuthInputWrapper>
      <AuthInputElement type={type} name={name} placeholder={label} />
      <AuthInputLabel>{label}</AuthInputLabel>
    </AuthInputWrapper>
  );
};

export default AuthInput;
