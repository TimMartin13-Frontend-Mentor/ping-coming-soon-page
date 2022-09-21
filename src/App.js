import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import "./App.css";

import Container from "./components/Container";

const theme = {
  blue: "hsl(223, 87%, 63%)",
  notQuitePaleBlue: "hsl(223, 100%, 75%)",
  paleBlue: "hsl(223, 100%, 88%)",
  lightRed: "hsl(354, 100%, 66%)",
  grey: "hsl(0, 0%, 59%)",
  paleGrey: "hsl(0, 0%, 90%)",
  veryDarkBlue: "hsl(209, 33%, 12%)",
  white: "hsl(0, 0%, 100%)",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
