import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <Membro nome="Jose Mauro" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Erika" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Sara" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Isabel" sobrenome={props.sobrenome}></Membro>
    </div>