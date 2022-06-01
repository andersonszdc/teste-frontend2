import styled from "styled-components";

export const StyledRegistrationModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  background-color: hsl(0, 0%, 100%);
  width: 60%;
  padding: 24px;
  border-radius: 16px;

  .title {
    font-size: 24px;
    font-weight: 500;
  }

  .inputs {
    display: grid;
    gap: 24px;
    grid-template-columns: auto auto;
  }

  .action {
    display: flex;
    justify-content: space-between;
  }

  .action__main {
    display: flex;
    gap: 16px;
  }

  .btn {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.2s ease-out;
  }

  .btn.red {
    border: 2px solid hsl(360, 100%, 50%);
    color: hsl(360, 100%, 50%);

    :hover {
      border-color: hsla(360, 100%, 50%, 40%);
      color: hsla(360, 100%, 50%, 40%);
    }
  }

  .btn.blue-border {
    border: 2px solid hsl(220, 100%, 50%);
    color: hsl(220, 100%, 50%);

    :hover {
      border-color: hsla(220, 100%, 50%, 40%);
      color: hsla(220, 100%, 50%, 40%);
    }
  }

  .btn.full-blue {
    background-color: hsl(220, 100%, 50%);
    color: hsl(0, 0%, 100%);

    :hover {
      background-color: hsla(220, 100%, 50%, 40%);
    }
  }
`;

export const WrapperRegistrationModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 90%, 60%);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;
`;
