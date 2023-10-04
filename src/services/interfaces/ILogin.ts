export interface ILoginService {
  login: (data: LoginDTO) => Promise<void>;
}

export type LoginDTO = {
  name: string;
  email: string;
  password: string;
};
