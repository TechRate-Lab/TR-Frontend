import { StyledHeader, StyledLogo, Logo } from "./style";
import logo from '../../assets/Logo.png'

const Header: React.FC = () => {

  return (
    <StyledHeader>
      <StyledLogo>
        <Logo src={logo} />
      </StyledLogo>
    </StyledHeader>
  );
};

export default Header;
