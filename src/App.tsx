import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/themes";
import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
