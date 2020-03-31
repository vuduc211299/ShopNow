import React, { Component } from 'react'
import NavBar from '../Navbar'
import BackMenu from '../BackMenu'
import { connect } from 'react-redux'
import '../../../css/myProduct.css'
import { getProductByShopAction, deleteProductById } from '../../../actions/productAction'
import history from '../../common/history'
import PopupNotify from '../../common/PopUpNotify'
import EditProduct from './EditProduct'

class MyProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            status_operate: 'all',
            editProduct: {}
        }
    }

    componentDidMount() {
        const { shopProfile } = this.props;
        if (Object.keys(shopProfile).length === 0 && shopProfile.constructor === Object) {
            history.push('/shop');
        } else {
            this.props.loadProduct()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status_delete !== prevProps.status_delete ||
            this.state.status_operate !== prevState.status_operate) {
            this.props.loadProduct()
        }
    }

    componentWillUnmount() {
        this.setState({
            status_operate: 'edit'
        })
        this.props.refreshStatus()
    }

    deleteProduct = (id) => {
        if (window.confirm('Delete this product?')) {
            this.props.deleteProduct({ id })
        }
    }

    getProductById = (id) => {
        const {products} = this.props
        const product = products.find(p => p._id === id)
        return product
    }

    editProduct = (id) => {
        const editProduct = this.getProductById(id)
        this.setState({
            status_operate: 'edit',
            editProduct
        })
    }
    clickAll = () => {
        this.setState({
            status_operate: 'all'
        })
    }

    render() {
        const { products, status_delete } = this.props
        const { status_operate, editProduct } = this.state
        return (
            <div>
                {
                    status_delete === 'status_success' ? (
                        <PopupNotify
                            message="Delete success"
                            status
                        />
                    ) : (
                            <div></div>
                        )
                }
                <NavBar />
                <div className="app-seller">
                    <BackMenu />
                    <div className='order-page'>
                        <div className='order-header'>
                            <div className='order-tab'>
                                <div onClick={this.clickAll} className={status_operate === 'all' ? 'label-txt-underlined label-color' : 'label-txt-underlined'}>
                                    All
                                </div>
                                <div className={status_operate === 'edit' ? 'label-txt-underlined label-color' : 'label-txt-underlined'}>
                                    Edit
                                </div>
                            </div>
                            <div className={status_operate === 'edit' ? 'mt-3 underline-bar ml-80px' : 'mt-3 underline-bar'}></div>
                        </div>
                        {
                            status_operate === 'all' ? (
                                <div>
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
                                                        <img src={product.image} width='20%' height='60%' />
                                                        <span className='ml-3'>{product.name}</span>
                                                    </div>
                                                    <div className='second center'>
                                                        <span>{product.quantity}</span>
                                                    </div>
                                                    <div className='fourth-p center'>
                                                        <i onClick={this.editProduct.bind(this, product._id)} className='fa mr-2 fs-20'>&#xf044;</i>
                                                    </div>
                                                    <div className='fifth'>
                                                        <i onClick={this.deleteProduct.bind(this, product._id)} className="fa fa-trash i-trash"></i>
                                                    </div>
                                                </div>
                                            )
                                        }) : (
                                                <div></div>
                                            )
                                    }
                                </div>
                            ) : (
                                    <EditProduct editProduct={editProduct}/>
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
        products: state.productReducer.productByShop,
        status_delete: state.productReducer.status_delete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadProduct: () => dispatch(getProductByShopAction()),
        deleteProduct: (data) => dispatch(deleteProductById(data)),
        refreshStatus: () => dispatch({ type: 'REFRESH_STATUS' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProduct)