import { FooterContainer, FooterLogo, FooterMsg } from "./style";
import logo from "../../assets/Logo.png";

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLogo src={logo} />
      <FooterMsg>
        Copyright 2023 Techrate. Todos os direitos reservados.
      </FooterMsg>
    </FooterContainer>
  );
};
