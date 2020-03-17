import React, {Component} from 'react'
import NavBar from './Navbar'
import BackMenu from './BackMenu'
import '../../css/backMenu.css'
import '../../css/shop.css'
import img from '../../img/slide-1.jpg'

class Shop extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="app-seller">
                    <BackMenu/>
                    <div className='shop-home-page'>
                        <div className='shop-home-container'>
                            <div className='shop-profile-header'>      
                                <div className='fs-24'>
                                    <i className="fa">&#xf2b9;</i>
                                </div>
                                <div className='txt-22 ml-3'>
                                    Shop Profile
                                </div>
                            </div>   
                            <hr/>
                            <div className='shop-detail'>
                                <div className='shop-detail-container'>
                                    <div className='shop-detail-header'>
                                        <div className='caption'>
                                            <span className='txt-600 ml-3'>
                                                Basic Information
                                            </span>
                                            <div className="mt-3 recommend-border"></div>
                                        </div>
                                    </div>
                                    <div className='shop-detail-content pt-3'>
                                        <div className='shop-detail-img p-3'>
                                            <img  src={img}/>
                                        </div>
                                        <div className='shop-detail-ipn w-100'>
                                            <div>
                                                <div className= 'ipn-label txt-title'>Shop Name</div>
                                                <div className='ipn-product-container'>
                                                    <input className='ipn-product-name' type="text" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="input"/>  
                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <div className= 'ipn-label txt-title'>Image</div>
                                                <div className='upload-img-div'>
                                                    <div>
                                                        <i className="fa fa-plus-img">&#xf055;</i>
                                                    </div>
                                                    <input className='hidden' type="button" value="upload"/>
                                                </div>
                                            </div>
                                            <div className='mt-3'>
                                                <div className= 'ipn-label txt-title'>Shop Description</div>
                                                <div className='ipn-product-container'>
                                                    <input className='ipn-product-name' type="text" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="input"/>  
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center mt-3'>
                                                <button className='btn-a btn-confirm'>Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop