import styled from "styled-components";

export const StyledSendButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.normal};
  color: white;
  border: none;
  border-radius: 10px;
  width: 322px;
  height: 40px;
  margin-top:10px;
  cursor: pointer;

`;

export const SecondaryButton = styled.button`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.primary.normal};
  border-radius: 10px;
  width: 322px;
  height: 40px;
  font-weight:600;
  cursor: pointer;


  a{
    text-decoration:none;
    color: ${(props) => props.theme.colors.primary.normal};

  }
`;

export const CadastroLabel = styled.label`
  font-size: ${(props) => props.theme.typography.desktop.body2};
`;