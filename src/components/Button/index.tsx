import { StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid' | 'ghost';
  color?: 'primary' | 'gray';
}

export function Button({ variant = 'solid', color = 'primary', children, ...props }: ButtonProps) {
  return (
    <StyledButton variant={variant} color={color} {...props}>
      {children}
    </StyledButton>
  )
}