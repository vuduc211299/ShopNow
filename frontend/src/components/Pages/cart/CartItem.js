import React, {Component} from 'react'
import '../../../css/cart.css'
import { connect } from 'react-redux'
import PopUpItem from '../../common/PopUpItem'
import * as constant from '../../../constants/constants'
import {cartRemoveAction, changeQuantity} from '../../../actions/cartAction'
import {pricePipe} from '../../common/pricePipe'

class CartItem extends Component {
    constructor(props) {
        super(props);
        const {cartItem} = this.props;
        this.state = {
            selectValue: cartItem.quantityInCart
        }
    }

    handleChange = (e) => {
        const {cartItem} = this.props;
        let ptt = new RegExp('^[0-9]*$');
        if(ptt.test(e.target.value)){
            if(parseInt(e.target.value) > 0){
                this.props.changeQuantityInCart(cartItem.product_id._id, parseInt(e.target.value));
            }
            this.setState({
                selectValue: e.target.value
            })
        }
    }
    handleClickDeleteBtn = () => {
        const {cartItem} = this.props;
        this.props.deleteCartItem(cartItem)
    }

    render() {
        const {type} = this.props;
        const {typeScreen} = this.props;
        const {cartItem} = this.props;
        return (
            <div>
                {
                    (type !== constant.POP_UP) ? ( 
                        <div className='p-in-cart-container d-flex'>
                            <div className='p-in-cart-name-img col-4'>
                                <div>
                                    <img src={cartItem.product_id.image} alt='p-in-cart' width='15%' height='60%'/>
                                </div>
                                <div>
                                    <span>{cartItem.product_id.name}</span>
                                </div>
                            </div>
                            <div className='p-in-cart-quantity col-4'>
                                {
                                    typeScreen === constant.CHECK_OUT ? (
                                        <div className='price-to-pay col-2'>
                                            {cartItem.quantityInCart}
                                        </div>
                                ) : (
                                        <input
                                        className="ipn-cart"
                                        value={this.state.selectValue}
                                        onChange={this.handleChange}
                                        size="5"
                                        />
                                )
                                }
                            </div>
                            <div className='p-in-cart-sum-price col-2'>
                                {pricePipe(Math.floor(parseInt(cartItem.product_id.price) * (100 - parseInt(cartItem.product_id.discount)) / 100))} $
                            </div>
                            {
                                typeScreen === constant.CHECK_OUT ? (
                                    <div className='price-to-pay col-2'>
                                        {pricePipe(Math.floor(parseInt(cartItem.product_id.price) * (100 - parseInt(cartItem.product_id.discount)) / 100) * parseInt(cartItem.quantityInCart))} $
                                    </div>
                                ) : (
                                    <div className='p-in-cart-exe col-1'>
                                        <button className='btn-primary' onClick={this.handleClickDeleteBtn}>delete</button> 
                                    </div>
                                )
                            }
                            
                        </div>  
                    ) : (
                        <div>
                            <PopUpItem cartItem={cartItem}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCartItem: (cartItem) => dispatch(cartRemoveAction(cartItem)),
        changeQuantityInCart: (product_id, quantity) => dispatch(changeQuantity(product_id, quantity))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)