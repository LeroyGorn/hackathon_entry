import styled from "styled-components";
import { themes } from "./themes";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .signup, 
  .login {
    color: ${themes.color.orange};
  }
`

export const Nav = styled.ul`
  display: flex;
  align-content: center;
  justify-content: space-between;
  list-style: none;

  svg {
    margin: 1px 10px 0;
    padding: 0;
    width: 20px;
    height: 20px;
    &:hover {
      color: ${themes.color.orange};
      cursor: pointer;
    }
  }

  .username {
    color: ${themes.color.orange};
  }
`

export const NavItem = styled.li`
  margin-left: 20px;
  
`