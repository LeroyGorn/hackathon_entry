import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchInput from "../../common/searhInput";
import { HomeContainer, MainContent } from "../../styles/home-page.styled";
import { IProduct } from "../../types/products.type";
import Sidebar from "../sidebar";
import { get } from "../../redux/slices/product-slice";
import { productsService } from "../../services/productService";
import RecipeComponent from "./recipes-component";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    productsService.getAllProducts().then((res) => res && setProducts(res));
    dispatch(get(products));
  }, []);

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
              {dishes.filter((item) => item.name.includes(search)).map((item) =>
                <RecipeCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  instructions={item.instructions}
                  category={item.category}
                />
              )}
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
