import { ButtonEnableSmall } from "./style";

export interface ButtonProps {
  children: string;
  width:string;
  heigth: string;
  padding:string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  fontWeight?: string;
  fontSize?: string;
  spacing?: string;
}

const ButtonGlobal: React.FC<ButtonProps> = ({
  backgroundColor,
  hoverColor,
  color,
  children,
  fontWeight,
  fontSize,
  heigth,
  spacing,
  padding,
  width
}) => {
  return (
    <ButtonEnableSmall
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      heigth={heigth}
      spacing={spacing}
      padding={padding}
      color={color}
      width={width}
    >
      {children}
    </ButtonEnableSmall>
  );
};

export default ButtonGlobal;
