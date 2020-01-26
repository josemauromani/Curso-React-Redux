import React from "react";
import ReactDOM from "react-dom";
import Famlia from './componentes/Familia'
import Membro from './componentes/Membro'
import Familia from "./componentes/Familia";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Familia>
      <Membro nome="José Mauro Morais" sobrenome="Mani"></Membro>
      <Membro nome="Isabel Ramos" sobrenome="Mani"></Membro>
    </Familia>
    <Familia>
      <Membro nome="Edvaldo" sobrenome="Ramos"></Membro>
      <Membro nome="Edson" sobrenome="Ramos"></Membro>
    </Familia>
  </div>,
  elemento
);
