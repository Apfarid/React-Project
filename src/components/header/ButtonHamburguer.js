import React, { Component} from 'react'
import './style.css'

class ButtonHamburguer extends Component {

    handlChange(){
       const corret = this.state.active
        this.setState({
            active: !corret
        })
        
    }

    render(){
        return(
            <button onClick={this.props.onClick}>
                <i className="fas fa-bars"></i>
            </button>
        )
    }

}

export default ButtonHamburguer