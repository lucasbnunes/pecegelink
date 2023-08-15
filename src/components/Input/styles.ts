import { styled } from 'styled-components';

export const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};

  label {
    font-size: 0.875rem;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.8125rem;
  color: red;
`;

export const InputWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 4px;

  height: 2.5rem;
  padding: 0 ${({ theme }) => theme.spacing(2)};

  overflow: hidden;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  svg {
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus-within {
    outline: 1px solid black;
  }

  input {
    border: none;
    width: 100%;
    height: 100%;

    font-family: inherit;
    font-size: 1rem;
    color: inherit;

    &:focus {
      outline: none;
    }
  }
`;
