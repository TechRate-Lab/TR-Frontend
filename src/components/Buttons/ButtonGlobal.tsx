import { ButtonEnableSmall } from "./style";

import { IButtonProps } from "./IButtonProps";
const ButtonGlobal: React.FC<IButtonProps> = ({
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
      hoverColor={backgroundColor}
      backgroundColor={hoverColor}
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
