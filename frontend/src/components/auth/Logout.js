import React, {Component} from 'react'
import '../../css/login.css'

class Logout extends Component {

    logOut = () => {
        localStorage.removeItem('user');
        window.location.reload()
    }

    render () {
        return (
            <div className="logout">
                <ul className='list-group'>
                    <li className='list-group-item'>My Account</li>
                    <li onClick={this.logOut} className='list-group-item'>Log Out</li>
                </ul>
            </div>
        ) 
    }
}

export default Logout