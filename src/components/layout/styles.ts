import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing(2)}`};
`;
