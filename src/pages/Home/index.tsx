import Header from "../../components/Header/Header";
import {
  Call,
  CallTitle,
  MainSection,
  HeroImage,
  HeroSection,
  CallSubTitle,
  RetangularTop,
  RetangularBottom,
} from "./style";
import ButtonGlobal from "../../components/Buttons/ButtonGlobal";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Home: React.FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Header />
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
            <RetangularTop/>
          <RetangularBottom/>
          <HeroImage src="src/assets/heroSection.png" />
        </HeroSection>
      </MainSection>
    </>
  );
};

export default Home;
