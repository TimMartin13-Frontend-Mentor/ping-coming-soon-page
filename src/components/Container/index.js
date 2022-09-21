import React from "react";
import Header from "../Header";
import Graphic from "../Graphic";
import Footer from "../Footer";
import Attribution from "../Attribution";

import { ContainerStyle } from "./styles";

const Container = () => {
  return (
    <>
      <ContainerStyle>
        <Header />
        <Graphic />
        <Footer />
        <Attribution />
      </ContainerStyle>
    </>
  );
};

export default Container;
