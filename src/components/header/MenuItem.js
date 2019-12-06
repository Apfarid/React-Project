import React from 'react';

const MenuItem = ({elemento}) => {
    return <li><i className = {'fa '+ elemento.icon}/> {elemento.nombre}</li>
}

export default MenuItem