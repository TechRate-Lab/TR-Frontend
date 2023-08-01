import { StyledHeader, Logo } from './style'
import logo from '../../assets/Logo.png'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={logo} />
    </StyledHeader>
  )
}

export default Header
