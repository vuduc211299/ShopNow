import React, {Component} from 'react'
import '../../css/searchPopup.css'
import history from './history'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class SearchPopup extends Component {

    navigateByRoute = (type, id) => {
        console.log('click')
        const path = '/' + type + '/' + id
        history.push(path)
    }

    render() {
        let {keyword, category, product} = this.props;
        
        category = category.filter(ctg => {
            let name = ctg.name.toLowerCase()
            if(name.includes(keyword.toLowerCase())) return true
        })

        product = product.filter(p => {
            let name = p.name.toLowerCase()
            if(name.includes(keyword.toLowerCase())) return true
        })

        return (
            <div className='search-popup'>
                <div className='search-content'>
                    <div>
                        <div className='result-search'>
                            {
                                category.map(ctg => {
                                    return (
                                        <Link to={'/category/' + ctg._id} className='list-result-search'>
                                            {ctg.name}
                                            <div className='search-by'>category</div>
                                        </Link>
                                    )
                                })
                            }
                            {
                                product.map(p => {
                                    return (
                                        <Link to={'/product/' + p._id} className='list-result-search'>
                                            {p.name}
                                            <div className='search-by'>product</div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.categoryReducer.listCategories,
        product: state.productReducer.products
    }
}

export default connect(mapStateToProps)(SearchPopup)