import React, { Component } from 'react'
import Footer from '../../Footer/Footer'
import '../../../css/product.css'
import '../../../css/navbar.css'
import BackDisplayProduct from './BackDisplayProduct'
import { connect } from 'react-redux'

class Product extends Component {

    handleAddToCart = () => {
        const product = this.getProductById();
        this.props.addToCart(product);
    }

    getProductById () {
        const { id } = this.props.match.params;
        const { products } = this.props;
        const product = products.find(product=> product._id == String(id))
        return product;
    }

    render() {
        const product = this.getProductById();
        console.log(product)
        return (
            <div>
                <div className="product">
                    <div className="container p-container">
                        <div className="p-path mt-3">
                            
                        </div>
                        <div className='p-detail row mt-3'>
                            <div className='p-img col-5'>
                                <img src='' alt='' width="100%" height="100%"/>
                            </div>
                            <div className='p-intro col-7'>
                                <div className='p-name'>
                                    <h4>{product.name}</h4>
                                </div>
                                <div className='mt-5'>
                                    <span className="p-price-txt">{product.price}</span> USD
                                </div>
                                <div className='p-transport row mt-5'>
                                    <div className='col-3'>
                                        Transport
                                    </div>
                                    <div className='col-8'>
                                        Free ship to all customer =)))
                                    </div>
                                </div>
                                <div className='2-bnt row mt-5 ml-1'>
                                    <button
                                        className='btn-common'
                                        onClick={this.handleAddToCart}
                                    >
                                        Add To Cart
                                    </button>
                                    <button className='btn-common ml-2'>
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
                        <BackDisplayProduct/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch({type: 'ADD_TO_CART', product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)