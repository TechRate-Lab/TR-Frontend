import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/themes";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
