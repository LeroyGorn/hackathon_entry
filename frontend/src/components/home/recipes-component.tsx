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
import { IDishResponse } from "../../types/response.types";

interface IRecipeComponentProps {
  dishLimit: number;
  setDishLimit: React.Dispatch<React.SetStateAction<number>>;
  filteredRecipes?: IDishResponse;
}

const RecipeComponent = ({
  filteredRecipes,
  dishLimit,
  setDishLimit,
}: IRecipeComponentProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleLoadMoreClick = () => {
    setDishLimit((old) => old + 1);
  };

  useEffect(() => {
    if (!filteredRecipes) {
      setIsLoading(true);
      productsService.getAllDishes(dishLimit * 9).then((res) => {
        res && setDishes(res.results);
        setIsLoading(false);
      });
      dispatch(dishGet(dishes));
    }
  }, [dishLimit, filteredRecipes]);

  useEffect(() => {
    if (categories.length > 0) {
      productsService
        .getDishesByCategories(`?category=${categories.join(",")}`)
        .then((res) => res && setDishes(res));
      dispatch(dishGet(dishes));
    }
  }, [categories]);

  const currentDishes =
    filteredRecipes && filteredRecipes.results.length > 0
      ? filteredRecipes.results
      : dishes;

  return (
    <RecipesWrapper>
      <RecipesCategory categories={categories} setCategories={setCategories} />
      <ContentWrapper>
        <PageTitle>Recipes</PageTitle>
        <RecipesGrid>
          {currentDishes.map((item) => (
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
            <FormButton
              disabled={filteredRecipes && !filteredRecipes.next}
              className={
                filteredRecipes && !filteredRecipes.next
                  ? "disabled"
                  : undefined
              }
              onClick={handleLoadMoreClick}
            >
              Load More
            </FormButton>
          )}
        </RecipeButtonWrapper>
      </ContentWrapper>
    </RecipesWrapper>
  );
};

export default RecipeComponent;
