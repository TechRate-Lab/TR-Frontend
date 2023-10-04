import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import CadastroPage from "../../pages/Cadastro";
import GenericPage from "../../pages/GenericPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <CadastroPage />,
  },
  {
    path:"/genericPage",
    element:<GenericPage />
  }
]);

export default router;
