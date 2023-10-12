import { Field, Form, FormikProvider, useFormik, validateYupSchema, Formik } from "formik";
import * as Yup from 'yup'
import InputForm from "../InputForm";
import RegisterService from "../../../services/user/RegisterService";
import { CadastroLabel, SecondaryButton, StyledSendButton, LoadingIndicator } from "./styled";
import { useState } from "react";

const FormRegister = () => {
  const [loading, setLoading] = useState(false)
  const { sendRegister } = RegisterService();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void },
  ) => {
    setLoading(true)
  
    await sendRegister(values)
    setLoading(false)
    resetForm();
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Nome não pode conter números ou caracteres especiais")
      .min(3, 'Nome deve conter ao menos 3 caracteres')
      .required('Campo de preenchimento obrigatório'),

    email: Yup.string()
      .email('E-mail inválido')
      .required('Campo de preenchimento obrigatório'),

    // sobrenome: Yup.string()
    //   .matches(/^[a-zA-Z\s]+$/, "Sobrenome não pode conter números ou caracteres especiais")
    //   .min(5, 'Sobrenome deve conter ao menos 5 caracteres')
    //   .required('Campo de preenchimento obrigatório'),    

    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'A senha deve ter o mínimo de 6 caracteres e conter letras maiúsculas, minúsculas, números e símbolos como ! @ # $ % & * =')
      .required('Campo de preenchimento obrigatório'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas devem ser idênticas')
      .required('Campo de preenchimento obrigatório')

    // termosDeUso: Yup.boolean()
    //   .oneOf([true], 'Você deve concordar com os Termos de Uso para criar uma conta'),

    // politicaDePrivacidade: Yup.boolean()
    //   .oneOf([true], 'Você deve concordar com a Política de Privacidade para criar uma conta')
  });


  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <CadastroLabel>Nome</CadastroLabel>
          <Field as={InputForm} type="input" name="name" inputType="text" />
          <CadastroLabel>E-mail</CadastroLabel>
          <Field as={InputForm} type="input" name="email" inputType="email" />
          <CadastroLabel>Senha</CadastroLabel>
          <Field as={InputForm} type="input" name="password" inputType="password" />
          <CadastroLabel>Confirmação de Senha</CadastroLabel>
          <Field as={InputForm} type="input" name="confirmPassword" inputType="password" />
          <StyledSendButton
            disabled={loading}
            isLoading={loading}
            type="submit"
          >
            {loading ? <LoadingIndicator /> : "AVALIAR AGORA"}
          </StyledSendButton>
          <SecondaryButton>
            <a href="/">VOLTAR AO INICIO</a>
          </SecondaryButton>
        </Form>
      </FormikProvider>
    </>
  );
};

export default FormRegister;
