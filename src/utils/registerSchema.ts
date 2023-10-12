import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Nome não pode conter números ou caracteres especiais",
    )
    .min(3, "Nome deve conter ao menos 3 caracteres")
    .required("Campo de preenchimento obrigatório"),

  email: Yup.string()
    .email("E-mail inválido")
    .required("Campo de preenchimento obrigatório"),

  // sobrenome: Yup.string()
  //   .matches(/^[a-zA-Z\s]+$/, "Sobrenome não pode conter números ou caracteres especiais")
  //   .min(5, 'Sobrenome deve conter ao menos 5 caracteres')
  //   .required('Campo de preenchimento obrigatório'),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas, minúsculas, números e símbolos como ! @ # $ % & * =",
    )
    .required("Campo de preenchimento obrigatório"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas devem ser idênticas")
    .required("Campo de preenchimento obrigatório"),

  // termosDeUso: Yup.boolean()
  //   .oneOf([true], 'Você deve concordar com os Termos de Uso para criar uma conta'),

  // politicaDePrivacidade: Yup.boolean()
  //   .oneOf([true], 'Você deve concordar com a Política de Privacidade para criar uma conta')
});
