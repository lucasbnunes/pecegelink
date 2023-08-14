import { styled } from 'styled-components';

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledLi = styled.li`
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 4px;
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
  }

  & + li {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ContactId = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ContactName = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
`;
