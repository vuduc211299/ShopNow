import React, {Component} from 'react'
import ProductItem from '../../common/ProductItem'
import {Link} from 'react-router-dom'
import * as constant from '../../../constants/constants'
import {connect} from 'react-redux'

class Recommend extends Component {
    render() {
        const {products} = this.props;
        let start = Math.floor(Math.random() * Math.floor(5))
        let recommendProduct = products.slice(start, products.length) 

        return (
            <div className=''>
                <div className='recommend-bar container'>
                    <div className='recommend-title'>
                        <span>RECOMMEND</span>
                    </div>
                    <div className='recommend-border'></div>
                </div>
                <div className='d-flex list-search-item flex-wrap mt-5 container mb-5'>
                    {
                        recommendProduct.map((product) => {
                            const path = "/product/" + product._id
                            return (
                                <Link to={path} style={{ textDecoration: 'none', color: "inherit"}}>
                                    <ProductItem item={product} typeScreen={constant.CATEGORY_PAGE}/>
                                </Link>
                            )
                        })
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

export default connect(mapStateToProps)(Recommend)