import React from "react";
import Header from "../Header";
import Graphic from "../Graphic";
import { ContainerStyle } from "./styles";

const Container = () => {
  return (
    <ContainerStyle>
      <Header />
      <Graphic />
      {/* <Footer /> */}
    </ContainerStyle>
  );
};

export default Container;
