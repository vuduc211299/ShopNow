import React, {Component} from 'react'
import '../../css/navbar-seller.css'
import {Link} from 'react-router-dom'
import history from '../common/history'
import {connect} from 'react-redux'
import {shopProfileAction} from '../../actions/shop/shopAction'

class Navbar extends Component {
    componentDidMount() {
        const token = localStorage.getItem('token')
        if(!token){
            history.push('/')
        }else {
            this.props.loadProfile()
        }
    }

    render() {
        const user = JSON.parse(localStorage.getItem('user'))
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
                        <span className='ml-2'>{user.name}</span>
                    </div>
                    <div id='notify-seller'>
                        <i className='fa i-seller'>&#xf0f3;</i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProfile: () => dispatch(shopProfileAction()) 
    }
}

export default connect(null, mapDispatchToProps)(Navbar)