import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { get, showUserProducts } from "../../redux/slices/user-product-slice";
import { productsService } from "../../services/productService";
import {
  ProfileIngredientsQuantity,
  ProfileIngredientsWrapper,
  ProfileTitle,
  RecipesButtonWrapper,
  UserPageWrapper,
  UserProfileIngredientsWrapper,
} from "../../styles/user.styled";
import { ProductElement } from "../../styles/sidebar.styled";
import { FormButton } from "../../styles/auth-form.styled";
import { IDish } from "../../types/products.type";
import { ContentWrapper, RecipesGrid } from "../../styles/home-page.styled";
import RecipeCard from "../../common/recipe/recipe-card";

const UserPage = () => {
  const ingredients = useSelector(showUserProducts);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>();
  const [btnIsClicked, setBtnIsClicked] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<IDish[]>();

  useEffect(() => {
    const Authorization = localStorage.getItem("ACCESS_TOKEN");
    if (Authorization) {
      const auth = `Bearer ${Authorization}`;
      productsService
        .getUserProducts(auth)
        .then((res) => res && dispatch(get(res)));
    }
  }, [dispatch]);

  useEffect(() => {
    const username = localStorage.getItem("USERNAME");
    if (username) {
      setName(username);
    }
  }, []);

  useEffect(() => {
    const Authorization = localStorage.getItem("ACCESS_TOKEN");
    if (btnIsClicked && Authorization) {
      const auth = `Bearer ${Authorization}`;
      productsService.getUserDishes(auth).then((res) => res && setRecipes(res));
    }
  }, [btnIsClicked]);

  const handleRecipesButtonClick = () => {
    setBtnIsClicked(true);
  };

  const btnClassName = btnIsClicked ? "disabled" : undefined;

  return (
    (ingredients && (
      <Layout>
        <UserPageWrapper>
          <ProfileTitle className="withSeparator">{name}</ProfileTitle>
          <ProfileIngredientsWrapper>
            <ProfileTitle>Ingredients</ProfileTitle>
            <UserProfileIngredientsWrapper>
              {ingredients.map((ing) => (
                <ProductElement className="user" key={ing.id}>
                  {ing.product.name} -
                  <ProfileIngredientsQuantity>
                    {` ${ing.quantity} ${ing.product.measurement}`}
                  </ProfileIngredientsQuantity>
                </ProductElement>
              ))}
            </UserProfileIngredientsWrapper>
            <RecipesButtonWrapper>
              <FormButton
                disabled={btnIsClicked}
                className={btnClassName}
                onClick={handleRecipesButtonClick}
              >
                Get Recipes
              </FormButton>
            </RecipesButtonWrapper>
          </ProfileIngredientsWrapper>

          {recipes && (
            <ContentWrapper>
              <ProfileTitle>Recipes</ProfileTitle>
              <RecipesGrid>
                {recipes.map((item) => (
                  <RecipeCard
                    key={item.name}
                    name={item.name}
                    image={item.image}
                    instructions={item.instructions}
                    category={item.category}
                  />
                ))}
              </RecipesGrid>
            </ContentWrapper>
          )}
        </UserPageWrapper>
      </Layout>
    )) ||
    null
  );
};

export default UserPage;
