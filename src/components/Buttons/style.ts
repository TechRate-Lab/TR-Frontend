import styled from "styled-components";
import { ButtonProps } from "./ButtonGlobal";

export const ButtonEnableSmall = styled.button<ButtonProps>`
  width:${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};

  color:${(props) => props.color || props.theme.colors.white};
  background-color: ${(props) => props.backgroundColor || props.theme.colors.secondary.normal};

  font-size: ${(props) => props.fontSize || props.theme.buttons.extraLarge.fontSize};
  font-weight: ${(props) => props.fontWeight || props.theme.buttons.extraLarge.fontWeight};
  letter-spacing: ${(props) => props.spacing || props.theme.buttons.extraLarge.spacing};

  border-radius: 8px;
  border: ${(props) => props.border || 'none'};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 151px;
    height: 40px;
    font-size: ${(props) => props.theme.buttons.medium.fontSize};
  }
`;
