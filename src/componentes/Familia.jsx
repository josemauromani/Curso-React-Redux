import React from 'react'

export default props => 
    <div>
        <h1>Família</h1>
        {/* posso passar uma props específica para o componente filho */}
        {React.cloneElement(props.children,{
            sobrenome: props.sobrenome
        })}
    </div>