import styled from "styled-components";
import { Field } from "formik";
import { themes } from "./themes";

export const AuthWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${themes.color.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 470px;
  padding: 55px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  border-radius: 3px;
`;

export const AuthTitle = styled.h2`
  font-family: ${themes.font.family.playfair};
  font-size: 35px;
  margin-bottom: 35px;
`;

export const AuthInputElement = styled(Field)`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${themes.color.gray};
  outline: 0;
  font-size: 1.3rem;
  color: ${themes.color.darkGray};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  z-index: 2;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    & ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${themes.color.darkGray};
    }
    padding-bottom: 6px;
    border-width: 3px;
  }
`;

export const AuthInputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${themes.color.darkGray};
`;

export const AuthInputWrapper = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 100%;

  &:not(:first-child) {
    margin-top: 35px;
  }

  &:last-child {
    margin-bottom: 35px;
  }
`;

export const AuthSubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & button {
    border-radius: 5px;
    font-size: 22px;
    color: ${themes.color.secondary};
    border: 0;
    background-color: ${themes.color.orange};
    padding: 15px 40px;
  }
`;

export const BottomTextWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  font-size: 16px;

  & span {
    text-align: center;
  }
  & a {
    color: ${themes.color.orange};
  }
`;
