import styled from "styled-components";

import { IButtonProps } from "./IButtonProps";

export const ButtonEnableSmall = styled.button<IButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  width: 79px;
  height: 42px;
  padding: 10px 20px;
  border-radius: 8px;
  border:none;
`;
