import React from 'react'
import SearchInput from '../../common/searhInput'
import { HomeContainer, MainContent, RecipesWrapper } from '../../styles/home-page.styled'
import Sidebar from '../sidebar'

const Home = () => {
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