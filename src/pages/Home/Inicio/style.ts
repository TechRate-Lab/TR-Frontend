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
    padding: 0 24px;
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
`

export const HeroImage = styled.img`
  width: 614px;
  height: 400px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 400px;
    height: 238px;
  }
`
