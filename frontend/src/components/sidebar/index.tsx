import React, { useState } from "react";
import SearchInput from "../../common/searhInput";
import {
  ProductElement,
  ProductsWrapper,
  SelectedProductsWrapper,
  SidebarContainer,
} from "../../styles/sidebar.styled";
import { IProduct } from "../../types/products.type";

interface IProps {
  products: IProduct[];
  selectedProducts: string[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

const Sidebar = ({
  products,
  selectedProducts,
  setSelectedProducts,
}: IProps) => {
  const [search, setSearch] = useState<string>("");

  const handleProductClick = (clickedProduct: string) => {
    if (!selectedProducts.includes(clickedProduct)) {
      setSelectedProducts((old) => [...old, clickedProduct]);
    }
  };

  const handleDeleteIngredients = (item: string) => {
    setSelectedProducts((old) => old.filter((name) => name !== item));
  };

  return (
    <SidebarContainer>
      <SearchInput
        label="Searh ingredients"
        search={search}
        setSearch={setSearch}
      />
      <SelectedProductsWrapper>
        {selectedProducts.map((item, indx) => (
          <ProductElement
            className="selected"
            key={indx}
            onClick={() => handleDeleteIngredients(item)}
          >
            {item}
          </ProductElement>
        ))}
      </SelectedProductsWrapper>
      <ProductsWrapper>
        {products
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, indx) => (
            <ProductElement
              key={indx}
              onClick={() => handleProductClick(item.name)}
              className={
                selectedProducts.includes(item.name) ? "selected" : undefined
              }
            >
              {item.name}
            </ProductElement>
          ))}
      </ProductsWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
