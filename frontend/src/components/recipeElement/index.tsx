import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsService } from "../../services/productService";
import { IOneDishResponse } from "../../types/response.types";
import * as Styled from "../../styles/recipe-element.styled";
import { Spinner } from "../../styles/recipe-card.styled";
import RecipeCompare from "./recipe-compare";
import { IUserProducts } from "../../types/products.type";

const RecipeElement = () => {
  const { id } = useParams();
  const [dish, setDish] = useState<IOneDishResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userProducts, setUserProducts] = useState<IUserProducts[]>([]);

  useEffect(() => {
    if (id) {
      productsService.getDishById(id).then((res) => res && setDish(res));
    }
  }, [id]);

  // useEffect(() => {
  //   const Authorization = localStorage.getItem("ACCESS_TOKEN");
  //   if (Authorization) {
  //     const auth = `Bearer ${Authorization}`;
  //     productsService
  //       .getUserProducts(auth)
  //       .then((res) => res && setUserProducts(res));
  //   }
  // }, []);

  useEffect(() => {
    if (!!dish) setIsLoading(false);
  }, [dish]);

  return (
    <Styled.RecipeElementContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Styled.RecipeTitle>{dish?.dish.name}</Styled.RecipeTitle>
          <Styled.RecipeWrapper>
            <img src={`${dish?.dish.image}`} alt={`${dish?.dish.name}`} />
            <Styled.ProductsCard>
              <Styled.ProductsList>
                {dish?.products.map(({ product, quantity }) => {
                  return (
                    <Styled.ProductItem key={product.id}>
                      {product.name}:{" "}
                      <Styled.ProductQuantity>
                        {quantity} {product.measurement}
                      </Styled.ProductQuantity>
                    </Styled.ProductItem>
                  );
                })}
              </Styled.ProductsList>
            </Styled.ProductsCard>
          </Styled.RecipeWrapper>
          <Styled.RecipeSubtitle>Instructions</Styled.RecipeSubtitle>
          <Styled.RecipeText>{dish?.dish.instructions}</Styled.RecipeText>
          {(localStorage.getItem("ACCESS_TOKEN") &&
            dish &&
            userProducts.length > 0 && (
              <RecipeCompare choosenDish={dish} userProducts={userProducts} />
            )) || (
            <Styled.AlertText>
              Want to cook this dish? Please <Link to="/login">Login</Link> |{" "}
              <Link to="/signup">Sign Up</Link>
            </Styled.AlertText>
          )}
        </>
      )}
    </Styled.RecipeElementContainer>
  );
};

export default RecipeElement;
