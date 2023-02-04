import React from 'react'
import SearchInput from '../../common/searhInput'
import { SidebarContainer } from '../../styles/sidebar.styled'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SearchInput label='Searh ingredients' />
      Sidebar
      {/* {ingredients.map((item) => return <IngredientCard />)} */}
    </SidebarContainer>
  )
}

export default Sidebar