import { InputFormProps } from "./props";
import { Field } from "./styled";

export default function InputForm({
  name,
  type,
  placeholder,
  label,
  inputType,
  ...rest
}: InputFormProps) {
  return (
    <>
      <Field
        as={type as keyof JSX.IntrinsicElements} 
        name={name}
        type={inputType}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
