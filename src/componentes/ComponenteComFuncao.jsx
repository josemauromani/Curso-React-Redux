import React from 'react'

const aprovados = ['José','Érika','Sara','Isabel']

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}