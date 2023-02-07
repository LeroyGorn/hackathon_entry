import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchInput from "../../common/searhInput";
import { HomeContainer, MainContent } from "../../styles/home-page.styled";
import { IProduct } from "../../types/products.type";
import Sidebar from "../sidebar";
import { get } from "../../redux/slices/product-slice";
import { productsService } from "../../services/productService";
import RecipeComponent from "./recipes-component";
import { IDishResponse } from "../../types/response.types";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<IDishResponse>();
  const [search, setSearch] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [dishLimit, setDishLimit] = useState<number>(1);

  useEffect(() => {
    productsService.getAllProducts().then((res) => res && setProducts(res));
    dispatch(get(products));
  }, []);

  useEffect(() => {
    if (search !== "" || selectedProducts.length > 0) {
      productsService
        .getFilteredDishes(search, selectedProducts.join(","), dishLimit * 9)
        .then((res) => res && setFilteredRecipes(res));
    } else {
      setFilteredRecipes(undefined);
    }
  }, [search, selectedProducts, dishLimit]);

  return (
    <HomeContainer>
      <SearchInput
        search={search}
        setSearch={setSearch}
        label="Search fore recipes"
      />
      <MainContent>
        <Sidebar
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          products={products}
        />
        <RecipeComponent
          dishLimit={dishLimit}
          setDishLimit={setDishLimit}
          filteredRecipes={filteredRecipes}
        />
      </MainContent>
    </HomeContainer>
  );
};

export default Home;
