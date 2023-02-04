import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.ul`
  display: flex;
  align-content: center;
  justify-content: space-between;
  list-style: none;
`

export const NavItem = styled.li`
  &+li {
    margin-left: 40px;
  }
`