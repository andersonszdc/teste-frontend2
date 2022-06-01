import React, { useState } from "react";
import {
  StyledButton,
  StyledCardEployee,
  StyledCompany,
} from "../styles/pages/company";
import { BsCheckLg } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import BackButton from "../components/backButton";
import Link from "next/link";

const Company = () => {
  return (
    <StyledCompany>
      <header className="header">
        <div className="header__left">
          <Link passHref href="/">
            <a>
              <BackButton />
            </a>
          </Link>
          <h1>Funcionários</h1>
        </div>
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
      <button className="btn__edit">Editar</button>
    </StyledCardEployee>
  );
};
