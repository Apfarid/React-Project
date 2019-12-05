import React, { Component} from 'react'
import './style.css'

class ButtonHamburguer extends Component {

    state = {
        active : false
    }

    handlChange(){
       const corret = this.state.active
        this.setState({
            active: !corret
        })
        
    }

    render(){
        return(
            <button onClick={this.handlChange.bind(this)}>
                <i className="fas fa-bars"></i>
            </button>
        )
    }

}

export default ButtonHamburguer