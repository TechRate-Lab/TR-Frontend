import React from "react";

import ButtonGlobal from "../../../components/Buttons/ButtonGlobal";
import heroImage from "../../../assets/imgHeader.png";

import { Call, SubTitle, Container, HeroImage, Content, Title, MobileSubtitle } from "./styles";

const HeroSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <Call>
          <Title>Take a Peek</Title>
          <SubTitle>Conectando você à empresa ideal!</SubTitle>
          <MobileSubtitle>Aqui você descobre se o match com aquela empresa é real!</MobileSubtitle>
          <ButtonGlobal
            children="CADASTRE-SE"
            height="72px"
            width="226px"
            padding="0px"
          />
        </Call>
        <HeroImage src={heroImage} />
      </Content>
    </Container>
  );
};

export default HeroSection;
