import { useContext } from "react";
import ButtonGlobal from "../Buttons/ButtonGlobal";
import { StyledHeader, StyledLogo, Logo } from "./style";
import { ThemeContext } from "styled-components";
import { theme } from "../../themes/themes";

const Header: React.FC = () => {

    const themes = theme

return (
    <StyledHeader>
      <StyledLogo>
        <Logo src="src/assets/Logo.png" />
      </StyledLogo>
      <ButtonGlobal
        hoverColor={theme.colors.primary.dark}
        backgroundColor={theme.colors.primary.dark_hover}
      />
    </StyledHeader>
  );
};

export default Header;
