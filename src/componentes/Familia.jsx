import React from 'react'

export default props => 
    <div>
        <h1>Família</h1>
        {/* cria um clone do objeto props e passa tudo para o filho */}
        {React.cloneElement(props.children,{ ...props })}
    </div>