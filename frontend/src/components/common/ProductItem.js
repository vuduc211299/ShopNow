import React from 'react'

const CategoryItem = ({category}) => {
    return (
        <div className='category-item'>
            <img src={category.imgUrl} alt='' width='80.5px'/>
            <div className='category-name'>{category.name}</div>
        </div>
    )
}

export default CategoryItem