import React from 'react'
import image  from '../../../img/product.jpeg'

const BackDisplayProduct = () => {
    return (
        <div className='p-rel-cgr mt-4'>
            <h5>Related Products</h5>
            <ul className="list-inline container">
                <li className="list-inline-item p-l-rel">
                    <img src={image} alt='rel-img' width="100%" height="100%"/>
                    <div className="mt-4">airpot apple</div>
                    <div className="mt-2">
                        17.000$
                    </div>
                </li>
                <li className="list-inline-item p-l-rel">
                    <img src={image} alt='rel-img' width="100%" height="100%"/>
                    <div className="mt-4">airpot apple</div>
                    <div className="mt-2">
                        17.000$
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BackDisplayProduct