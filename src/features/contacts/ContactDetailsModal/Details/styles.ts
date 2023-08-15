import { styled } from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  h4 {
    font-size: 1.125rem;
    margin: 0;
  }
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};

  h5 {
    margin: 0;
    font-weight: 500;
    font-size: 1rem;
  }

  & + & {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Separator = styled.hr`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  margin: ${({ theme }) => theme.spacing(4)} 0;
`;
