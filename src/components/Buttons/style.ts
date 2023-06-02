import styled from "styled-components";

import { IButtonProps } from "./IButtonProps";

export const ButtonEnableSmall = styled.button<IButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  height: ${(props) => props.heigth};
  letter-spacing: ${(props) => props.spacing};
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
`;
