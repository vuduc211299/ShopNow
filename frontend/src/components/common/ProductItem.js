import React from 'react'
import * as constant from '../../constants/constants'

const ProductItem = ({item, typeScreen}) => {
    const className='ctg-sort-item';
    return (
        <div className={
            constant.CATEGORY_PAGE === typeScreen ? className : "category-item"
        }>
            <div className={
            constant.CATEGORY_PAGE === typeScreen ? "ctg-sort-item-wrapper" : ""
        }>
                <img src={item.imgUrl} alt='' width={
                    constant.CATEGORY_PAGE === typeScreen ? "100%" : "80.5px"
                }/>
                <div className='category-name'>{item.name}</div>
                {
                    constant.CATEGORY_PAGE === typeScreen? (
                        <div>
                            <div className='list-search-item-price mt-4'>
                                <span>{item.price}</span> USD
                            </div>
                            <div className='d-flex justify-content-end'>
                                <span className='local-txt'>{item.location}</span>
                            </div>
                        </div>
                        
                    ) : (
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProductItem