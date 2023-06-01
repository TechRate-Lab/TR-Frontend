import { ButtonEnableSmall } from "./style";

import { IButtonProps } from "./IButtonProps";
const ButtonGlobal: React.FC<IButtonProps> = ({
  backgroundColor,
  hoverColor,
  color,
}) => {
  return (
    <ButtonEnableSmall
      hoverColor={backgroundColor}
      backgroundColor={hoverColor}
    />
  );
};

export default ButtonGlobal;
