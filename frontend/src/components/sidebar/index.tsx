import React, { useState } from 'react'
import SearchInput from '../../common/searhInput'
import { ProductElement, ProductsWrapper, SelectedProductsWrapper, SidebarContainer } from '../../styles/sidebar.styled'
import { IProduct } from '../../types/products.type'

interface IProps {
  products: IProduct[];
}

const Sidebar = ({ products }: IProps) => {
  const [search, setSearch] = useState<string>('')
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([])

  return (
    <SidebarContainer>
      <SearchInput label='Searh ingredients' search={search} setSearch={setSearch} />
      <SelectedProductsWrapper>
        {/* {selectedProducts.map((item, indx) => <ProductElement key={indx}>{item.name}</ProductElement>)} */}
      </SelectedProductsWrapper>
      <ProductsWrapper>
        {products
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((item, indx) => <ProductElement key={indx} onClick={(e) => console.log(e)} >{item.name}</ProductElement>)}
      </ProductsWrapper>
    </SidebarContainer>
  )
}

export default Sidebar