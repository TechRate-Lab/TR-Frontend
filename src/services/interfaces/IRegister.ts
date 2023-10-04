export interface IRegisterService {
    sendRegister:(data:RegisterDTO) => Promise<void>;
}

export type RegisterDTO = {
    name:string;
    email:string;
    password:string;
}