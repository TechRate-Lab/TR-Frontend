import { Field, Form, FormikProvider, useFormik } from "formik";
import InputForm from "../InputForm";
import { CadastroLabel, SecondaryButton, StyledSendButton } from "./styled";
import RegisterService from "../../../services/user/RegisterService";

const FormRegister = () => {
  const { sendRegister } = RegisterService();

  const initialValues = {
    name: "",
    email: "",
    password: "Abc123!@#",
  };
  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void },
  ) => {
    await sendRegister(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <FormikProvider value={formik}>
        <Form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <CadastroLabel>Nome</CadastroLabel>
          <Field as={InputForm} type="input" name="name" inputType="text" />
          <CadastroLabel>E-mail</CadastroLabel>
          <Field as={InputForm} type="input" name="email" inputType="email" />
          <StyledSendButton>AVALIAR AGORA</StyledSendButton>
          <SecondaryButton>
            <a href="/">VOLTAR AO INICIO</a>
          </SecondaryButton>
        </Form>
      </FormikProvider>
    </>
  );
};

export default FormRegister;
