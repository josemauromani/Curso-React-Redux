import React from "react";

export default props => (
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.calculo}</h2>
    <h3>{Math.random()}</h3>
  </div>
);

// function primeiro() {
//   return <h1>Primeiro Componente</h1>;
// }
//export default primeiro;
