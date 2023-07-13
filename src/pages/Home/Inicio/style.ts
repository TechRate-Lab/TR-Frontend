import styled from 'styled-components'
import background from '../../../assets/homeBackground.png'

export const MainSection = styled.section`
  display: grid;
  place-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 0 112px;
  width: 100%;
  height: 36.5vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${background});
    background-size: cover;
    opacity: 0.4;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 100%;
    padding: 40px 24px;

    &::after {
      width: 1150px;
      height: 380px;
      transform: translate(-12%, -12%);
      opacity: 0.5;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 100%;
    padding: 40px 24px;
    
    &::after {
      width: 780px;
      height: 350px;
      transform: translate(-23%, -15%);
      opacity: 0.7;
    }
  }
`

export const Call = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Center;
  gap: 20px;
  
  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 386px;
  }
`

export const CallTitle = styled.span`
  color: ${(props) => props.theme.colors.secondary.normal};
  font-size: ${(props) => props.theme.typography.desktop.headline1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline1.height};
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline1.fontWeight};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.96px;
    padding-top: 16px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.typography.mobile.headline1.fontSize};
  }
`

export const CallSubTitle = styled.span`
  width: 100%;
  color: ${(props) => props.theme.colors.grey.darker};
  font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle1.fontWeight};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 110%;
    font-weight: ${props => props.theme.typography.tablet.headline1.fontWeight};
    font-size: ${props => props.theme.typography.tablet.headline1.fontSize};
    line-height: ${props => props.theme.typography.tablet.headline1.lineHeight};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    font-weight: ${props => props.theme.typography.tablet.headline1.fontWeight};
    font-size: ${props => props.theme.typography.tablet.headline1.fontSize};
    line-height: ${props => props.theme.typography.tablet.headline1.lineHeight};
  }
`

export const HeroImage = styled.img`
  width: 614px;
  height: 400px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 400px;
    height: 238px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`
