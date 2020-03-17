import React, {Component} from 'react'
import '../../../css/addProduct.css'
import BackMenu from '../BackMenu'
import NavBar from '../Navbar'

class AddProduct extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="app-seller">
                    <BackMenu/>
                    <div className='add-product-page'>
                        <div className='add-product-container'>
                            <div className='add-product-header'>
                                <div id='add-product-header-txt'>Add a New Product</div>
                            </div>
                            <div className='ipn-common-seller mt-5 mb-3'>
                                <span className='ipn-label txt-title'>Product Name:</span>
                                <div className='ipn-product-container'>
                                    <input className='ipn-product-name' type="text" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="input" minlength="10" maxlength="120"/>  
                                </div>
                            </div>
                            <div className='ctg-select'>
                                <div className='mb-3 txt-title'>Please chose one category</div>
                                <ul className='ctg-select-ul'>
                                    <li className='ctg-select-list'>
                                        <span>Phone</span>
                                        <i className="fa">&#xf105;</i>
                                    </li>
                                    <li className='ctg-select-list'>
                                        <span>Phone</span>
                                        <i className="fa">&#xf105;</i>
                                    </li>
                                    <li className='ctg-select-list'>
                                        <span>Phone</span>
                                        <i className="fa">&#xf105;</i>
                                    </li>
                                    <li className='ctg-select-list'>
                                        <span>Phone</span>
                                        <i className="fa">&#xf105;</i>
                                    </li>
                                    <li className='ctg-select-list'>
                                        <span>Phone</span>
                                        <i className="fa">&#xf105;</i>
                                    </li>
                                </ul>
                            </div>
                            <div className='add-product-des mt-3'>
                                <span className='ipn-label txt-title'>Product Description:</span>
                                <div className='des-txt-area-div'>
                                    <textarea className='des-txt-area'></textarea>
                                </div>
                            </div>
                            <div className='sale-info'>
                                <div className='mb-5 mt-5'>
                                    <h2 className='section-name'>Sale Informations</h2>
                                </div>
                                <div>
                                    <div className='ipn-common-seller mt-3'>
                                        <span className='ipn-label txt-title'>Price:</span>
                                        <div className='ipn-product-container'>
                                            <input className='ipn-product-name' type="text" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="input"/>
                                        </div>
                                    </div>
                                    <div className='ipn-common-seller mt-3'>
                                        <span className='ipn-label txt-title'>Discount:</span>
                                        <div className='ipn-product-container'>
                                            <input className='ipn-product-name' type="text" size="large" resize="vertical" rows="2" minrows="2" restrictiontype="input"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='media-management'>
                                <div className='mb-5 mt-5'>
                                    <h2 className='section-name'>Media Management</h2>
                                </div>
                                <div>
                                    <div className='ipn-common-seller mt-3'>
                                        <span className='ipn-label txt-title'>Product image:</span>
                                        <div className='upload-img-div'>
                                            <div>
                                                <i className="fa fa-plus-img">&#xf055;</i>
                                            </div>
                                            <input className='hidden' type="button" value="upload"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='btn-function'>
                            <button className='btn-a btn-cancel mr-4'>Cancel</button>
                            <button className='btn-a btn-confirm'>Save and Publish</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProduct