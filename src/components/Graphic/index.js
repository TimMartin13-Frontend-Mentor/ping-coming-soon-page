import React from "react";
import { Chart } from "./styles";

const Graphic = () => {
  return (
    <Chart
      src={process.env.PUBLIC_URL + "/images/illustration-dashboard.png"}
      alt="graphs"
    />
  );
};

export default Graphic;
