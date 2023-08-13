import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, a {
    color: ${({ theme }) => theme.colors.gray['700']};
    font-family: 'Inter', sans-serif;
  }
`;
