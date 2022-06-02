import styled from "styled-components";

type StyledCustomInputProps = {
  error: boolean;
};

export const StyledCustomInput = styled.div<StyledCustomInputProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  label {
    font-size: 16px;
    font-weight: 500;
  }
  input {
    border: 1px solid hsl(0, 0%, 85%);
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
  }
  ${({ error }) =>
    error &&
    `
    input {
      outline: 2px solid hsl(360, 95%, 60%);
    }
  `}
`;
