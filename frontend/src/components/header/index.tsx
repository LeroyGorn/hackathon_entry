import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../common/logo";
import { showUser } from "../../redux/slices/user-slice";
import { HeaderContainer, Nav, NavItem } from "../../styles/header.styled";
import { BiUser } from "react-icons/bi"


const Header = () => {
  const userData = useSelector(showUser);
  const [name, setName] = useState<string>();
  const [isLogined] = useState(!!localStorage.getItem("USERNAME"));

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
        {isLogined ? (
          <>
            <BiUser />
            {name &&
              <>
                <p>Hello, <span className="username">{name}</span>!</p>
                <NavItem>
                  <Link className="logout" to="/logout">Logout</Link>
                </NavItem>
              </>
            }
          </>
        ) : (
          <NavItem>
            <Link className="signup" to="/signup">Sign Up</Link> | <Link className="login" to="/login">Login</Link>{" "}
          </NavItem>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
