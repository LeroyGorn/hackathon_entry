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
    <HomeContainer>
      <SearchInput
        search={search}
        setSearch={setSearch}
        label="Search fore recipes"
      />
      <MainContent>
        <Sidebar products={products} />
        <RecipeComponent />
      </MainContent>
    </HomeContainer>
  );
};

export default Home;
