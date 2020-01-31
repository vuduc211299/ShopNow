import React, { Component } from 'react'
import '../../css/navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Popup from 'reactjs-popup'
import CartItem from '../Pages/cart/CartItem'
import TypeScreen from '../common/enviroment.ts'

class NavBar extends Component {
    render() {
        const {cart} = this.props;
        const {params} = this.props;
        const {quantity} = this.props;
        return (
            <div className='navbar'>
                <div className=' container'>
                    <div className='top-sticky row'>
                        <div className='left-top-sticky col-auto'>
                            Your Shop
                        </div>
                        <ul className='list-inline col-auto ml-auto'>
                            <li className='list-inline-item txt'>
                                <Popup
                                    trigger={
                                        <i className='fa'>&#xf0f3;</i>
                                    }
                                    position="bottom center"
                                    on="hover"
                                >
                                    No notifications
                                </Popup>
                            </li>
                            <li className='list-inline-item ml-3'>
                                <i className="fa">&#xf059;</i>
                            </li>
                            <li className='list-inline-item ml-3'>
                                Login
                            </li>
                        </ul>
                    </div>
                    <div className='logo-search-cart row'>
                        <div className='logo col-3'>
                            <Link to="/">
                                <i className="fa">
                                    &#xf270;
                                </i>
                            </Link>
                        </div>
                        <form className='form-inline col-6 justify-content-between'>
                            <input className="form-search mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn-search my-2 my-sm-0 " type="submit">Search</button>
                        </form>
                        {
                            (params !== '/cart') ? (
                                <div className='logo-cart col-3'>
                                    <div>
                                        <Popup
                                            trigger={<i class="fa">&#xf07a;</i>}
                                            position="bottom center"
                                            on="hover"
                                        >
                                            {
                                                cart.length ? cart.map((cartItem, index) => 
                                                {
                                                    return (
                                                            <div>
                                                                <CartItem type={TypeScreen.POP_UP} cartItem={cartItem} indexItem={index}/>
                                                            </div>
                                                        )
                                                }) : (
                                                    <div className="txt cart-txt d-flex justify-content-center">
                                                        No product in cart
                                                    </div>
                                                )
                                            }
                                            <Link className="go-to-cart d-flex justify-content-end p-1" to="/cart">
                                                <span>Go to Cart</span>
                                            </Link>
                                        </Popup>
                                        {
                                            quantity ? (
                                                <span class='badge badge-warning' id='lblCartCount'>
                                                    { quantity }
                                                </span>
                                            ) : (
                                                <span></span>
                                            )
                                        }
                                    </div>
                                </div>
                            ) : (
                                <div className="col-3"></div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
        quantity: state.cartReducer.quantity
    }
}

export default connect(mapStateToProps, null)(NavBar)
