import React from 'react'
import Popup from 'reactjs-popup'
import '../../../src/css/popUpNotify.css'

const PopUpNotify = ({message, status}) => {
    return (
        <Popup
            open={true}
            modal
        >
            <div className='notify-content'>
                <div>
                    {
                        status === 'status_success' ? (
                            <i className="fa i-verified">&#xf058;</i>
                        ) : (
                            <i className="fa i-verified">&#xf071;</i>
                        )
                    }
                </div>
                <div className='pt-3 txt-center'>{message}</div>
            </div>
        </Popup>
    )
}

export default PopUpNotify