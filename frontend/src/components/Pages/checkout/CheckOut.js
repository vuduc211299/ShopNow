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
import {pricePipe} from '../../../components/common/pricePipe'
import NavBar from '../../Header/NavBar'
import { productAction } from '../../../actions/productAction'
import { createOrderAction } from '../../../actions/orderAction'
class CheckOut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabledOrder: true,
            btnStatus: 'btn-payment-method'
        }
    }

    componentDidMount() {
        this.props.loadProduct()
    }

    getProductById (id) {
        const { products } = this.props;
        const product = products.find(product=> product._id == String(id))
        return product;
    }

    handleOrder = () => {
        const {userProfile, carts} = this.props
        if(userProfile.address && userProfile.phone) {
            // create order request
            carts.forEach(item => {
                const product = this.getProductById(item.product_id)
                const data = {
                    order_from: userProfile._id,
                    order_to: product.owner_id,
                    status: 'pending',
                    product_id: item.product_id,
                    quantity: item.quantityInCart
                }
                this.props.createOrder(data)
            })
            this.props.clearCart()
        }
    }

    selectPaymentMethod = () => {
        this.setState({
            disabledOrder: false,
            btnStatus: 'btn-payment-method-focus'
        })
    }

    changeInfo = () => {
        history.push('/user/profile');
    }

    render() {
        const { carts, userProfile, orderStatus } = this.props;
        let cart = carts.map(item => {
            return {
                ...item,
                product_id : this.getProductById(item.product_id) || {}
            }  
        })
        let totalPrice = 0;
        cart.forEach(item => {
            let priceAfterDiscount = Math.floor(parseInt(item.product_id.price) * (100 - parseInt(item.product_id.discount)) / 100) * parseInt(item.quantityInCart)
            totalPrice+= priceAfterDiscount
        })
        const typeScreen = constant.CHECK_OUT;
        return (
            <div>
                <NavBar/>
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
                    orderStatus === 'status_failed' ? (
                        <Popup
                            modal
                            open={true}
                        >
                            <div id='warning-pop-up'>
                                <div>Your information is missing, please fill out</div>
                                <button onClick={this.changeInfo} className='btn-common mt-5'>Change</button>
                            </div>
                        </Popup>
                    ) : (
                        <div></div>
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
                                            <span className='name-phone'>{userProfile.name} {userProfile.phone}</span>
                                            <span className='ml-3'>{userProfile.address}</span>
                                        </span>
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
                                            <span className='txt-end total-price'>{pricePipe(totalPrice + 38)}</span> $
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
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orderStatus: state.orderReducer.order_status,
        carts: state.cartReducer.cart,
        products: state.productReducer.products,
        userProfile: state.userReducer.userInfoUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createOrder: (data) => dispatch(createOrderAction(data)),
        clearCart: () => dispatch(removeAllFromCart()),
        loadProduct: () => dispatch(productAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)