import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchInput from "../../common/searhInput";
import {
  HomeContainer,
  MainContent,
  RecipeButtonWrapper,
  RecipesGrid,
  RecipesWrapper,
} from "../../styles/home-page.styled";
import { IDish, IProduct } from "../../types/products.type";
import Sidebar from "../sidebar";
import { get } from "../../redux/slices/product-slice";
import { get as dishGet } from "../../redux/slices/dishes-slice";
import { productsService } from "../../services/productService";
import RecipeCard from "../../common/recipe/recipe-card";
import { FormButton } from "../../styles/auth-form.styled";
import { Spinner } from "../../styles/recipe-card.styled";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>("");
  const [dishes, setDishes] = useState<IDish[]>([]);
  const [dishPage, setDishPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    productsService.getAllProducts().then((res) => res && setProducts(res));
    dispatch(get(products));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    productsService.getAllDishes(dishPage * 9).then((res) => {
      res && setDishes(res.results);
      setIsLoading(false);
    });
    dispatch(dishGet(dishes));
  }, [dishPage]);

  const handleLoadMoreClick = () => {
    setDishPage((old) => old + 1);
  };

  return (
    (dishes && (
      <HomeContainer>
        <SearchInput
          search={search}
          setSearch={setSearch}
          label="Search for recipes"
        />
        <MainContent>
          <Sidebar products={products} />
          <RecipesWrapper>
            <RecipesGrid>
              {dishes.filter((item) => item.name.includes(search)).map((item) => {
                console.log(item)
                return (
                <RecipeCard
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  instructions={item.instructions}
                  category={item.category}
                />
              )})}
            </RecipesGrid>
            <RecipeButtonWrapper>
              {isLoading ? (
                <Spinner />
              ) : (
                search === '' && <FormButton onClick={handleLoadMoreClick}>Load More</FormButton>
              )}
            </RecipeButtonWrapper>
          </RecipesWrapper>
        </MainContent>
      </HomeContainer>
    )) ||
    null
  );
};

export default Home;
