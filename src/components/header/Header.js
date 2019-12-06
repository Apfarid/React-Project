import React from 'react'
import ButtonHamburguer from './ButtonHamburguer'
import MenuItem from './MenuItem'
import './style.css';


class Header extends React.Component{
    
    state = {
        active : false
    }

    handleChange = e => {
        const current =  this.state.active
        this.setState({
            active : !current
        })
    }


    render(){       
        
        return (
            <header>
                <a href="">E-commerce</a>
                <ButtonHamburguer
                   onClick={this.handleChange}
                />            
                <nav className= { (this.state.active) ? 'active' : null} >
                    <ul>     
                        {this.props.menu.map( elemento => <MenuItem elemento={elemento}></MenuItem>)}
                    </ul>
                </nav>
                    
            </header>
        )
    }
}
export default Header

