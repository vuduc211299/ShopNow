import React from 'react'
import * as constant from '../../constants/constants'
import {pricePipe} from './pricePipe'

const ProductItem = ({item, typeScreen}) => {
    const className='ctg-sort-item';
    return (
        <div className={
            constant.CATEGORY_PAGE === typeScreen ? className : "category-item"
        }>  
            {
                constant.CATEGORY_PAGE && item.discount !=='0' ? (
                    <div className='discount-bagde'>
                        <div className='discount-percent'>{item.discount}%</div>
                        <div className='txt-discount'>sale</div>
                    </div>
                ) : (
                    <div></div>
                )
            }
            <div className={
                constant.CATEGORY_PAGE === typeScreen ? "ctg-sort-item-wrapper" : ""
            }>
                <img src={require('../../img/iphone.jpeg')} alt='' width={constant.CATEGORY_PAGE === typeScreen ? "100%" : "80.5px"}/>
                <div className='category-name'>{item.name}</div>
                {
                    constant.CATEGORY_PAGE === typeScreen? (
                        <div>
                            <div className='list-search-item-price mt-4'>
                                <span>{pricePipe(item.price)}</span> $
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