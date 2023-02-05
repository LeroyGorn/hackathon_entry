import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import SearchInput from '../../common/searhInput'
import { HomeContainer, MainContent, RecipesWrapper } from '../../styles/home-page.styled'
import { IProduct } from '../../types/products.type'
import Sidebar from '../sidebar'
import { get, showProducts } from "../../redux/slices/product-slice";
import { productsService } from "../../services/productService";
import { authService } from '../../services/authService';


const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
      productsService.getAllProducts().then((res) => res && setProducts(res))
      dispatch(get(products));
  }, []);
  console.log(products)

  return (
    <HomeContainer>
      <SearchInput label='Search fore recipes'/>
      <MainContent>
      <Sidebar />
      <RecipesWrapper>
          {/* {resipes.map((item) => return <RecipeCard />)} */}
          List
      </RecipesWrapper>
      </MainContent>
    </HomeContainer>
  )
}

export default Home