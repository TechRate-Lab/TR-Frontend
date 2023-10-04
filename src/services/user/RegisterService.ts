import { api } from "../../configs/routes/api";
import { IRegisterService, RegisterDTO } from "../interfaces/IRegister";


const RegisterService = (): IRegisterService => {

    const sendRegister = async (data:RegisterDTO) => {
        try {
            const response = await api.post('/createUser', data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return { sendRegister}
}

export default RegisterService