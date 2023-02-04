import React from "react";
import Header from "../header";
import Footer from "../footer";
import { LayoutContainer } from "../../styles/layout.styled";

interface IProps {
  children: React.ReactNode
}

const Layout = ({children}: IProps) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer> 
  );
}

export default Layout;
