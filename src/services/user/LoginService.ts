import { api } from "../../configs/routes/api";
import { ILoginService, LoginDTO } from "../interfaces/ILogin";

const LoginService = (): ILoginService => {
  const login = async (data: LoginDTO) => {
    try {
      const response = await api.post("/login");
      console.log(response)
    } catch (error) {
        console.log(error)
    }
  };

  return { login };
};

export default LoginService
