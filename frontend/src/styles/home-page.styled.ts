import styled from "styled-components";
import { themes } from "./themes";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 20px;

  input {
    width: 100%;
  }
`

export const MainContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
`

export const RecipesWrapper = styled.div`
  width: 100%;
  border: 1px solid ${themes.color.gray};
  padding: 20px;
`