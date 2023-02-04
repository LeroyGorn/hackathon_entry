import styled from "styled-components";
import { themes } from "./themes";

export const FooterContainer = styled.footer`
  font-size: ${themes.font.size.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 20px;
  background-color: ${themes.color.gray};
`