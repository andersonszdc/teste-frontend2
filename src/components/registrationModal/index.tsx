import React, { useEffect, useState } from "react";
import CustomInput from "../customInput";
import ToggleSwitch from "../toggleSwitch";
import { StyledRegistrationModal, WrapperRegistrationModal } from "./styles";

const RegistrationModal = ({ setPortalIsOpen, employees, setEmployees }) => {
  const [isActive, setIsActive] = useState(false);
  const [dataUser, setDataUser] = useState({
    name: "",
    CPF: "",
    RG: "",
    setor: "",
    cargo: "",
    address: "",
    birthDate: "",
    telephone: "",
    email: "",
    status: isActive,
  });

  const addEmployee = () => {
    setEmployees((employees) => [...employees, dataUser]);
  };

  useEffect(() => {
    console.log(dataUser);
  });

  return (
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
          <button className="btn red">Excluir funcionário</button>
          <div className="action__main">
            <button
              className="btn blue-border"
              onClick={() => setPortalIsOpen(false)}
            >
              Cancelar
            </button>
            <button className="btn full-blue" onClick={addEmployee}>
              Salvar
            </button>
          </div>
        </div>
      </StyledRegistrationModal>
    </WrapperRegistrationModal>
  );
};

export default RegistrationModal;
