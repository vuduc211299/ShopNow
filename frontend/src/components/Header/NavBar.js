import React, { Component } from 'react'
import '../../css/navbar.css'
import CartLogo from '../../icons/cart.svg'

class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className=' container'>
                    <div className='top-sticky row'>
                        <div className='left-top-sticky col-auto'>
                            Your Shop
                        </div>
                        <ul className='list-inline col-auto ml-auto'>
                            <li className='list-inline-item'>Notification</li>
                            <li className='list-inline-item ml-3'>Help</li>
                            <li className='list-inline-item ml-3'>Login</li>
                        </ul>
                    </div>
                    <div className='logo-search-cart row'>
                        <div className='logo-shopnow col-3'>
                            SHOP NOW
                        </div>
                        <form className='form-inline col-7 justify-content-between'>
                            <input className="form-search mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-search my-2 my-sm-0 " type="submit">Search</button>
                        </form>
                        <div className='cart-aws col-2'>
                            CartLogo
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default NavBar
