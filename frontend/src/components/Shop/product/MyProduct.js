import React, {Component} from 'react'
import NavBar from '../Navbar'
import BackMenu from '../BackMenu'
import img from '../../../img/shoes.jpg'
import '../../../css/myProduct.css'

class MyProduct extends Component {
    render () {
        return  (
            <div>
                <NavBar/>
                <div className="app-seller">
                    <BackMenu/>
                    <div className='order-page'>
                        <div className='order-header'>
                            <div className='order-tab'>
                                <div className='mr-3'>All</div>
                                <div className='mr-3'>Edit</div>
                            </div>
                        </div>
                        <div className='order-list-pannel-container'>
                            0 Products
                        </div>
                        <div className='order-list-header'>
                            <div className='order-list-tab'>
                                <span className='first txt-color'>Product(s)</span>
                                <span className='second center txt-color'>Quantity</span>
                                <span className='sixth-p txt-color center'>Operation</span>
                                <span className='sixth-p'></span>
                            </div>
                        </div>
                        <div className='order-list-products'>
                            <div className='order-product first'>
                                <img src={img} width='20%' height='60%'/>
                                <span className='ml-3'>Nike 2020</span>
                            </div>
                            <div className='second center'>
                                <span>1</span>
                            </div>
                            <div className='fourth-p center'>
                                <i className='fa mr-2 fs-20'>&#xf044;</i>
                            </div>
                            <div className='fifth'>
                                <i className="fa fa-trash i-trash"></i>
                            </div>
                        </div>
                        <div className='order-list-products'>
                            <div className='order-product first'>
                                <img src={img} width='20%' height='60%'/>
                                <span className='ml-3'>Nike 2020</span>
                            </div>
                            <div className='second center'>
                                <span>1</span>
                            </div>
                            <div className='fourth-p center'>
                                <i className='fa mr-2 fs-20'>&#xf044;</i>
                            </div>
                            <div className='fifth'>
                                <i className="fa fa-trash i-trash"></i>
                            </div>
                        </div>
                        <div className='order-list-products'>
                            <div className='order-product first'>
                                <img src={img} width='20%' height='60%'/>
                                <span className='ml-3'>Nike 2020</span>
                            </div>
                            <div className='second center'>
                                <span>1</span>
                            </div>
                            <div className='fourth-p center'>
                                <i className='fa mr-2 fs-20'>&#xf044;</i>
                            </div>
                            <div className='fifth-p'>
                                <i className="fa fa-trash i-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyProduct