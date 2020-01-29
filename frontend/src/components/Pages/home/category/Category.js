import React,{Component} from 'react'
import { connect } from 'react-redux'
import ProductItem from '../../../common/ProductItem'

class Category extends Component {
    componentDidMount() {
        
    }
    render() {
        const { categories } = this.props; 
        const listCategory = categories.length ? (
            categories.map(category => {
                return (
                    <ProductItem category={category}/>
                )
            })
        ) : (
            <div>
                Loading ...
            </div>
        )
        return (
            <div className='category-section container'>
                <div className='category-header'>
                    Category
                </div>
                <div className='d-flex flex-wrap'>
                    {listCategory}
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        categories: state.categoryReducer.categories
    }
}

export default connect(mapStatetoProps)(Category)