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
  font-size: 1.2em;
  margin-top: 3px;
`;

export const RecipeCategory = styled.span`
  margin-top: 3px;
  font-size: 0.9em;
  color: ${themes.color.primary};
  opacity: 0.5;
  font-weight: ${themes.font.weight.bold};
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
