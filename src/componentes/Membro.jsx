import React from 'react'

export default props => 
    <div>
        {props.nome}
        <strong>&nbsp;{props.sobrenome}</strong>
        <p><small>&nbsp;Símbolo: {props.simbolo}</small></p>
    </div>