import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import '../../../css/cart.css'
import CartItem from './CartItem'
import { connect } from 'react-redux'
import history from '../../common/history'
import {pricePipe} from '../../common/pricePipe'
import NavBar from '../../Header/NavBar'
import {productAction} from '../../../actions/productAction'

class Cart extends Component {
    
    getProductById = (id) => {
        const { products } = this.props;
        const product = products.find(product=> product._id == String(id))
        return product;
    }

    componentDidMount(){
        this.props.loadAllProduct()
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
            let priceAfterDiscount = Math.floor(parseInt(item.product_id.price) * (100 - parseInt(item.product_id.discount)) / 100)
            totalPrice+= priceAfterDiscount * parseInt(item.quantityInCart)
        })
        return (
            <div>
                <NavBar/>
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
                </div>
                <Footer/>
                </div> 
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

const mapDispatchToProps = (dispatch) => {
    return {
        loadAllProduct: () => dispatch(productAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)