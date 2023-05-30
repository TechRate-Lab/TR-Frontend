import { ButtonEnableSmall } from "./style";

import { GlobalButtonProps } from "./GlobalButtonProps";

const ButtonGlobal: React.FC<GlobalButtonProps> = ({
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
