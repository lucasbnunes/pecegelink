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
      transition: 150ms background-color ease-in;

      &:hover:not(:disabled) {
        background-color: ${theme.colors[color][800]};
      }

      &:disabled {
        cursor: not-allowed;
        background-color: ${theme.colors[color][400]};
      }
    `}

  ${({ theme, color, variant }) =>
    variant === 'outline' &&
    css`
      background-color: transparent;
      color: ${theme.colors[color][700]};
      border: 1px solid ${theme.colors[color][700]};
      transition:
        150ms background-color ease-in,
        150ms border-color ease-in;

      &:hover:not(:disabled) {
        background-color: ${theme.colors[color][50]};
      }

      &:disabled {
        cursor: not-allowed;
        border-color: ${theme.colors[color][400]};
      }
    `}

    ${({ theme, color, variant }) =>
    variant === 'ghost' &&
    css`
      background-color: ${theme.colors[color][50]};
      color: ${theme.colors[color][700]};
      transition:
        150ms background-color ease-in,
        150ms color ease-in;

      &:hover:not(:disabled) {
        background-color: ${theme.colors[color][100]};
        color: ${theme.colors[color][800]};
      }

      &:disabled {
        cursor: not-allowed;
        color: ${theme.colors[color][600]};
      }
    `}
`;
