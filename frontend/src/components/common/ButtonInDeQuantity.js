import React, { Component } from 'react'
import '../../css/buttonInDe.css'

class ButtonInDeQuantity extends Component {
    render() {
        return (
            <div className='p-in-cart-quantity col-4 d-flex'>
                <div>
                    <input className='input-quantity' size='5' placeholder="0"/>
                </div>
            </div>
        )
    }
}

export default ButtonInDeQuantity
