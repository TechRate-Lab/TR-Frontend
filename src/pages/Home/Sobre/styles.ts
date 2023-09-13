import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  width: 100%;
`

export const OverlayBg = styled.div`
  background-color: ${(props) => props.theme.colors.primary.light};
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 0px 0px 100px 0px;
  height: 90%;
  z-index: -1;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

export const Content = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
`

export const SobreBoxMain = styled.div`
  width: 60%;
  padding: 5rem 7rem;
  
  display: flex;
  background: ${(props) => props.theme.colors.primary.normal};
  border-radius: 0px 0px 100px 0px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 62.5%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 2rem 5rem;
  }
`

export const SobreBoxMainText = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 20px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`

export const BoxSecondary = styled.div`

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    
  }
`

export const BoxImage = styled.img`
   width: 550px;
   height: 450px;
   position: absolute;
   top: 15%;
   right: 8%;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`

export const SobreBoxMainTitle = styled.h1`
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.headline2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline2.height};
  letter-spacing: ${(props) =>
    props.theme.typography.desktop.headline2.spacing};
`

export const SobreBoxMainParagraph = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: ${(props) => props.theme.typography.desktop.body2.fontWeight};
  font-size: ${(props) => props.theme.typography.desktop.body2.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.body2.height};
  letter-spacing: ${(props) => props.theme.typography.desktop.body2.spacing};
  color: #ffffff;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    
  }
`

export const SobreBoxMainButton = styled.button`
  font-weight: medium;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 100%;
  padding: 18px 24px;
  width: 180px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  margin-top: 60px;
  cursor: pointer;
  // &:hover {
  //   background-color: ${(props) => props.theme.colors.secondary.dark};
  // }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 64px;
  }
`
