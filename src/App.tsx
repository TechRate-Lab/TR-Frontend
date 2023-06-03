import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/themes";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
