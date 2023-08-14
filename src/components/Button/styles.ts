import { css, styled } from 'styled-components';

const BaseButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
`;

export const StyledButton = styled(BaseButton)<{
  variant: 'solid' | 'outline' | 'ghost';
  color: 'primary' | 'gray';
}>`
  ${({ theme, color, variant }) =>
    variant === 'solid' &&
    css`
      background-color: ${theme.colors[color][700]};
      color: white;
    `}

  ${({ theme, color, variant }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${theme.colors[color][700]};
      border: 1px solid ${theme.colors[color][700]};
    `}

    ${({ theme, color, variant }) =>
    variant === 'ghost' &&
    css`
      background-color: ${theme.colors[color][50]};
      color: ${theme.colors[color][700]};
    `}
`;
