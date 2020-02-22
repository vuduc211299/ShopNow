import React, {Component} from 'react'
import Footer from '../../../Footer/Footer'
import '../../../../css/categoryPage.css'
import Banner from '../banner/Banner'
import ProductItem from '../../../common/ProductItem'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as constant from '../../../../constants/constants'

class CategoryPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            sort_by_price: "low_to_high",
            sort_by_location: "all"
        }
    }

    sortByPrice = (e) => {
        this.setState({
            sort_by_price : e.target.value
        })
    }

    sortByLocaltion = (e) => {
        this.setState({
            sort_by_location: e.target.value
        })
    }

    render() {
        const {listProducts} = this.props;
        const { id } = this.props.match.params;
        const {sort_by_location, sort_by_price}= this.state;
        let sortedProduct = listProducts.filter(item => item.category_id === String(id));
        sortedProduct = sortedProduct.filter(item => sort_by_location === 'all'? true : (item.location === sort_by_location) )
        if(sort_by_price === 'high_to_low') {
            sortedProduct.sort((a, b) => {
                return (b.price * (100 - parseInt(b.discount)) / 100) - (a.price * (100 - parseInt(a.discount)) / 100)
            })
        } else {
            sortedProduct.sort((a, b) => {
                return (a.price * (100 - parseInt(a.discount)) / 100) - (b.price * (100 - parseInt(b.discount)) / 100)
            })
        }
            
        return (
            <div>
                <Banner/>
                <div className="ctg-page">
                    <div className="ctg-page-container container">
                        <div className='ctg-page-sort-bar d-flex p-3'>                 
                            <span>Sort by</span>
                            <select className='ml-3' onChange={this.sortByPrice}>
                                <option value="low_to_high">Low to High</option>
                                <option value="high_to_low">High to Low</option>
                            </select>
                            <span className='ml-3'>Location</span>
                            <select className='ml-3' onChange={this.sortByLocaltion}>
                                <option value="all">All</option>
                                <option value="HaNoi">Ha Noi</option>
                                <option value="HCM">HCM City</option>
                            </select>
                        </div>
                        <div className='d-flex list-search-item flex-wrap mt-5'>
                            {
                                sortedProduct.map((product) => {
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
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listProducts: state.productReducer.products
    }
}

export default connect(mapStateToProps)(CategoryPage)