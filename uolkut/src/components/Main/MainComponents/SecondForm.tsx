import React from "react";

import UolCircle from "../../Icons/UolCircle";
import Card from "../../Card/Card";
import Input from "../../StyledComponents/Input";
import ButtonCreate from "../../StyledComponents/ButtonCreate";
import TextArea from "../../StyledComponents/TextArea";

import "./Form.css";

const SecondForm = (): JSX.Element => {
  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <Card>
        <div className="header-card">
          <UolCircle />
          <h2 className="title-header-card">Cadastre-se no UOLkut</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <div className="inputs">
              <TextArea id="selfdesc" placeholder="Quem sou eu" />
              <TextArea id="interests" placeholder="Interesses" />
            </div>
            <Input type="text" id="musics" placeholder="Músicas Favoritas" />
            <Input type="text" id="movies" placeholder="Filmes Favoritos" />

            <div className="input__checkbox">
              <fieldset className="checkbox">
                <legend>Hábitos:</legend>
                <label className="checkbox-field">
                  Fumo
                  <input type="checkbox" id="habit1" />
                  <span className="checkmark" />
                </label>
                <label className="checkbox-field">
                  Bebida
                  <input type="checkbox" id="habit2" />
                  <span className="checkmark" />
                </label>
              </fieldset>
              <Input type="number" id="kids" placeholder="Filhos" />
            </div>
          </div>

          <div className="form-actions">
            <ButtonCreate type="submit">Criar conta</ButtonCreate>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default SecondForm;
