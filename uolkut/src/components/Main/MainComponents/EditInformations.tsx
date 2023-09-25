import React from "react";

import UolCircle from "../../Icons/UolCircle";
import Card from "../../Card/Card";
import Input from "../../StyledComponents/Input";
import ButtonCreate from "../../StyledComponents/ButtonCreate";
import "./EditInformation.css";
import Select from "../../StyledComponents/Select";
import ProfilePicture from "../../../assets/images/bg (1).png";

const EditInformation = (): JSX.Element => {
  const submitFormHandler = (event: React.FormEvent) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="editions">
        <div className="image-profile">
          <Card>
            <img src={ProfilePicture} alt="Profile" />
          </Card>
        </div>
        <Card>
          <div className="edits">
            <div className="header-card">
              <UolCircle />
              <h2 className="title-header-card">Editar Informações</h2>
            </div>
            <form onSubmit={submitFormHandler}>
              <div className="form-inputs">
                <div className="inputs_">
                  <Input type="text" id="profession" placeholder="Profissão" />
                  <Select />
                </div>
                <div className="inputs_">
                  <Input type="text" id="name" placeholder="Nome" />
                  <Input type="date" id="birthDate" placeholder="DD/MM/AAAA" />
                </div>
                <div className="inputs">
                  <Input type="text" id="country" placeholder="País" />
                  <Input type="text" id="city" placeholder="Cidade" />
                </div>
                <div className="inputs">
                  <Input type="password" id="password" placeholder="Senha" />
                  <Input
                    type="password"
                    id="repet-password"
                    placeholder="Repetir senha"
                  />
                </div>
              </div>
              <div className="form-actions">
                <ButtonCreate type="submit">Salvar</ButtonCreate>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default EditInformation;
