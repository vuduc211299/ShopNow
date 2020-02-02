import React from 'react'
import '../../css/popupitem.css'

const PopUpItem = ({cartItem}) => {
    return (
        <div className='pop-up'>
            <div className="pop-up-content d-flex">
                <div className="pop-up-img">
                    <img src={cartItem.imgUrl} width="45%" height="70%"/>
                </div>
                <div className="pop-up-txt">
                    {cartItem.name}
                </div>
            </div>
        </div>
        
    )
}

export default PopUpItem