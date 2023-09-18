import React from "react";
import {
  BoxImage,
  SobreBoxMain,
  SobreBoxMainParagraph,
  SobreBoxMainText,
  SobreBoxMainTitle,
  BoxSecondary,
  Container,
  OverlayBg,
  Content,
} from "./styles";

import teamImage from "../../../assets/successful-happy-business-team.png";
import ButtonGlobal from "../../../components/Buttons/ButtonGlobal";
import { defaultTheme } from "../../../styles/themes/themes";

const Sobre: React.FC = () => {
  const { colors } = defaultTheme;
  const isMobile = window.innerWidth <= 360;
  return (
    <Container>
      <OverlayBg />
      <Content>
        <SobreBoxMain>
          <SobreBoxMainText>
            <SobreBoxMainTitle>Sobre nós</SobreBoxMainTitle>
            <div className={isMobile ? "mobile-paragraphs" : ""}>
              <SobreBoxMainParagraph>
                A Take a Peek nasceu do desejo de democratizar e simplificar a
                pesquisa a empresas que possuam os mesmos valores que você. Com
                as informações mais relevantes em evidência, você poderá se
                candidatar com confiança, autonomia e clareza.
              </SobreBoxMainParagraph>
              {!isMobile && (
                <SobreBoxMainParagraph>
                  <br />
                  <br />
                  Acreditamos que a transparência é o primeiro passo para que
                  trabalhadores e empregadores possam estar alinhados. Nossa
                  missão é unir pessoas e negócios que possuam as mesmas visões
                  e valores. E assim, o match perfeito acontecer!
                  <br />
                  <br />
                  Nosso time é formado por aspirantes e profissionais de
                  tecnologia voluntários, unidos com um único objetivo: colocar
                  em prática todo o conhecimento teórico adquirido.
                  <br />
                  <br />
                  Vamos juntos transformar o mercado tech? Estamos aqui para
                  ouvi-los.
                </SobreBoxMainParagraph>
              )}
            </div>
            <ButtonGlobal
              children="SAIBA MAIS"
              fontSize="20px"
              height="52px"
              width="160px"
              padding="0"
              backgroundColor={colors.primary.normal}
              border="1px solid white"
            />
          </SobreBoxMainText>
        </SobreBoxMain>
        <BoxImage
          src={teamImage} alt="image"
        />
      </Content>
    </Container>
  );
};

export default Sobre;
