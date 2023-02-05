import React from "react";
import * as Styled from "../../styles/recipe-card.styled";

interface IRecipeCard {
  name: string;
  image: string;
  instructions: string;
  category: string;
}

const RecipeCard = ({ name, image, instructions, category }: IRecipeCard) => {
  return (
    <Styled.RecipeCardWrapper>
      <Styled.RecipeImage src={image} alt={`${name} img`} />
      <Styled.RecipeCategory>{category}</Styled.RecipeCategory>
      <Styled.RecipeTitle>{name}</Styled.RecipeTitle>
    </Styled.RecipeCardWrapper>
  );
};

export default RecipeCard;
