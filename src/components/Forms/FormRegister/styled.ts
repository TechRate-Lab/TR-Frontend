import styled, { keyframes } from "styled-components";

export const StyledSendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary.normal};
  color: white;
  border: none;
  border-radius: 10px;
  width: 322px;
  height: 40px;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIndicator = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #ffffff;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
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