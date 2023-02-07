import styled from "styled-components";
import { themes } from "./themes";

export const SidebarContainer = styled.div`
  max-width: 370px;
  min-width: 370px;
  padding: 20px;
  border: 1px solid ${themes.color.gray};
  margin-bottom: 40px;

  input {
    margin-bottom: 10px;
  }
`;

export const ProductsWrapper = styled.div`
  max-height: calc(70vh - 80px);
  overflow-y: scroll;
`;

export const ProductElement = styled.button`
  display: inline-block;
  background-color: ${themes.color.lightGray};
  border: 1px solid ${themes.color.gray};
  border-radius: 5px;
  width: fit-content;
  margin: 10px 5px;
  padding: 5px 12px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 20px;

  &.user {
    background-color: ${themes.color.lightOrange};
    padding: 10px 15px;
  }

  &.selected {
    background-color: ${themes.color.lightOrange};
  }

  &:hover {
    background-color: ${themes.color.lightOrange};
  }
`;

export const SelectedProductsWrapper = styled.div`
  margin-bottom: 20px;
  div {
    background-color: ${themes.color.lightGray};
  }
`;
