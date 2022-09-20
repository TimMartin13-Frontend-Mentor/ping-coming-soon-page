import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialised;
  text-rendering: optimizeLegibility;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 20px;
}
`;
