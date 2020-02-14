import React, {Component} from 'react'
import Footer from '../../Footer/Footer'
import '../../../css/checkout.css'
import {connect} from 'react-redux'
import CartItem from '../cart/CartItem'
import history from '../../common/history'
import * as constant from '../../../constants/constants'
import Popup from 'reactjs-popup'
import PopUpNotify from '../../common/PopUpNotify'
import {removeAllFromCart} from '../../../actions/cartAction'
import CartEmptyImg from '../../../img/cart_empty.png'

class CheckOut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabledOrder: true,
            btnStatus: 'btn-payment-method',
            orderStatus: 'pending'
        }
    }

    getProductById (id) {
        const { products } = this.props;
        const product = products.find(product=> product._id == String(id))
        return product;
    }

    handleOrder = () => {
        this.setState({
            orderStatus: 'status_success'
        })
        this.props.clearCart()
    }

    selectPaymentMethod = () => {
        this.setState({
            disabledOrder: false,
            btnStatus: 'btn-payment-method-focus'
        })
    }

    render() {
        const { carts } = this.props;
        const { orderStatus } = this.state;
        let cart = carts.map(item => {
            return {
                ...item,
                product_id : this.getProductById(item.product_id) || {}
            }  
        })
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice+= parseInt(item.product_id.price) * item.quantityInCart
        })
        const typeScreen = constant.CHECK_OUT;
        return (
            <div className="ck-container">
                {
                    orderStatus === 'status_success' ? (
                        <PopUpNotify message="Order successfull, please keep your phone on !!!" status={orderStatus}/>
                    ) : (
                        <div>

                        </div>
                    )
                }
                {
                    cart.length ? (
                            <div className="ck-content container pt-3">
                                <div className="rcv-local bg-white p-4 bl-ck">
                                    <div className>
                                        <i className="fa i-map">&#xf041;</i>
                                        <span className='txt-map ml-2'>Reciving location</span>
                                    </div>
                                    <div className='mt-3'>
                                        <span>  
                                            Vũ Đức (+84) 981140978
                                            Hoàng Cả 3, Ân Thi, Thị Trấn Ân Thi, Huyện Ân Thi, Hưng Yên
                                        </span>

                                        <Popup
                                            trigger={<button className='ml-4'>Change</button>}
                                            on="click"
                                            modal
                                        >
                                            Change location
                                        </Popup>
                                    </div>
                                </div>
                                <div className="ck-products bg-white mt-3 bl-ck">
                                    <div>
                                        <div className='mb-3 p-4 d-flex'>
                                            <div className='col-4 list-title'>
                                                Product
                                            </div>
                                            <div className='col-4 txt-list'>
                                                Quantity
                                            </div> 
                                            <div className='col-2 txt-end txt-list'>
                                                Price
                                            </div>
                                            <div className='col-2 txt-end txt-list'>
                                                Total
                                            </div>
                                        </div>
                                        {
                                            cart.length ? cart.map(cartItem => {
                                                return (
                                                    <CartItem cartItem={cartItem} typeScreen={typeScreen}/>
                                                )
                                            }): (
                                                <div></div>
                                            )
                                        }
                                        <div className="msg-trans-method mt-3 d-flex">
                                            <div className="msg-to-seller p-4">
                                                <span>Message: </span>
                                                <input width="30%" size="5"/>
                                            </div>
                                            <div className="trans-method d-flex p-4">
                                                <span className='trans-title'>Transport Company:</span>
                                                <div className='trans-name'>
                                                    J&T Express
                                                </div>
                                                <span className='trans-price txt-end'>38 $</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pay-method-proceed bg-white mt-3 mb-3 bl-ck'>
                                    <div className="pay-method d-flex bd-bot p-4">
                                        <span className='list-title'>Payment method</span>
                                        <div className='ml-1'>
                                            <button disabled={true} className='ml-2 mr-2 btn-payment-disabled'>Banking</button>
                                            <button onClick={this.selectPaymentMethod} className={this.state.btnStatus}>Pay when reciving product</button>
                                        </div>
                                    </div>
                                    <div className="ck-price bd-bot p-4">
                                        <div className='ck-price-i'>
                                            <span>Total Price:</span>
                                            <span className='txt-end' id='total-price'>{totalPrice + 38}</span> $
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end p-4'>
                                        <button
                                            onClick={this.handleOrder}
                                            disabled={this.state.disabledOrder} 
                                            className='btn-common'
                                        >
                                            Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                        <div className="check-out-empty">
                            <img className='img-empty-cart' src={CartEmptyImg}/>
                            <div className='msg-empty-cart mb-3'>
                                Your cart are empty
                            </div>
                            <button 
                                className='btn-common'
                                onClick={()=> {history.push('/')}}
                            >
                                Shop now
                            </button>  
                        </div>
                    )
                }
               
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartReducer.cart,
        products: state.productReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(removeAllFromCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)