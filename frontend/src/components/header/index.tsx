import React from 'react'
import Logo from '../../common/logo'
import { HeaderContainer, Nav, NavItem } from '../../styles/header.styled'
import { mockedData } from './mockedData'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <Nav>
        {mockedData.map((item) => {
          return <NavItem key={item.id}>{item.title}</NavItem>
        })}
      </Nav>
      {/* Add another container for login/signup icons later */}
      <p>Login</p> 
  </HeaderContainer>
  )
}

export default Header