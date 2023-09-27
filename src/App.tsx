import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/themes";
import Header from "./components/Header";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import router from "./configs/routes/router";
import {RouterProvider} from 'react-router-dom'

function App() {
  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
      <RouterProvider router={router}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
