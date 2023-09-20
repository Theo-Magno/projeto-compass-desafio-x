import React from "react";
import UolCircle from "./Icons/UolCircle";

const Form = () => {
  const submitFormHandler = (event: React.FormEvent) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <UolCircle />
      <form onSubmit={submitFormHandler}>
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="birthDate">DD/MM/AAAA</label>
          <input type="date" id="birthDate" />

          <label htmlFor="profession">Profissão</label>
          <input type="text" id="profession" />

          <label htmlFor="country">País</label>
          <input type="text" id="country" />

          <label htmlFor="city">Cidade</label>
          <input type="text" id="city" />

          <label htmlFor="relationship">Relacionamento</label>
          <select id="relationship">
            <option value="single">Solteiro(a)</option>
            <option value="married">Casado(a)</option>
            <option value="divorced">Divorciado(a)</option>
            <option value="dating">Namorando</option>
            <option value="worried">Preocupado(a)</option>
          </select>
        </div>

        <div className="formActions">
          <button type="submit">Criar conta</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
