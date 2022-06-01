import React from "react";
import { StyledCustomInput } from "./styles";

type CustomInputProps = {
  label: string;
  placeholder: string;
};

const CustomInput = ({ label, placeholder }: CustomInputProps) => {
  return (
    <StyledCustomInput>
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </StyledCustomInput>
  );
};

export default CustomInput;
