import styled from "styled-components";

export const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  margin-top: 20px;
  max-width: 320px;
  gap: 10px;
`;

export const CadastroTitle = styled.span`
  font-size: ${(props) => props.theme.typography.desktop.headline4};
  color: ${(props) => props.theme.colors.primary.normal};
  font-weight: bold;
`;

export const CadastroInfos = styled.span`
  font-size: ${(props) => props.theme.typography.desktop.body2};
`;

export const CadastroLabel = styled.label`
  font-size: ${(props) => props.theme.typography.desktop.body2};
`;

export const StyledInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #f1f2f3;
  width: 322px;
  height: 50px;
  margin-top: 2px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledSendButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.normal};
  color: white;
  border: none;
  border-radius: 10px;
  width: 322px;
  height: 40px;
  margin-top:10px;
`;

export const SecondaryButton = styled.button`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.primary.normal};
  border-radius: 10px;
  width: 322px;
  height: 40px;
  font-weight:600;

  a{
    text-decoration:none;
    color: ${(props) => props.theme.colors.primary.normal};

  }
`;
