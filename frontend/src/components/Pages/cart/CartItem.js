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
                                <div className='price-to-pay col-2'>
                                    {cartItem.quantityInCart}
                                </div>   
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
        deleteCartItem: (cartItem) => dispatch(cartRemoveAction(cartItem))
    }
}

export default connect(null, mapDispatchToProps)(CartItem)