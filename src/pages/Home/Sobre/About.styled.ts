import styled from 'styled-components'

export const SobreSection = styled.section`
  position: relative;
`

export const OverlayBg = styled.div`
  background-color: #6AEDAB;
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 0px 0px 100px 0px;
  height: 700px;
  z-index: -1;
`

export const SobreBoxMain = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-left: 20px;
  padding-bottom: 40px;
  background: ${(props) => props.theme.colors.secondary.normal};
  border-radius: 0px 0px 100px 0px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 75%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding-left: 112px;
  }
`

export const SobreBoxMainText = styled.div`
  max-width: 388px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 400px;
  }
`

export const BoxSecondary = styled.div`

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    
  }
`

export const BoxImage = styled.img`
  position: absolute;

  display: none;
 
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 350px;
    display: block;
    right: 0;
    top: 30%;
    margin-right: 20px;
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 600px;
    display: block;
    right: 0;
    top: 20%;
    margin-right: 290px;
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
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary.dark};
  }
`
