import React from "react";
import { StyledCustomInput } from "./styles";

type CustomInputProps = {
  label: string;
  placeholder: string;
  value: string;
  name: string;
  setDataUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      CPF: string;
      RG: string;
      setor: string;
      cargo: string;
      address: string;
      birthDate: string;
      telephone: string;
      email: string;
      status: boolean;
    }>
  >;
};

const CustomInput = ({
  label,
  placeholder,
  value,
  name,
  setDataUser,
}: CustomInputProps) => {
  const handleChange = (e: any) => {
    setDataUser((employee) => ({
      ...employee,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <StyledCustomInput>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </StyledCustomInput>
  );
};

export default CustomInput;
