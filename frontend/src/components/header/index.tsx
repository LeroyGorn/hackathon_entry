import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../common/logo";
import { showUser } from "../../redux/slices/user-slice";
import {
  HeaderContainer,
  Logout,
  Nav,
  NavItem,
} from "../../styles/header.styled";
import { BiUser } from "react-icons/bi";

const Header = () => {
  const userData = useSelector(showUser);
  const [name, setName] = useState<string>();
  const [isLogined, setIsLogined] = useState(
    !!localStorage.getItem("USERNAME")
  );

  useEffect(() => {
    if (typeof localStorage.getItem("USERNAME") === "string") {
      setName(localStorage.getItem("USERNAME") as string);
    }
    if (userData.first_name) {
      setName(userData.first_name);
    }
  }, [userData.first_name]);

  const handleLogoutClick = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
    localStorage.removeItem("USERNAME");
    setIsLogined(false);
  };
  

  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        {isLogined ? (
          <>
            <Link to="/user">
              <BiUser />
            </Link>
            {name && (
              <>
                <Link to="/user">
                  <p>
                    Hello, <span className="username">{name}</span>!
                  </p>
                </Link>
                <NavItem>
                  <Logout className="logout" onClick={handleLogoutClick}>
                    Logout
                  </Logout>
                </NavItem>
              </>
            )}
          </>
        ) : (
          <NavItem>
            <Link className="signup" to="/signup">
              Sign Up
            </Link>{" "}
            |{" "}
            <Link className="login" to="/login">
              Login
            </Link>{" "}
          </NavItem>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
