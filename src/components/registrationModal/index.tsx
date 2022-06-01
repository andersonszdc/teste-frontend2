import React from "react";
import CustomInput from "../customInput";
import { StyledRegistrationModal, WrapperRegistrationModal } from "./styles";

const RegistrationModal = () => {
  return (
    <WrapperRegistrationModal>
      <StyledRegistrationModal>
        <h1 className="title">Cadastro de funcionário</h1>
        <div className="inputs">
          <CustomInput label="Nome" placeholder="Kai Castro Lima" />
          <CustomInput label="Data de nascimento" placeholder="01/01/2000" />
          <CustomInput label="Telefone" placeholder="(21) 98765-4321" />
          <CustomInput label="Email" placeholder="kai@mail.com" />
          <CustomInput label="CPF" placeholder="123.456.789-00" />
          <CustomInput label="RG" placeholder="12.345.678-9" />
          <CustomInput label="Setor" placeholder="Sustentação" />
          <CustomInput label="Cargo" placeholder="Analista de sistemas" />
          <CustomInput label="Endereço" placeholder="Av. Lúcio Costa" />
        </div>
        <div className="action">
          <button className="btn red">Excluir funcionário</button>
          <div className="action__main">
            <button className="btn blue-border">Cancelar</button>
            <button className="btn full-blue">Salvar</button>
          </div>
        </div>
      </StyledRegistrationModal>
    </WrapperRegistrationModal>
  );
};

export default RegistrationModal;
