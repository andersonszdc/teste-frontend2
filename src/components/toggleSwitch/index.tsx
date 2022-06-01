import React, { useState } from "react";
import { StyledToggleSwitch, WrapperToggle } from "./styles";

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <WrapperToggle>
      <label className="label">Status</label>
      <div className="actionZone">
        <p className="status">Inativo</p>
        <StyledToggleSwitch isActive={isActive}>
          <label onClick={() => setIsActive(isActive ? false : true)}>
            <span className="slider"></span>
          </label>
        </StyledToggleSwitch>
        <p className="status">Ativo</p>
      </div>
    </WrapperToggle>
  );
};

export default ToggleSwitch;
