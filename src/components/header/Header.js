import React, {useState} from 'react'
import ButtonHamburguer from './ButtonHamburguer'
import './style.css';

const Header = ({menu}) => {

        
    
    
    return (
        <header>
            <a href="">E-commerce</a>
            <ButtonHamburguer
               
            />            
            <nav >
                <ul>     
                    {menu.map( elemento => <MenuItem elemento={elemento}></MenuItem>)}
                </ul>
            </nav>
                
        </header>
    )
}



function MenuItem({elemento}) {
    return <li><i className = {'fa '+ elemento.icon}/> {elemento.nombre}</li>
}

export default Header

