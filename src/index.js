import React from "react";
import ReactDOM from "react-dom";
import FamiliaMani from "./componentes/FamiliaMani"

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <FamiliaMani sobrenome="Mani"></FamiliaMani>
  </div>,
  elemento
);
