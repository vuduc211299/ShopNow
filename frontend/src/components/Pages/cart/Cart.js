import React, { Component } from 'react'
import NavBar from '../../Header/NavBar'
import Footer from '../../Footer/Footer'
import BackDisplayProduct from '../product/BackDisplayProduct'
import '../../../css/cart.css'
import ButtonInDeQuantity from '../../common/ButtonInDeQuantity'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        const { cart } = this.props;
        console.log(cart)
        return (
            <div className='p-cart'>
                <NavBar/>
                <div className='p-in-cart-content container'>
                    {
                        cart.length ? cart.map(cartItem => { 
                            return (
                                <div className='p-in-cart-container d-flex'>
                                    <div className='p-in-cart-name-img col-4'>
                                        <div>
                                            <img src={cartItem.imgUrl} alt='p-in-cart' width='15%' height='60%'/>
                                        </div>
                                        <div>
                                            <span>{cartItem.name}</span>
                                        </div>
                                    </div>
                                    <div className='p-in-cart-price col-1'>
                                        <span>{cartItem.price}</span>
                                    </div>
                                    <ButtonInDeQuantity/>
                                    <div className='p-in-cart-sum-price col-1'>
                                        595.000
                                    </div>
                                    <div className='p-in-cart-exe col-1'>
                                        <button>delete</button>
                                    </div>
                                </div>
                            )
                        }) : (
                            <div>No product in cart</div>
                        )
                    }
                    <div className='coupon-btn-buy mt-5 mb-5'>
                        <div>
                            <label>Coupon code</label>
                            <input size="10"></input>
                        </div>
                        <div>
                            <button> BUY </button>
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
        cart: state.cartReducer.cart
    }
}

export default connect(mapStateToProps)(Cart)