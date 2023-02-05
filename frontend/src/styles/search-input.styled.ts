import styled from "styled-components";
import { themes } from "./themes";

export const SearchInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SearchInputElement = styled.input`
  font-family: inherit;
  width: 100%;
  border: 2px solid ${themes.color.gray};
  border-radius: 5px;
  outline: 0;
  font-size: 1.3rem;
  color: ${themes.color.darkGray};
  padding: 10px;
  background: transparent;
`;