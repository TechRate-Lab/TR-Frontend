import { describe, expect, test } from "vitest";
import { RegisterDTO } from "../services/interfaces/IRegister";
import RegisterService from "../services/user/RegisterService";

test("Should can create a user", async () => {
  const { sendRegister } = RegisterService();
  const user: RegisterDTO = {
    name: "Luiz",
    email: "luiz@luiz.com",
    password: "Abc123!@#",
  };

  const apiMock = {
    post: async (url: string, data: RegisterDTO) => ({ data: data }),
  };

  const originalApi = import.meta.env.VITE_API_URL;
  import.meta.env.VITE_API_URL = apiMock;

  const result = await sendRegister(user);

  import.meta.env.VITE_API = originalApi;
  expect(result).toMatchObject(user);
});
