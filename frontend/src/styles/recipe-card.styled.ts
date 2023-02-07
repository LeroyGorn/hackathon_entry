import styled from "styled-components";
import { spin } from "./animation.styled";
import { themes } from "./themes";

export const RecipeCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  `;

export const RecipeImage = styled.img`
  width: 100%;
  `;

export const RecipeTitle = styled.h4`
  font-size: 1.1em;
  margin-top: 3px;
  color: ${themes.color.primary};
`;

export const PageTitle = styled.h3`
  font-family: ${themes.font.family.playfair};
  font-size: 40px;
  margin-bottom: 40px;
`;

export const RecipeCategory = styled.span`
  margin-top: 3px;
  font-size: 0.9em;
  color: ${themes.color.orange};
  opacity: 0.5;
  font-weight: ${themes.font.weight.bold};
`;

export const CategoryButton = styled.button`
  width: fit-content;
  border: 1px solid ${themes.color.orange};
  background-color: ${themes.color.secondaryGray};
  padding: 12px 47px;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${themes.color.lightOrange};
  }

  &.active {
    background-color: ${themes.color.lightOrange};
  }
`;

export const CategoryButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 16px;
`;

export const Spinner = styled.div`
  border: 5px solid ${themes.color.darkGray};
  border-top: 5px solid ${themes.color.gray};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.8s linear infinite;
  margin: 20px auto;
`;
