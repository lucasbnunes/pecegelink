import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.gray['950']};
    font-family: 'Inter', sans-serif;
  }
`;
