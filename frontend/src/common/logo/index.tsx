import React from "react";
import { LogoContainer } from "../../styles/logo.styled";

const Logo = () => {
  return (
    <LogoContainer to="/">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png"
        alt=""
      />
    </LogoContainer>
  );
};

export default Logo;
