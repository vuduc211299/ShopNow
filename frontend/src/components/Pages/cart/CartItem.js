import React, {Component} from 'react'
import '../../../css/cart.css'
import { connect } from 'react-redux'
import PopUpItem from '../../common/PopUpItem'
import {TypeScreen} from '../../common/enviroment.ts'

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
        let ptt = new RegExp('^[1-9]*$');
        if(ptt.test(e.target.value)){
            if(e.target.value !== ''){
                this.props.changeQuantityInCart(cartItem, parseInt(e.target.value));
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
        const quantity = this.state.selectValue;
        let priceToPay = 0;
        if(!parseInt(cartItem.price) || !parseInt(quantity)){
            priceToPay = 0;
        } else {
            priceToPay = parseInt(cartItem.price) * parseInt(quantity);
        }
        return (
            <div>
                {
                    (type !== TypeScreen.POP_UP) ? (
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
                            <div className='p-in-cart-quantity col-4'>
                                <input
                                    className="ipn-cart"
                                    value={this.state.selectValue} 
                                    onChange={this.handleChange}
                                    size="5"
                                />
                            </div>
                            <div className='p-in-cart-sum-price col-2'>
                                { priceToPay } USD
                            </div>
                            {
                                typeScreen === TypeScreen.CHECK_OUT ? (
                                    <div></div>
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
        deleteCartItem: (cartItem) => dispatch({type: 'REMOVE_FROM_CART', cartItem}),
        changeQuantityInCart: (cartItem, newQuantity) => dispatch({type:"CHANGE_QUANTITY", cartItem, newQuantity})
    }
}


export default connect(null, mapDispatchToProps)(CartItem)