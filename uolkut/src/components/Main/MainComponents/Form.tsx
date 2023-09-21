import React from 'react';

import UolCircle from '../../Icons/UolCircle';
import Card from '../../Card/Card';
import Input from '../../StyledComponents/Input';
import ButtonCreate from '../../StyledComponents/ButtonCreate';

import './Form.css';

const Form = (): JSX.Element => {
  const submitFormHandler = (event: React.FormEvent) => {
    console.log(event);
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
            <Input type="email" id="email" placeholder="E-mail" />
            <Input type="password" id="password" placeholder="Senha" />
            <Input type="text" id="name" placeholder="Nome" />
            <div className="inputs">
              <Input type="date" id="birthDate" placeholder="DD/MM/AAAA" />
              <Input type="text" id="profession" placeholder="Profissão" />
            </div>
            <div className="inputs">
              <Input type="text" id="country" placeholder="País" />
              <Input type="text" id="city" placeholder="Cidade" />
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

export default Form;
