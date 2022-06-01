import styled from "styled-components";

type StyledCardEmployeeProps = {
  active: boolean;
};

export const StyledCompany = styled.main`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
  }

  .header__left {
    display: flex;
    gap: 24px;
    align-items: center;
  }
`;

export const StyledCardEmployee = styled.div<StyledCardEmployeeProps>`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  padding: 16px 24px;
  border-radius: 8px;
  transition: 0.3s ease-out;

  .left {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }

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
  padding: 12px 24px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s ease-out;

  .icon {
    width: 24px;
    height: 24px;
  }

  :hover {
    background-color: hsla(220, 100%, 50%, 50%);
  }
`;
