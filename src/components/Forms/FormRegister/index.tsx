import { Field, Form, FormikProvider, useFormik } from "formik";
import { validationSchema } from "../../../utils/registerSchema";
import InputForm from "../InputForm";
import RegisterService from "../../../services/user/RegisterService";
import {
  CadastroLabel,
  SecondaryButton,
  StyledSendButton,
  LoadingIndicator,
} from "./styled";
import { useState } from "react";

const FormRegister = () => {
  const [loading, setLoading] = useState(false);
  const { sendRegister } = RegisterService();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void },
  ) => {
    setLoading(true);

    await sendRegister(values);
    setLoading(false);
    resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
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
          <Field
            as={InputForm}
            type="input"
            name="password"
            inputType="password"
          />
          <CadastroLabel>Confirmação de Senha</CadastroLabel>
          <Field
            as={InputForm}
            type="input"
            name="confirmPassword"
            inputType="password"
          />
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
