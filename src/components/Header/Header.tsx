import { StyledHeader, StyledLogo, Logo } from "./style"

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <StyledLogo>
                <Logo src='src/assets/Logo.png'/>
            </StyledLogo>
        </StyledHeader>
    )
}

export default Header