import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { CadastroContainer, CadastroInfos, CadastroLabel, CadastroTitle, SecondaryButton, StyledForm, StyledInput, StyledSendButton } from "./styled";


export default function CadastroPage(){
    return (
        <>
        <Header/>
        <CadastroContainer>
            <CadastroTitle>Cadastro</CadastroTitle>
            <CadastroInfos>Realize o cadastro e comece a avaliar empresas</CadastroInfos>
            <StyledForm>
                <CadastroLabel>Nome</CadastroLabel>
                <StyledInput/>
                <CadastroLabel>E-mail</CadastroLabel>
                <StyledInput/>
                <StyledSendButton>AVALIAR AGORA</StyledSendButton>
                <SecondaryButton><a href="/">VOLTAR AO INICIO</a></SecondaryButton>
            </StyledForm>
        </CadastroContainer>
        <Footer/>
        </>
    )
}