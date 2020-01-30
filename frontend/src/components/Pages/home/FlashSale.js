import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../../common/ProductItem'
import { Link } from 'react-router-dom'

class FlashSale extends Component {
    
    render() {
        const { products } = this.props;
        return (
            <div className='category-section container'>
                <div className='category-header'>
                    FlashSale
                </div>
                <div className='d-flex flex-wrap'>
                    {
                        products.length ? products.map(product => {
                            const url = "product/" + product.id;
                            return (
                                <Link to={url}>
                                    <ProductItem category={product}/>
                                </Link>
                            )
                        }) : (
                            <div>
                                Not have sale product yet
                            </div>
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(FlashSale)