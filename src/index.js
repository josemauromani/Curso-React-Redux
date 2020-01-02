import React from "react";
import ReactDOM from "react-dom";
import PrimeiroComponente from "./componentes/PrimeiroComponente";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <PrimeiroComponente valor="1"></PrimeiroComponente>
    <PrimeiroComponente valor="2"></PrimeiroComponente>
    <PrimeiroComponente valor="3" calculo={Math.pow(2, 3)}></PrimeiroComponente>
  </div>,
  elemento
);
