import React,{Component} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../../../common/ProductItem'
import {Link} from 'react-router-dom'
import {categoryAction} from '../../../../actions/categoryAction'

class ListCategory extends Component {
    componentDidMount() {
        this.props.loadCategory()
    }

    render() {
        const { categories } = this.props; 
        const listCategory = categories ? (
            categories.map(category => {
                const path = "/category/" + category._id;
                return (
                    <Link to={path} style={{ textDecoration: 'none',color: "inherit" }}>
                        <ProductItem item={category}/>
                    </Link>
                )
            })
        ) : (
            <div>
                Loading ...
            </div>
        )
        return (
            <div className='category-section container'>
                <div className='category-header mb-3'>
                    CATEGORY
                </div>
                <div className='d-flex flex-wrap'>
                    {listCategory}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer.listCategories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategory: () => dispatch(categoryAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory)