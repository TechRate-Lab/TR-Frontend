import styled from 'styled-components'
import background from '../../../assets/homeBackground-branco.png'

export const AvaliarSection = styled.section`
  width: 100%;
  margin-top: 80px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    
  }
`

export const AvaliarCard = styled.div`
  background-color: #013a37;
  border-radius: 8px;
  margin-inline: 20px;
  padding-top: 34px;
  padding-inline: 24px;
  position: relative;
  
  &::before {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    opacity: 0.3;
    z-index: 0;
    background-image: url(${background});
    background-size: cover;
  }
  
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding-inline: 80px;
    padding-top: 72px;
    padding-bottom: 72px;
    margin-inline: 112px;
  }
`

export const AvaliarCardTitle = styled.h1`

  color: #ffffff;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  
   @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
     width: 412px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.96px;
  }
`
export const AvaliarCardSubtitle = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: 24px;
  color: #ffffff;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;h
    }
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-family: "Poppins";
    font-style: normal;
    font-weight: ${(props) => props.theme.typography.desktop.subtitle1.fontWeight};
    font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
    letter-spacing: ${(props) => props.theme.typography.desktop.subtitle1.spacing};
  }
`

export const AvaliarButton = styled.button`
  padding: 12px 20px;
  width: 220px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 35px;
  color: white;
  cursor: pointer;
  z-index: 1;
  position: relative;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  text-transform: uppercase;
  // &:hover {
  //   background-color: ${(props) => props.theme.colors.secondary.dark};
  // }
  
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 16px 24px;
      width: 276px;
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 20px */
      text-transform: uppercase;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 24px 24px;
    margin-bottom: 0;
  }
`
