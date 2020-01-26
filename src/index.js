import React from "react";
import ReactDOM from "react-dom";
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Familia sobrenome="Mani">
      <Membro nome="José Mauro Morais"></Membro>
      <Membro nome="Érika Ramos"></Membro>
      <Membro nome="Isabel Ramos"></Membro>
      <Membro nome="Sara Ramos"></Membro>
    </Familia>
  </div>,
  elemento
);
