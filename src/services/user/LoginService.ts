import { api } from "../../configs/routes/api";
import { ILoginService, LoginDTO } from "../interfaces/ILogin";
import { useNavigate } from "react-router-dom";

const LoginService = (): ILoginService => {
  const navigate = useNavigate();
  const login = async (data: LoginDTO) => {
    try {
      const response = await api.post("/login");
      console.log(response);
      navigate('/genericPage')
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

export default LoginService;
