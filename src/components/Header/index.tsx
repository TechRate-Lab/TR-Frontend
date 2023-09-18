import React, { useState } from "react";
import { StyledHeader, Logo, Menu, HamburgerIcon } from "./style";
import logo from "../../assets/imgLogo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <Logo src={logo} />
      <HamburgerIcon onClick={toggleMenu} className={isMenuOpen ? "open" : ""}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <Menu isMenuOpen={isMenuOpen} className={isMenuOpen ? "open" : ""}>
        <button>Início</button>
        <button>Sobre nós</button>
        <button>Fale conosco</button>
      </Menu>
    </StyledHeader>
  );
};

export default Header;
