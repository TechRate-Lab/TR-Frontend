import { Footer } from "../../components/Footer";
import FormRegister from "../../components/Forms/FormRegister";
import Header from "../../components/Header";
import { CadastroContainer, CadastroInfos, CadastroLabel, CadastroTitle, SecondaryButton, StyledForm, StyledInput, StyledSendButton } from "./styled";


export default function CadastroPage(){
    return (
        <>
        <Header/>
        <CadastroContainer>
            <CadastroTitle>Cadastro</CadastroTitle>
            <CadastroInfos>Realize o cadastro e comece a avaliar empresas</CadastroInfos>
            <FormRegister/>
        </CadastroContainer>
        <Footer/>
        </>
    )
}