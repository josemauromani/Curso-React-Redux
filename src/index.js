import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/PrimeiroComponente";
import { CompA,CompB as B } from './componentes/DoisComponentes'

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <CompA valor="Olá eu sou o A"></CompA>
    <B valor="B na área"></B>
    {/* <PrimeiroComponente valor="1"></PrimeiroComponente> */}
    {/* <PrimeiroComponente valor="2"></PrimeiroComponente> */}
    {/* <PrimeiroComponente valor="3" calculo={Math.pow(2, 3)}></PrimeiroComponente> */}
  </div>,
  elemento
);
