import React, { Component } from 'react'
import '../../css/navbar.css'

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
                            <img alt='' src="https://img.icons8.com/ios/50/000000/shopping-bag.png"/>
                        </div>
                        <form className='form-inline col-6 justify-content-between'>
                            <input className="form-search mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-search my-2 my-sm-0 " type="submit">Search</button>
                        </form>
                        <div className='logo-cart col-3'>
                            <img src="https://img.icons8.com/ios-filled/32/000000/shopping-cart.png"/>
                        </div>
                        
                    </div>
                </div>
            </div>

        )
    }
}

export default NavBar
