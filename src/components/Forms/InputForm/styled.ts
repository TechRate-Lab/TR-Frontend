import styled from "styled-components";
import { Field as FieldComponent } from "formik";

interface StyledFieldProps {
    as: keyof JSX.IntrinsicElements; 
  }



export const Field = styled(FieldComponent)<StyledFieldProps>`
  border: none;
  border-radius: 10px;
  background-color: #f1f2f3;
  width: 322px;
  height: 50px;
  margin-top: 2px;
`;
