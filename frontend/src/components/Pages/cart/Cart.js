import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import BackDisplayProduct from '../product/BackDisplayProduct'
import '../../../css/cart.css'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import history from '../../common/history'
import {pricePipe} from '../../common/pricePipe'

class Cart extends Component {
    
    getProductById = (id) => {
        const { products } = this.props;
        const product = products.find(product=> product._id == String(id))
        return product;
    }

    render() {
        const {carts} = this.props;
        let cart = carts.map(item => {
            return {
                ...item,
                product_id : this.getProductById(item.product_id) || {}
            }  
        })
        const disableBtnBuy = cart.length > 0 ? false : true;
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice+= parseInt(item.product_id.price) * parseInt(item.quantityInCart)
        })
        return (
            <div className='p-cart'>
                <div className='p-in-cart-content'>
                    <div className='row-label d-flex txt-label mb-3'>
                        <div id='lb-product'>Product</div>
                        <div id='lb-quantity'>Quantity</div>
                        <div id='lb-price'>Price</div>
                    </div> 
                    {
                        this.props.quantity !== 0 ? cart.map((cartItem, index) => 
                        {
                            return <CartItem cartItem={cartItem} indexItem={index}/>
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
                                <span className='total-price'>{ pricePipe(totalPrice) }</span>$
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
        carts: state.cartReducer.cart,
        products: state.productReducer.products,
        quantity: state.cartReducer.quantity
    }
}

export default connect(mapStateToProps)(Cart)