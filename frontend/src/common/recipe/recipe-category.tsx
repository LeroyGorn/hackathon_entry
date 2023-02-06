import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, showCategory } from "../../redux/slices/category-slice";
import { productsService } from "../../services/productService";
import { ContentWrapper } from "../../styles/home-page.styled";
import {
  CategoryButton,
  CategoryButtonsWrapper,
  PageTitle,
} from "../../styles/recipe-card.styled";
import { ICategoryResponse } from "../../types/response.types";

interface IRecipesCategoryProps {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const RecipesCategory = ({
  categories,
  setCategories,
}: IRecipesCategoryProps) => {
  const dispatch = useDispatch();
  const storeCategories = useSelector(showCategory);
  const [possibleCategories, setPossibleCategories] =
    useState<ICategoryResponse>();

  useEffect(() => {
    productsService
      .getAllCategories()
      .then((res) => res && setPossibleCategories(res));
  }, []);

  useEffect(() => {
    possibleCategories && dispatch(get(possibleCategories));
  }, [possibleCategories, dispatch]);

  const handleCategoryClick = (category: string) => {
    if (categories.includes(category)) {
      setCategories((old) => old.filter((cat) => cat !== category));
    } else {
      setCategories((old) => [...old, category]);
    }
  };

  return (
    <ContentWrapper className="upper">
      <PageTitle>Categories</PageTitle>
      <CategoryButtonsWrapper>
        {storeCategories.category.map((category, idx) => (
          <CategoryButton
            key={idx}
            onClick={() => handleCategoryClick(category)}
            className={categories.includes(category) ? "active" : undefined}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryButtonsWrapper>
    </ContentWrapper>
  );
};

export default RecipesCategory;
