"use client";

//css
import StyledButton from "./index.styles";

type ButtonProps = {
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, className, onClick, disabled, type }: ButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled} type={type} >
      {children}
    </StyledButton>
  );
};

export default Button;
