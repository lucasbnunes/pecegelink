import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: ${({ theme }) => theme.spacing(12)} 0;
`;

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;
