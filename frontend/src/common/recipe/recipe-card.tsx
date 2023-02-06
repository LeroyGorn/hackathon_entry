import React from "react";
import { Link } from "react-router-dom";
import { IDish } from "../../types/products.type";
import * as Styled from "../../styles/recipe-card.styled";

const RecipeCard = ({ name, image, instructions, category }: IDish) => {
  return (
    <Styled.RecipeCardWrapper>
      <Link to={'/'}>
        <Styled.RecipeImage src={image} alt={`${name} img`} />
        <Styled.RecipeCategory>{category}</Styled.RecipeCategory>
        <Styled.RecipeTitle>{name}</Styled.RecipeTitle>
      </Link>
    </Styled.RecipeCardWrapper>
  );
};

export default RecipeCard;
