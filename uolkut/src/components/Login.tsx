import React from 'react';
import { Link } from 'react-router-dom';

import UolCircle from './Icons/UolCircle';
import Card from './Card/Card';
import Input from './StyledComponents/Input';
import ButtonCreate from './StyledComponents/ButtonCreate';
import ButtonCreateAlt from './StyledComponents/ButtonCreateAlt';

import './Form.css';
const Login = (): JSX.Element => {
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
          <h2 className="title-header-card">Acesse o UOLkut</h2>
        </div>
        <form onSubmit={submitFormHandler}>
          <div className="form-inputs">
            <Input type="email" id="email" placeholder="E-mail" />
            <Input type="password" id="password" placeholder="Senha" />
            <fieldset className="checkbox__login">
              <label className="checkbox-field">
                Lembrar minha senha
                <input type="checkbox" id="habit1" />
                <span className="checkmark" />
              </label>
            </fieldset>
            <div className="form-actions">
              <Link to="/profile">
                <ButtonCreate type="submit">Entrar na conta</ButtonCreate>
              </Link>
              <Link to="/register">
                <ButtonCreateAlt type="submit">Criar conta</ButtonCreateAlt>
              </Link>
            </div>
          </div>
        </form>

        <Link to="/recover-pass">
          <p id="forgot">Esqueci minha senha</p>
        </Link>
      </Card>
    </section>
  );
};

export default Login;
