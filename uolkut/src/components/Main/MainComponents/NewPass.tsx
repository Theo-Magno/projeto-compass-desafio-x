import React from "react";

import UolCircle from "../../Icons/UolCircle";
import Card from "../../Card/Card";
import Input from "../../StyledComponents/Input";
import ButtonCreate from "../../StyledComponents/ButtonCreate";
import ButtonCreateAlt from "../../StyledComponents/ButtonCreateAlt";

import "./Form.css";
const NewPass = (): JSX.Element => {
  const submitFormHandler = (event: React.FormEvent) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <section className="register">
      <div className="image">
        <p>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </p>
      </div>
      <Card>
        <div className="header-card">
          <UolCircle />
          <h2 className="title-header-card">Nova senha</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <Input type="email" id="email" placeholder="E-mail cadastrado" />

            <Input type="password" id="new-pass" placeholder="Nova senha" />
            <Input
              type="password"
              id="confirm-pass"
              placeholder="Confirmar a senha"
            />

            <div className="form-actions">
              <ButtonCreate type="submit">Salvar</ButtonCreate>
            </div>
          </div>
        </form>

        <span className="login-redirection">Lembrou sua Senha?</span>
        {/*Usar Link*/}
        <ButtonCreateAlt type="submit">
          Entrar com as credenciais
        </ButtonCreateAlt>
      </Card>
    </section>
  );
};

export default NewPass;
