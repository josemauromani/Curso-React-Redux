import React from "react";
import ReactDOM from "react-dom";
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Familia sobrenome="Mani" simbolo="cruz">
      <Membro nome="José Mauro Morais"></Membro>
    </Familia>
  </div>,
  elemento
);
