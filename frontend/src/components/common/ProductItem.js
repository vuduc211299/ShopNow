import React from 'react'
import * as constant from '../../constants/constants'
import {pricePipe} from './pricePipe'

const ProductItem = ({item, typeScreen}) => {
    const className='ctg-sort-item';
    let priceAfterDiscount = Math.floor(item.price * (100 - parseInt(item.discount)) / 100)
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
                <div className={constant.CATEGORY_PAGE === typeScreen ? "height_203" : "height_81"}>
                    <img src={item.image} alt='' width={constant.CATEGORY_PAGE === typeScreen ? "203px" : "80.5px"} height={constant.CATEGORY_PAGE === typeScreen ? "auto" : "81px"}/>
                </div>
                <div className='category-name'>{item.name}</div>
                {
                    constant.CATEGORY_PAGE === typeScreen? (
                        <div>
                            <div className='list-search-item-price mt-4'>
                                {
                                    item.discount !== '0' ? (
                                        <span>
                                            <strike className='price-discount'>{pricePipe(item.price)}$</strike>
                                            <span>{pricePipe(priceAfterDiscount)}$</span>
                                        </span>
                                        
                                    ) : (
                                        <span>{pricePipe(item.price)}$</span>
                                    )
                                }
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