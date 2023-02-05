import React, { useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);

  const handleLabelClick = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <AuthInputWrapper>
      <AuthInputElement
        innerRef={inputRef}
        type={type}
        name={name}
        placeholder={label}
      />
      <AuthInputLabel onClick={handleLabelClick}>{label}</AuthInputLabel>
    </AuthInputWrapper>
  );
};

export default AuthInput;
