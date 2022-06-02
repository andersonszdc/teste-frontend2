import React, { useState } from "react";
import { StyledToggleSwitch, WrapperToggle } from "./styles";

type ToggleSwitchProps = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleSwitch = ({ isActive, setIsActive }: ToggleSwitchProps) => {
  const handleSwitch = () => {
    setIsActive((isActive) => (isActive ? false : true));
  };
  return (
    <WrapperToggle>
      <label className="label">Status</label>
      <div className="actionZone">
        <p className="status">Inativo</p>
        <StyledToggleSwitch isActive={isActive}>
          <label onClick={handleSwitch}>
            <span className="slider"></span>
          </label>
        </StyledToggleSwitch>
        <p className="status">Ativo</p>
      </div>
    </WrapperToggle>
  );
};

export default ToggleSwitch;
