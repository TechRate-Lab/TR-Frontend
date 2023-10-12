import { api } from "../../configs/routes/api";
import { IRegisterService, RegisterDTO } from "../interfaces/IRegister";
import { useNavigate } from "react-router-dom";

const RegisterService = (): IRegisterService => {
  const navigate = useNavigate();

  const sendRegister = async (data: RegisterDTO) => {
    try {
      const response = await api.post("/createUser", data);
      console.log(response);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return { sendRegister };
};

export default RegisterService;
