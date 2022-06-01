import React, { useState } from "react";
import {
  StyledButton,
  StyledCardEployee,
  StyledCompany,
} from "../styles/pages/company";
import { BsCheckLg } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

const Company = () => {
  return (
    <StyledCompany>
      <header className="header">
        <h1>Funcionários</h1>
        <StyledButton>
          <FiPlusCircle className="icon" />
          Novo funcionário
        </StyledButton>
      </header>
      <section className="list">
        <CardEmployee />
        <CardEmployee />
        <CardEmployee />
      </section>
    </StyledCompany>
  );
};

export default Company;

const CardEmployee = () => {
  const [isClicked, setIsClicked] = useState(false);

  const setCheckbox = () => {
    setIsClicked(isClicked ? false : true);
  };
  return (
    <StyledCardEployee active={isClicked}>
      <div className="checkbox" onClick={setCheckbox}>
        {isClicked && <BsCheckLg className="icon" />}
      </div>
      <p>Kai Castro Lima</p>
      <div>Ativo</div>
      <button>Editar</button>
    </StyledCardEployee>
  );
};
