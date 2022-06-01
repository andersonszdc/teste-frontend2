import styled from "styled-components";

type ToggleSwitchProps = {
  isActive: boolean;
};

export const WrapperToggle = styled.div`
  .actionZone {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 35px;
    margin-top: 16px;
  }

  .label {
    font-size: 16px;
    font-weight: 500;
  }

  .status {
    font-size: 16px;
    font-weight: 500;
    color: hsla(0, 0%, 0%, 60%);
  }
`;

export const StyledToggleSwitch = styled.div<ToggleSwitchProps>`
  position: relative;
  width: 48px;
  height: 28px;
  label {
    position: absolute;
    width: 48px;
    height: 28px;
    background-color: hsl(0, 0%, 65%);
    border-radius: 14px;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    transition: 0.3s;
  }

  .slider::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: hsl(0, 0%, 100%);
    transition: 0.3s;
  }

  ${({ isActive }) =>
    isActive &&
    `
    .slider {
        background-color: hsl(220, 100%, 50%);
      }

    .slider::before {
        transform: translateX(20px);
    }
  `}
`;
