import React, { Component } from 'react'
import NavBar from '../../Header/NavBar'
import Footer from '../../Footer/Footer'
import BackDisplayProduct from '../product/BackDisplayProduct'
import '../../../css/cart.css'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import history from '../../common/history'

class Cart extends Component {
    render() {
        const params = this.props.location.pathname;
        const { cart } = this.props;
        const disableBtnBuy = cart.length > 0 ? false : true;
        const { totalPrice } = this.props;
        return (
            <div className='p-cart'>
                <NavBar params={params}/>
                <div className='p-in-cart-content container'> 
                    {
                        cart.length ? cart.map((cartItem) => 
                        {
                            return <CartItem cartItem={cartItem}/>
                        }
                        ) : (
                            <div>
                                No product in cart
                            </div>
                        ) 
                    }
                    <div className='coupon-btn-buy mt-5 mb-5'>
                        <div className='d-flex justify-content-end'>
                            <label className='mr-2'>Coupon code</label>
                            <input size="10"/>
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            Discount 5 %
                        </div>
                        <div className='d-flex justify-content-end mt-3'>
                            <div className='mr-3 d-flex align-items-center'>
                                { totalPrice } USD
                            </div>
                            <button
                                disabled={disableBtnBuy} 
                                className='btn-common'
                                onClick={() => history.push('/checkout')}
                            > 
                                BUY
                            </button>
                        </div>
                    </div>
                    <BackDisplayProduct/>
                </div>
                <Footer/>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
        totalPrice: state.cartReducer.totalPrice
    }
}

export default connect(mapStateToProps)(Cart)