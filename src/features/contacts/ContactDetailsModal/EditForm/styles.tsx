import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(2)};

  fieldset {
    flex: 1 1 200px;
  }
`