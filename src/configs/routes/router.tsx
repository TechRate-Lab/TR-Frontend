import { createBrowserRouter} from 'react-router-dom'
import Home from '../../pages/Home'
import CadastroPage from '../../pages/Cadastro'


const router = createBrowserRouter([
    {
    path:'/',
    element: <Home />
    },
    {
        path:'/cadastro',
        element:<CadastroPage />
    }
])

export default router