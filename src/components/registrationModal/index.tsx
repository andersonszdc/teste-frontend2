import React, { useEffect, useState } from "react";
import Portal from "../../HOC/Portal";
import CustomInput from "../customInput";
import MessageCard from "../messageCard";
import ToggleSwitch from "../toggleSwitch";
import { StyledRegistrationModal, WrapperRegistrationModal } from "./styles";

type RegistrationModalProps = {
  setPortalIsOpen: any;
  setEmployees: any;
  employee?: any;
};

const RegistrationModal = ({
  setPortalIsOpen,
  setEmployees,
  employee,
}: RegistrationModalProps) => {
  const [isActive, setIsActive] = useState(employee ? employee.status : false);
  const [openErrorMessage, setOpenErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataUser, setDataUser] = useState({
    name: employee ? employee.name : "",
    CPF: employee ? employee.CPF : "",
    RG: employee ? employee.RG : "",
    setor: employee ? employee.setor : "",
    cargo: employee ? employee.cargo : "",
    address: employee ? employee.address : "",
    birthDate: employee ? employee.birthDate : "",
    telephone: employee ? employee.telephone : "",
    email: employee ? employee.email : "",
    status: isActive,
  });

  useEffect(() => {
    setDataUser((user) => ({ ...user, status: isActive }));
  }, [setDataUser, isActive]);

  const checkFields = (employee = dataUser) => {
    const {
      name,
      birthDate,
      telephone,
      email,
      CPF,
      RG,
      setor,
      cargo,
      address,
    } = employee;
    if (name && birthDate && CPF && RG && setor && cargo && address) {
      if (telephone || email) {
        return true;
      } else {
        setErrorMessage("Preencha, pelo menos, o email ou telefone!");
        return false;
      }
    } else {
      setErrorMessage("Preencha os campos obrigatórios!");
      return false;
    }
  };

  const addEmployee = () => {
    if (checkFields()) {
      setEmployees((employees) => [...employees, dataUser]);
      setPortalIsOpen(false);
    } else {
      setOpenErrorMessage(true);
    }
  };

  const updateEmployee = () => {
    if (checkFields()) {
      setEmployees((employees) => {
        const newList = employees.map((emp) => {
          if (emp.name === employee.name) return dataUser;

          return emp;
        });

        return [...newList];
      });
      setPortalIsOpen(false);
    } else {
      setOpenErrorMessage(true);
    }
  };

  const clickOnSave = () => {
    employee ? updateEmployee() : addEmployee();
  };

  const deleteUser = () => {
    setEmployees((employees) => {
      const newList = [];
      employees.map((emp) => {
        if (emp.name !== employee.name) {
          newList.push(emp);
        }
      });

      return [...newList];
    });
    setPortalIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenErrorMessage(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [openErrorMessage]);

  return (
    <>
      <WrapperRegistrationModal>
        <StyledRegistrationModal>
          <h1 className="title">Cadastro de funcionário</h1>
          <div className="inputs">
            <CustomInput
              label="Nome"
              placeholder="Kai Castro Lima"
              value={dataUser.name}
              name="name"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="Data de nascimento"
              placeholder="01/01/2000"
              value={dataUser.birthDate}
              name="birthDate"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="Telefone"
              placeholder="(21) 98765-4321"
              value={dataUser.telephone}
              name="telephone"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="Email"
              placeholder="kai@mail.com"
              value={dataUser.email}
              name="email"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="CPF"
              placeholder="123.456.789-00"
              value={dataUser.CPF}
              name="CPF"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="RG"
              placeholder="12.345.678-9"
              value={dataUser.RG}
              name="RG"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="Setor"
              placeholder="Sustentação"
              value={dataUser.setor}
              name="setor"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="Cargo"
              placeholder="Analista de sistemas"
              value={dataUser.cargo}
              name="cargo"
              setDataUser={setDataUser}
            />
            <CustomInput
              label="Endereço"
              placeholder="Av. Lúcio Costa"
              value={dataUser.address}
              name="address"
              setDataUser={setDataUser}
            />
            <ToggleSwitch isActive={isActive} setIsActive={setIsActive} />
          </div>
          <div className="action">
            <div>
              {employee && (
                <button className="btn red" onClick={deleteUser}>
                  Excluir funcionário
                </button>
              )}
            </div>
            <div className="action__main">
              <button
                className="btn blue-border"
                onClick={() => setPortalIsOpen(false)}
              >
                Cancelar
              </button>
              <button className="btn full-blue" onClick={clickOnSave}>
                Salvar
              </button>
            </div>
          </div>
        </StyledRegistrationModal>
      </WrapperRegistrationModal>
      {openErrorMessage ? (
        <Portal>
          <MessageCard errorMessage={errorMessage} />
        </Portal>
      ) : null}
    </>
  );
};

export default RegistrationModal;
