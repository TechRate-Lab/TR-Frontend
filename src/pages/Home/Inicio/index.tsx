import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import {
  Call,
  CallSubTitle,
  CallTitle,
  HeroImage,
  HeroSection,
  MainSection,
  RetangularBottom,
  RetangularTop,
  StarsDown,
  StarsUp,
} from "./style";
import ButtonGlobal from "../../../components/Buttons/ButtonGlobal";

const Inicio: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <MainSection>
      <Call>
        <CallTitle>Techrate</CallTitle>
        <CallSubTitle>
          Aqui você descobre se o match com aquela empresa é real!
        </CallSubTitle>
        <ButtonGlobal
          hoverColor={theme.colors.secondary.dark}
          backgroundColor={theme.colors.secondary.normal}
          children={"AVALIAR UMA EMPRESA"}
          fontWeight={theme.buttons.large.fontWeight}
          fontSize={theme.buttons.large.fontSize}
          heigth={theme.buttons.large.height}
          spacing={theme.buttons.large.spacing}
          padding={theme.buttons.large.padding}
          color={theme.colors.grey.light}
          width={theme.buttons.large.width}
        />
      </Call>
      <HeroSection>
        <RetangularTop />
        <RetangularBottom />
        <HeroImage src="src/assets/heroSection.png" />
        <StarsUp />
        <StarsDown />
      </HeroSection>
    </MainSection>
  );
};

export default Inicio;
