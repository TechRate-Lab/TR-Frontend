import { api } from "../../configs/routes/api";
import { IRegisterService, RegisterDTO } from "../interfaces/IRegister";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterService = (): IRegisterService => {
  const navigate = useNavigate();

  const handleError = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      draggable: true,
      theme: "colored",
      pauseOnHover: false,
    });
  };

  const sendRegister = async (data: RegisterDTO) => {
    try {
      const response = await api.post("/createUser", data);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      handleError("Algum erro aconteceu.");
    }
  };

  return { sendRegister };
};

export default RegisterService;
