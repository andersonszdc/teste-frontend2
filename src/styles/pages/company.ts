import styled from "styled-components";

type StyledCardEployeeProps = {
  active: boolean;
};

export const StyledCompany = styled.main`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
  }
`;

export const StyledCardEployee = styled.div<StyledCardEployeeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 8px;
  transition: 0.3s ease-out;

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid hsla(0, 0%, 0%, 25%);
    cursor: pointer;
    transition: 0.3s ease-out;
    color: white;
  }

  .btn__edit {
    border: none;
    background-color: transparent;
    color: hsla(220, 100%, 50%);
    cursor: pointer;

    font-size: 14px;
    font-weight: 500;
  }

  ${({ active }) =>
    active &&
    `
    background-color: #d2e1fe;

    .checkbox {
        background-color: blue;
      }
  `}
`;

export const StyledButton = styled.button`
  display: flex;
  gap: 16px;
  align-items: center;
  background-color: hsla(220, 100%, 50%);
  color: #ffffff;
  padding: 8px 24px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.2s ease-out;

  .icon {
    width: 24px;
    height: 24px;
  }

  :hover {
    background-color: hsla(220, 100%, 50%, 50%);
  }
`;
