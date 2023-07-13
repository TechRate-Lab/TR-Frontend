import styled from 'styled-components'
import background from '../../../assets/homeBackground.png'

export const MainSection = styled.section`
  display: grid;
  place-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 40px 24px;
  
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 100%;
    padding: 40px 24px;
  }

  @media screen and (min-width:${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 112px;
    width: 100%;
    height: 36.5vh;
  }
`

export const Call = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Center;
  gap: 20px;
  
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 386px;
  }
`

export const CallTitle = styled.span`
  font-size: ${props => props.theme.typography.mobile.headline1.fontSize};
  color: ${(props) => props.theme.colors.secondary.normal};
  font-weight: ${(props) => props.theme.typography.mobile.headline1.fontWeight};
  
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.96px;
    padding-top: 16px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.typography.desktop.headline1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.headline1.height};
  }
`

export const CallSubTitle = styled.span`
  max-width: 384px;
  font-weight: ${props => props.theme.typography.mobile.headline7.fontWeight};
  font-size: ${props => props.theme.typography.mobile.headline7.fontSize};
  line-height: ${props => props.theme.typography.mobile.headline7.lineHeight};
  

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 110%;
    font-weight: ${props => props.theme.typography.tablet.headline1.fontWeight};
    font-size: ${props => props.theme.typography.tablet.headline1.fontSize};
    line-height: ${props => props.theme.typography.tablet.headline1.lineHeight};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 100%;
    color: ${(props) => props.theme.colors.grey.darker};
    font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
    font-weight: ${(props) =>
            props.theme.typography.desktop.subtitle1.fontWeight};
  }
`

export const HeroImage = styled.img`
  display: none;
  
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
    width: 400px;
    height: 238px;
  }
  

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 614px;
    height: 400px;
  }
`

export const Hero = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
`
