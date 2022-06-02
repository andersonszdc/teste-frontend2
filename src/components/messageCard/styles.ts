import styled from "styled-components";

export const StyledMessageCard = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 16px;
  border-radius: 12px;
  background-color: hsl(15, 60%, 90%);
  border: 2px solid hsl(15, 75%, 80%);

  .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .wrapper-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(0, 95%, 65%);
    padding: 8px;
    border-radius: 50%;
  }

  .icon {
    width: 24px;
    height: 24px;
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 95%, 65%);
    border-radius: 50%;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 500;
  }

  .btn-close {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .btn-close__icon {
    font-size: 1.5rem;
  }
`;
