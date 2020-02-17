import React from 'react'
import * as constant from '../../../constants/constants'
import ProductItem from '../../common/ProductItem'
import {Link} from 'react-router-dom'

const BackDisplayProduct = ({products}) => {
    return (
        <div className='p-rel-cgr mt-4'>
            <h5>Related Products</h5>
            <ul className="list-inline container">
                {
                    products ? products.map(item => {
                        const url = '/product/' + item._id
                        return (
                            <li className="list-inline-item p-l-rel">
                                <Link to={url} style={{ textDecoration: 'none', color: "inherit"}}>
                                    <ProductItem item={item} typeScreen={constant.CATEGORY_PAGE}/>
                                </Link>
                            </li>
                        )
                    }) : (<div></div>)
                }
            </ul>
        </div>
    )
}

export default BackDisplayProduct