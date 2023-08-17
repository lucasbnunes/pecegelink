import { css, styled } from 'styled-components';

export const SortButton = styled.button<{ active: boolean }>`
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.gray[600]};
  background: none;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};

  /* Targets hover but not on touch devices */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary[600]};
      color: ${({ theme }) => theme.colors.primary[800]};
    }
  }

  ${({ active }) =>
    active &&
    css`
      border-color: ${({ theme }) => theme.colors.primary[600]};
      color: ${({ theme }) => theme.colors.primary[800]};
    `}
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap-reverse;

  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;
