import Icon from "@/components/Icon";

//css
import { StyledIconButton } from "./index.styles";

type IconButtonProps = {
  children: React.ReactNode | string;
  iconSrc: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  iconPosition?: "left" | "right";
};

const IconButton = ({
  children,
  disabled,
  onClick,
  className,
  iconClassName,
  type,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  iconPosition = "left",
}: IconButtonProps) => {
  return (
    <StyledIconButton disabled={disabled} type={type} onClick={onClick} className={className}>
      {iconPosition === "left" && <Icon src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} className={iconClassName} />}
      {children}
      {iconPosition === "right" && <Icon src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} className={iconClassName} />}
    </StyledIconButton>
  );
};

export default IconButton;
