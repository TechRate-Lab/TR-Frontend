import styled from 'styled-components'

export const AvaliarEmpresaButton = styled.button`
  all: unset;
  width: 222px;
  border-radius: 8px;
  text-align: center;
  color: white;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  background: #013a37;
  text-transform: uppercase;
  padding: 12px 0;
  cursor: pointer;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 276px;
    font-size: 20px;
    line-height: 20px;
    padding: 16px 0;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    all: unset;
    border-radius: 8px;
    text-align: center;
    color: white;
    width: 320px;
    font-size: 24px;
    line-height: 16px;
    font-weight: 500;
    background: #013a37;
    text-transform: uppercase;
    padding: 24px 6px;
  }
`
