import React, { useRef } from "react";
import {
  AuthInputElement,
  AuthInputLabel,
  AuthInputWrapper,
  ErrorMessage,
  ErrorMessageWrapper,
} from "../../../styles/auth-form.styled";

interface IAuthInputProps {
  name: string;
  label: string;
  type: string;
  error?: string;
}

const AuthInput = ({ error, name, label, type }: IAuthInputProps) => {
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
      {error && (
        <ErrorMessageWrapper>
          <ErrorMessage>{error}</ErrorMessage>
        </ErrorMessageWrapper>
      )}
    </AuthInputWrapper>
  );
};

export default AuthInput;
