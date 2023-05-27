import "./App.css";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes/themes";
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
