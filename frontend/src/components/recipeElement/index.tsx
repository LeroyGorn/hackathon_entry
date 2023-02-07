import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productsService } from '../../services/productService';
import { IOneDishResponse } from '../../types/response.types';
import * as Styled from "../../styles/recipe-element.styled";
import { Spinner } from '../../styles/recipe-card.styled';

const RecipeElement = () => {
  const { id } = useParams();
  const [dish, setDish] = useState<IOneDishResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    productsService.getDishById(id).then((res) => res && setDish(res));
  }, [id]);

  useEffect(() => {
    if (!!dish) setIsLoading(false)
  }, [dish]);

  return (
    <Styled.RecipeElementContainer>
      {isLoading ? <Spinner /> : (
        <>
          <Styled.RecipeTitle>{dish?.dish.name}</Styled.RecipeTitle>
          <Styled.RecipeWrapper>
            <img src={`${dish?.dish.image}`} alt={`${dish?.dish.name}`} />
            <Styled.ProductsCard>
              <Styled.ProductsList>
                {dish?.products.map(({ product, quantity }) => {
                  return <Styled.ProductItem>{product.name}: {' '}
                    <Styled.ProductQuantity>
                      {quantity} {product.measurement}
                    </Styled.ProductQuantity>
                  </Styled.ProductItem>
                })}
              </Styled.ProductsList>
            </Styled.ProductsCard>
          </Styled.RecipeWrapper>
          <Styled.RecipeSubtitle>Instructions</Styled.RecipeSubtitle>
          <Styled.RecipeText>{dish?.dish.instructions}</Styled.RecipeText>
        </>
      )}
    </Styled.RecipeElementContainer>
  )
}

export default RecipeElement