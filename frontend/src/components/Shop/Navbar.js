import React, {Component} from 'react'
import '../../css/navbar-seller.css'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-seller'>
                <div className='navbar-container-seller'>
                    <div id='logo'>
                        <Link to="/shop">
                            <i className="fa i-seller">
                                &#xf270;
                            </i>
                        </Link>
                    </div>
                    <div id='txt-seller'>
                        Seller Center
                    </div>
                    <div id='user-seller'>
                        <i className='fa i-seller'>&#xf2bd;</i>
                        <span className='ml-2'>Duc vu</span>
                    </div>
                    <div id='notify-seller'>
                        <i className='fa i-seller'>&#xf0f3;</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar