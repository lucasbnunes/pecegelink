import { styled } from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  min-width: 980px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  border-spacing: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.gray[200]}`};
  border-radius: 8px;
  overflow: hidden;
  table-layout: fixed;
`;

export const StyledTHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray[100]};

  tr th {
    padding: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 500;

    &:first-child {
      width: 100px;
    }
  }
`;

export const StyledTBody = styled.tbody`
  tr {
    cursor: pointer;
    transition: 150ms background ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.gray[50]};
    }

    &:active {
      background: ${({ theme }) => theme.colors.gray[100]};
    }

    & td {
      padding: ${({ theme }) => theme.spacing(4)};
      font-weight: 500;
    }
  }

  tr + tr td {
    border-top: ${({ theme }) => `1px solid ${theme.colors.gray[200]}`};
  }
`;
