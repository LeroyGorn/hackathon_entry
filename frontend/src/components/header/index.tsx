import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../common/logo";
import { showUser } from "../../redux/slices/user-slice";
import { HeaderContainer, Nav, NavItem } from "../../styles/header.styled";
import { mockedData } from "./mockedData";

const Header = () => {
  const userData = useSelector(showUser);
  const [name, setName] = useState<string>();

  useEffect(() => {
    if (typeof localStorage.getItem("USERNAME") === "string") {
      setName(localStorage.getItem("USERNAME") as string);
    }
    if (userData.first_name) {
      setName(userData.first_name);
    }
  }, [userData.first_name]);

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        {mockedData.map((item) => {
          return <NavItem key={item.id}>{item.title}</NavItem>;
        })}
      </Nav>
      {(name && <p>Hello {name}!</p>) || (
        <p>
          <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link>{" "}
        </p>
      )}
    </HeaderContainer>
  );
};

export default Header;
