import React from 'react'
import '../../css/popupitem.css'

const PopUpItem = ({cartItem}) => {
    let base64Icon = 'data:image/png/jpeg;base64,';
    return (
        <div className='pop-up'>
            <div className="pop-up-content d-flex">
                <div className="pop-up-img">
                    <img src={base64Icon + cartItem.image} width="45%" height="70%"/>
                </div>
                <div className="pop-up-txt">
                    {cartItem.name}
                </div>
            </div>
        </div>
        
    )
}

export default PopUpItem