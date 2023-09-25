import React from 'react';

import UolCircle from '../../Icons/UolCircle';
import Card from '../../Card/Card';
import Input from '../../StyledComponents/Input';
import ButtonCreate from '../../StyledComponents/ButtonCreate';
import ButtonCreateAlt from '../../StyledComponents/ButtonCreateAlt';

import './Form.css';
import { Link } from 'react-router-dom';
const RecoverPass = (): JSX.Element => {
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
          <h2 className="title-header-card">Recupere sua senha</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <Input type="email" id="email" placeholder="E-mail cadastrado" />

            <div className="form-actions">
              <Link to="/new-pass">
                <ButtonCreate type="submit">Enviar código</ButtonCreate>
              </Link>
            </div>
          </div>
        </form>

        <Link to="/">
          <span className="login-redirection">Lembrou sua Senha?</span>
        </Link>
        <Link to="/">
          <ButtonCreateAlt type="submit">
            Entrar com as credenciais
          </ButtonCreateAlt>
        </Link>
      </Card>
    </section>
  );
};

export default RecoverPass;
