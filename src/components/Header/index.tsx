import { StyledHeader, Logo, Menu } from './style'
import logo from '../../assets/imgLogo.png'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={logo} />
      <Menu>
        <button>
          Início
        </button>
        
        <button>
          Sobre nós
        </button>
        
        <button>
          Fale conosco
        </button>
      </Menu>
    </StyledHeader>
  )
}

export default Header
