import React from "react";
import * as Styled from "../../styles/recipe-element.styled";
import { IUserProducts } from "../../types/products.type";
import { IOneDishResponse } from "../../types/response.types";

interface IRecipeCompareProps {
  choosenDish: IOneDishResponse;
  userProducts: IUserProducts[];
}

const RecipeCompare = ({ choosenDish, userProducts }: IRecipeCompareProps) => {
  const missingProducts = choosenDish.products.map((selectedProduct) => {
    const product = !userProducts.find(
      (userProduct) =>
        selectedProduct.product.name === userProduct.product.name &&
        selectedProduct.quantity <= userProduct.quantity
    );
  });

  return (
    <Styled.RecipeCompareWrapper>
      If you want to cook {choosenDish.dish.name}
    </Styled.RecipeCompareWrapper>
  );
};

export default RecipeCompare;
