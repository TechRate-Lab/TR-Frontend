import styled from 'styled-components'
import background from '../../../assets/homeBackground.png'

export const Container = styled.section`
  position: relative;
  padding: 0 5rem 3rem;
  &::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    opacity: 0.4;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 100%;
    padding: 40px 24px;
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

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 550px;
  }
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary.normal};

  font-size: ${props => props.theme.typography.desktop.headline1.fontSize};
  font-weight: ${(props) => props.theme.typography.desktop.headline1.fontWeight};
  letter-spacing: ${(props) => props.theme.typography.desktop.headline1.spacing};;
  
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.96px;
    padding-top: 16px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    color: red;
    font-size: ${(props) => props.theme.typography.mobile.headline1.fontSize};
    line-height: ${(props) => props.theme.typography.mobile.headline1.height};
  }
`

export const SubTitle = styled.span`
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
    max-width: 100%;
    color: ${(props) => props.theme.colors.grey.darker};
    font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
    line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
    font-weight: ${(props) => props.theme.typography.desktop.subtitle1.fontWeight};
  }
`

export const HeroImage = styled.img`
  width: 615px;
  height: 400px;
  object-fit: cover; 
  
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: block;
    width: 400px;
    height: 238px;
  }  

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`
