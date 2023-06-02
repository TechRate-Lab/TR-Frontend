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
}) => {
  return (
    <ButtonEnableSmall
      hoverColor={backgroundColor}
      backgroundColor={hoverColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      heigth={heigth}
      spacing={spacing}
    >
      {children}
    </ButtonEnableSmall>
  );
};

export default ButtonGlobal;
