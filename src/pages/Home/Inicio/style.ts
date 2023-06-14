import styled from "styled-components";
import stars from "../../../assets/interactive-rating-UI-element.png";
import background from '../../../assets/homeBackground.png'
export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image:url(${background});
    background-size: cover;
    opacity: 0.4;
  }
`;

export const Call = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  gap: 20px;
`;

export const CallTitle = styled.span`
  color: ${(props) => props.theme.colors.secondary.normal};
  font-size: ${(props) => props.theme.typography.desktop.headline1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.headline1.height};
  font-weight: ${(props) =>
    props.theme.typography.desktop.headline1.fontWeight};
`;

export const CallSubTitle = styled.span`
  width: 100%;
  color: ${(props) => props.theme.colors.grey.darker};
  font-size: ${(props) => props.theme.typography.desktop.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.desktop.subtitle1.height};
  font-weight: ${(props) =>
    props.theme.typography.desktop.subtitle1.fontWeight};
`;

export const HeroSection = styled.div`
  position: relative;
  width: 461.6px;
  height: 357.22px;
`;

export const RetangularTop = styled.div`
  position: absolute;
  width: 462.89px;
  height: 357.22px;
  top: -10%;
  left: -5%;

  background: ${(props) => props.theme.colors.secondary.normal};
  border-radius: 90px 8px 8px 8px;
`;

export const RetangularBottom = styled.div`
  position: absolute;
  width: 462.89px;
  height: 357.22px;
  bottom: -10%;
  left: 5%;

  background: ${(props) => props.theme.colors.primary.normal};
  border-radius: 90px 8px;
`;

export const StarsUp = styled.div`
  position: absolute;
  width: 330px;
  height: 100px;
  right: -22%;
  top: -5%;
  z-index: 10;
  background: url(${stars});
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.5));
  border-radius: 8px;
`;

export const StarsDown = styled.div`
  position: absolute;
  width: 330px;
  height: 100px;
  left: -22%;
  bottom: 30px;
  z-index: 10;
  background: url(${stars});
  filter: drop-shadow(0px 20px 20px rgba(0, 0, 0, 0.5));
  border-radius: 8px;
`;

export const HeroImage = styled.img`
  width: 461.6px;
  height: 357.22px;
  z-index: 2;
  position: absolute;
`;
