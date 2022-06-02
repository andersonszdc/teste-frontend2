import React, { useEffect, useState } from "react";
import {
  StyledButton,
  StyledCardEmployee,
  StyledCompany,
} from "../styles/pages/company";
import { BsCheckLg } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import BackButton from "../components/backButton";
import Link from "next/link";
import Portal from "../HOC/Portal";
import RegistrationModal from "../components/registrationModal";

const Company = ({ databaseEmployees }) => {
  const [portalIsOpen, setPortalIsOpen] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(databaseEmployees);
  }, [databaseEmployees]);

  return (
    <>
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
          <StyledButton onClick={() => setPortalIsOpen(true)}>
            <FiPlusCircle className="icon" />
            Novo funcionário
          </StyledButton>
        </header>
        <section className="list">
          {employees.map((employee: any, index: number) => (
            <CardEmployee
              key={index}
              employee={employee}
              setEmployees={setEmployees}
            />
          ))}
        </section>
      </StyledCompany>
      {portalIsOpen ? (
        <Portal>
          <RegistrationModal
            setEmployees={setEmployees}
            setPortalIsOpen={setPortalIsOpen}
          />
        </Portal>
      ) : null}
    </>
  );
};

export default Company;

const CardEmployee = ({ employee, setEmployees }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [openPortal, setOpenPortal] = useState(false);

  const setCheckbox = () => {
    setIsClicked(isClicked ? false : true);
  };
  return (
    <>
      <StyledCardEmployee active={isClicked}>
        <div className="left">
          <div className="checkbox" onClick={setCheckbox}>
            {isClicked && <BsCheckLg className="icon" />}
          </div>
          <p>{employee.name}</p>
        </div>
        <div>{employee.status ? "Ativo" : "Inativo"}</div>
        <button className="btn__edit" onClick={() => setOpenPortal(true)}>
          Editar
        </button>
      </StyledCardEmployee>
      {openPortal ? (
        <Portal>
          <RegistrationModal
            setPortalIsOpen={setOpenPortal}
            setEmployees={setEmployees}
            employee={employee}
          />
        </Portal>
      ) : null}
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await import("../data/employees.json");
  return {
    paths: res.enterprises.map((enterprise) => ({
      params: {
        company: enterprise.name.toLowerCase(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await import("../data/employees.json");
  const { enterprises } = res;
  const enterprise = enterprises.filter(
    (enterprise) => enterprise.name === (params.company as string).toUpperCase()
  );
  return {
    props: { databaseEmployees: [...enterprise[0].employees] },
  };
};
