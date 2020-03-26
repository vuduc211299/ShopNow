import React, {Component} from 'react'
import NavBar from '../Navbar'
import BackMenu from '../BackMenu'
import {connect} from 'react-redux'
import '../../../css/myProduct.css'
import { getProductByShopAction } from '../../../actions/productAction'
import history from '../../common/history'

class MyProduct extends Component {

    componentDidMount() {
        const {shopProfile} = this.props;
        if(Object.keys(shopProfile).length === 0 && shopProfile.constructor === Object) {
            history.push('/shop');
        } else {
            this.props.loadProduct()
        }
    }

    render () {
        const { products } = this.props
        return  (
            <div>
                <NavBar/>
                <div className="app-seller">
                    <BackMenu/>
                    <div className='order-page'>
                        <div className='order-header'>
                            <div className='order-tab'>
                                <div className='mr-3'>All</div>
                                <div className='mr-3'>Edit</div>
                            </div>
                        </div>
                        <div className='order-list-pannel-container'>
                            {products.length} Products
                        </div>
                        <div className='order-list-header'>
                            <div className='order-list-tab'>
                                <span className='first txt-color'>Product(s)</span>
                                <span className='second center txt-color'>Quantity</span>
                                <span className='sixth-p txt-color center'>Operation</span>
                                <span className='sixth-p'></span>
                            </div>
                        </div>
                        {
                            products.length > 0 ? products.map(product => {
                                return (
                                    <div className='order-list-products'>
                                        <div className='order-product first'>
                                            <img src={product.image} width='20%' height='60%'/>
                                            <span className='ml-3'>{product.name}</span>
                                        </div>
                                        <div className='second center'>
                                            <span>{product.quantity}</span>
                                        </div>
                                        <div className='fourth-p center'>
                                            <i className='fa mr-2 fs-20'>&#xf044;</i>
                                        </div>
                                        <div className='fifth'>
                                            <i className="fa fa-trash i-trash"></i>
                                        </div>
                                    </div>
                                )
                            }) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopProfile: state.shopReducer.shop,
        products: state.productReducer.productByShop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProduct: () => dispatch(getProductByShopAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProduct)