import { useContext } from "react";
import ButtonGlobal from "../Buttons/ButtonGlobal";
import { StyledHeader, StyledLogo, Logo } from "./style";
import { ThemeContext } from "styled-components";

const Header: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <StyledHeader>
      <StyledLogo>
        <Logo src="src/assets/Logo.png" />
      </StyledLogo>
      <ButtonGlobal
        hoverColor={theme.colors.primary.dark}
        backgroundColor={theme.colors.primary.dark_hover}
        children={"Teste"}
        fontWeight={theme.buttons.large.fontWeight}
        fontSize={theme.buttons.large.fontSize}
        heigth={theme.buttons.large.height}
        spacing={theme.buttons.large.spacing}
      />
    </StyledHeader>
  );
};

export default Header;
