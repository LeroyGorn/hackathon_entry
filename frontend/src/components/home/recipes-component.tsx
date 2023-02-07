import React, { useEffect, useState } from "react";
import RecipeCard from "../../common/recipe/recipe-card";
import { FormButton } from "../../styles/auth-form.styled";
import {
  RecipeButtonWrapper,
  RecipesGrid,
  RecipesWrapper,
  ContentWrapper,
} from "../../styles/home-page.styled";
import { useDispatch } from "react-redux";
import { PageTitle, Spinner } from "../../styles/recipe-card.styled";
import { IDish } from "../../types/products.type";
import { get as dishGet } from "../../redux/slices/dishes-slice";
import { productsService } from "../../services/productService";
import RecipesCategory from "../../common/recipe/recipe-category";

const RecipeComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dishPage, setDishPage] = useState<number>(1);
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleLoadMoreClick = () => {
    setDishPage((old) => old + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    productsService.getAllDishes(dishPage * 9).then((res) => {
      res && setDishes(res.results);
      setIsLoading(false);
    });
    dispatch(dishGet(dishes));
  }, [dishPage]);

  useEffect(() => {
    if (categories.length > 0) {
      productsService
        .getDishesByCategories(`?category=${categories.join(",")}`)
        .then((res) => res && setDishes(res));
      dispatch(dishGet(dishes));
    }
  }, [categories]);

  return (
    <RecipesWrapper>
      <RecipesCategory categories={categories} setCategories={setCategories} />
      <ContentWrapper>
        <PageTitle>Recipes</PageTitle>
        <RecipesGrid>
          {dishes.map((item) => (
            <RecipeCard
              key={item.name}
              name={item.name}
              image={item.image}
              instructions={item.instructions}
              category={item.category}
            />
          ))}
        </RecipesGrid>
        <RecipeButtonWrapper>
          {isLoading ? (
            <Spinner />
          ) : (
            <FormButton onClick={handleLoadMoreClick}>Load More</FormButton>
          )}
        </RecipeButtonWrapper>
      </ContentWrapper>
    </RecipesWrapper>
  );
};

export default RecipeComponent;
