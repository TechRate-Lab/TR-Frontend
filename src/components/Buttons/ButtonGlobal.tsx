import { ButtonEnableSmall } from "./style";

export interface ButtonProps {
  children: string;
  width:string;
  height: string;
  padding:string;
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  fontWeight?: string;
  fontSize?: string;
  spacing?: string;
  border?: string;
}

const ButtonGlobal: React.FC<ButtonProps> = ({
  backgroundColor,
  hoverColor,
  color,
  children,
  fontWeight,
  fontSize,
  height,
  spacing,
  padding,
  width,
  border
}) => {
  return (
    <ButtonEnableSmall
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      height={height}
      spacing={spacing}
      padding={padding}
      color={color}
      width={width}
      border={border}
    >
      {children}
    </ButtonEnableSmall>
  );
};

export default ButtonGlobal;
