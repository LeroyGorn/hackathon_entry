import React from "react";
import * as Styled from "../../../styles/auth-form.styled";

interface IAuthModalProps {
  children: React.ReactNode;
}

const AuthModal = ({ children }: IAuthModalProps) => {
  return (
    <Styled.AuthWrapper>
      <Styled.ModalWrapper>{children}</Styled.ModalWrapper>
    </Styled.AuthWrapper>
  );
};

export default AuthModal;
