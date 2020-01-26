import React from 'react'

export default function filhosComponentesProps(props){
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, {
            ...props
        })
    })
}