//css
import { OutlinedButton } from "./index.styles";

type OutlinedButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const SecondaryButton = ({children, className, onClick, disabled, type }: OutlinedButtonProps) => { 
  return (
    <OutlinedButton className={className} onClick={onClick} disabled={disabled} type={type}>{children}</OutlinedButton>
  );
}

export default SecondaryButton;
export type { OutlinedButtonProps };