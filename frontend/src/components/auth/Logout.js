import React, {Component} from 'react'
import '../../css/login.css'
import {Link} from 'react-router-dom'

class Logout extends Component {

    logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        window.location.replace('/')
    }

    render () {
        return (
            <div className="logout">
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <Link to='/user/profile'>
                            My Account
                        </Link>
                    </li>
                    <li onClick={this.logOut} className='list-group-item'>Log Out</li>
                </ul>
            </div>
        ) 
    }
}

export default Logout