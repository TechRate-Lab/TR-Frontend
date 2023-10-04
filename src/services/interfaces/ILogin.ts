export interface ILoginService {
  login: (data: LoginDTO) => Promise<void>;
}

export type LoginDTO = {
  email: string;
  password: string;
};
