import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 100%;
`

export const StyledLogo = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 1rem 3rem;
  }
`

export const Logo = styled.img``
