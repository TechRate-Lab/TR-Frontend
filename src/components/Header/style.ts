import styled from 'styled-components'

export const StyledHeader = styled.div`
  width: 100%;
`

export const StyledLogo = styled.div`
  width: 160px;
  margin-left: 112px;
  padding: 16px 0;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 112px;
  }
`

export const Logo = styled.img``
