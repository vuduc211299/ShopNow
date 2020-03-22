import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import '../../../css/product.css'
import '../../../css/navbar.css'
import BackDisplayProduct from './BackDisplayProduct'
import { connect } from 'react-redux'
import {cartAddAction} from '../../../actions/cartAction'
import Popup from 'reactjs-popup'
import Login from '../../auth/Login'
import {changeQuantity} from '../../../actions/cartAction'
import PopUpNotify from '../../common/PopUpNotify'
import history from '../../common/history'
import NavBar from '../../Header/NavBar'
import {productByIdAction, productAction} from '../../../actions/productAction'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openAuthPopup : false,
            selectValue: '1'
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.loadProduct(id)
        this.props.loadAllProduct()
    }

    componentWillUnmount() {
        this.props.refresh()
    }

    refreshStatus = () => {
        this.props.refresh()
    }

    handleAddToCart = () => {
        this.refreshStatus()
        if(localStorage.getItem('user')) {
            const {product} = this.props;
            const {selectValue} = this.state
            if(selectValue === ''){
                this.props.addToCart(product, 1);
                this.setState({
                    selectValue: '1'
                })
            }else{
                this.props.addToCart(product, parseInt(selectValue));
            }
            
        }
        else{
            this.setState({
                openAuthPopup: true
            })
        }
    }

    handleChange = (e) => {
        let ptt = new RegExp('^[0-9]*$');
        const {product} = this.props;
        if(ptt.test(e.target.value)){
            if(parseInt(e.target.value) <= product.quantity || e.target.value === ''){
                this.setState({
                    selectValue: e.target.value
                }) 
            }
            if(parseInt(e.target.value) > product.quantity) {
                this.setState({
                    selectValue: product.quantity.toString()
                })
            }
             
        }
    }

    navigateToCheckout = () => {
        this.handleAddToCart()
        history.push('/checkout')
    }

    render() {
        const {product} = this.props;
        const {products} = this.props;
        const category_id = product.category_id;
        let related_products = products.filter(item => {
            return item.category_id === category_id && item._id !== product._id && item.discount !== '0'
        })
        related_products = related_products.slice(0, 3)
        const {openAuthPopup} = this.state;
        let base64Icon = 'data:image/png/jpeg;base64,';
        let priceAfterDiscount = Math.floor(product.price * (100 - parseInt(product.discount)) / 100)
        return (
            <div>
                <NavBar/>
                <div>
                {   
                    this.props.status === 'status_success' ? (
                        <PopUpNotify message="Added to cart" status={this.props.status}/>
                    ) : (
                        <div>

                        </div>
                    )
                }
                {
                    openAuthPopup ? (
                        <Popup
                            modal
                            open={true}
                        >
                            <Login/>
                        </Popup>
                        ) : (
                        <div></div>
                    )
                }
                <div className="product">
                    <div className="container p-container">
                        <div className="p-path mt-3">
                            ShopNow > {product.name}
                        </div>
                        <div className='p-detail row mt-3'>
                            <div className='p-img col-5'>
                                <img src={base64Icon + product.image} alt='' width="100%" height="100%"/>
                            </div>
                            <div className='p-intro col-7'>
                                <div className='p-name'>
                                    <h4>{product.name}</h4>
                                </div>
                                <div className='mt-5'>
                                    <span className="p-price-txt">
                                        {
                                            product.discount !== '0' ? (
                                                <span>
                                                    <span>
                                                        {priceAfterDiscount} $
                                                    </span>
                                                    <strike className='price-discount-product'>
                                                        {product.price} $
                                                    </strike>
                                                </span>
                                            ) : (
                                                <span>{product.price} $</span>
                                            )
                                        }
                                    </span>
                                </div>
                                <div className='p-transport row mt-5'>
                                    <div className='col-3 txt-label'>
                                        Transport company
                                    </div>
                                    <div className='col-8'>
                                        J&T Express
                                    </div>
                                </div>
                                <div className='p-quantity row mt-5'>
                                <div className='col-3 txt-label'>
                                        Quantity
                                    </div>
                                    <div className='col-2'>
                                        <input
                                            className="ipn-quantity"
                                            value={this.state.selectValue}
                                            onChange={this.handleChange}
                                            size="5"
                                        />
                                    </div>
                                    <div className='col-5 txt-label'>
                                        {product.quantity} products available
                                    </div>
                                </div>
                                <div className='2-bnt row mt-5 ml-1'>
                                    <button
                                        className='btn-common'
                                        onClick={this.handleAddToCart}
                                    >
                                        Add To Cart
                                    </button>
                                    <button
                                        onClick={this.navigateToCheckout}
                                        className='btn-common ml-2'>
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='p-des-rel-cgr row mt-3'>
                            <div className='p-des'>
                                <h3>Product Detail</h3>
                                <div className="p-des-cnt">
                                    {product.description}
                                </div>
                            </div>
                        </div>
                        <BackDisplayProduct products={related_products}/>
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
        product: state.productReducer.product,
        products: state.productReducer.products,
        status: state.cartReducer.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProduct: (id) => dispatch(productByIdAction(id)),
        loadAllProduct: () => dispatch(productAction()),
        addToCart: (product, selectValue) => dispatch(cartAddAction(product, selectValue)),
        changeQuantityInCart: (product_id, quantity) => dispatch(changeQuantity(product_id, quantity)),
        refresh: () => dispatch({type: 'REFRESH_STATUS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)