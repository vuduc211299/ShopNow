import React, {Component} from 'react'
import Footer from '../../Footer/Footer'
import '../../../css/checkout.css'
import {connect} from 'react-redux'
import CartItem from '../cart/CartItem'
import history from '../../common/history'
import {TypeScreen} from '../../common/enviroment.ts'
import Popup from 'reactjs-popup'

class CheckOut extends Component {
    render() {
        const {cart} = this.props;
        const typeScreen = TypeScreen.CHECK_OUT;
        const {totalPrice}= this.props;
        return (
            <div className="ck-container">
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
                                        <div className='mb-3 p-4'>
                                            <span>
                                                Products
                                            </span>
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
                                                <span className='trans-price'>38 USD</span>
                                            </div>
                                        </div>
                                        <div className="ck-total-price p-4 d-flex justify-content-end">
                                            <div className='ck-price-i'>
                                                <span>Total price:</span>
                                                <div>
                                                    {totalPrice} USD
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pay-method-proceed bg-white mt-3 mb-3 bl-ck'>
                                    <div className="pay-method d-flex bd-bot p-4">
                                        <span>Payment method</span>
                                        <div className='ml-1'>
                                            <button className='ml-1'>Banking</button>
                                            <button className='ml-1'>Pay when reciving</button>
                                        </div>
                                    </div>
                                    <div className="ck-price bd-bot p-4">
                                        <div className='ck-price-i'>
                                            <span>Price:</span>
                                            <div></div>{totalPrice}
                                        </div>
                                        <div className='ck-price-i'>
                                            <span>Transport fee:</span>
                                            <div>0 USD</div>
                                        </div>
                                        <div className='ck-price-i'>
                                            <span>Total Price:</span>
                                            <div>{totalPrice}</div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end p-4'>
                                        <button className='btn-common'>Order</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                        <div>
                            <button onClick={()=> {history.push('/')}}>Back To Shop</button>    
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
        cart : state.cartReducer.cart,
        totalPrice: state.cartReducer.totalPrice
    }
}

export default connect(mapStateToProps, null)(CheckOut)