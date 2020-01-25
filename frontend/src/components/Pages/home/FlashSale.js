import React, {Component} from 'react'

const FlashSale = () => {
    const imgURL = 'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn';
    return (
        <div className='category-section container'>
            <div className='category-header'>
                FlashSale
            </div>
            <div className='d-flex flex-wrap'>
                <div className='category-item'>
                    <img src={imgURL} alt='' width='205px'/>
                    <div className='category-name'>Clothes</div>
                </div>
                <div className='category-item'>
                    <img src={imgURL} alt='' width='205px'/>
                    <div className='category-name'>Clothes</div>
                </div>
                <div className='category-item'>
                    <img src={imgURL} alt='' width='205px'/>
                    <div className='category-name'>Clothes</div>
                </div>
                <div className='category-item'>
                    <img src={imgURL} alt='' width='205px'/>
                    <div className='category-name'>Clothes</div>
                </div>
                <div className='category-item'>
                    <img src={imgURL} alt='' width='205px'/>
                    <div className='category-name'>Clothes</div>
                </div>
            </div>
        </div>
    )
}

export default FlashSale