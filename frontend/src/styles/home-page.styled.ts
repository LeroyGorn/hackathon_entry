import styled from "styled-components";
import { themes } from "./themes";

export const HomeContainer = styled.div`
  width: 100%;
  padding: 0 20px;

  input {
    width: 100%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
`;

export const RecipesWrapper = styled.div`
  width: 100%;
  border: 1px solid ${themes.color.gray};
  padding: 20px;
`;

export const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 55px;
  column-gap: 40px;

  @media ${themes.media.maxTabletLandscape} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${themes.media.maxMobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RecipeButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
