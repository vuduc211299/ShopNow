import React from 'react'
import '../../css/backMenu.css'
import {Link} from 'react-router-dom'

const BackMenu = () => {
    return (
        <div className='back-menu'>
            <ul className='back-menu-ul'>
                <li>
                    <div className='back-menu-item'>
                        <i className='fa mr-2 nav-item-i'>&#xf044;</i>
                        <span className='nav-item-txt'>Orders</span>
                    </div>
                    <div className='mt-2'>
                        <Link className='nav-sub-item' to='/shop/order'>My Orders</Link>
                    </div>
                </li>
                <li>
                    <div className='back-menu-item'>
                        <i className='fa mr-2 nav-item-i'>&#xf290;</i>
                        <span className='nav-item-txt'>Product</span>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <Link className='nav-sub-item' to='/shop/product/add'>Add product</Link>
                        </div>
                        <div className='mt-2'>
                            <Link className='nav-sub-item' to='/shop/product'>My Product</Link>
                        </div> 
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BackMenu