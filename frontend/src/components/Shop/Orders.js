import React, {Component} from 'react'
import '../../css/orderPage.css'
import img from '../../img/shoes.jpg'
import Navbar from './Navbar'
import {connect} from 'react-redux'
import BackMenu from './BackMenu'
import history from '../common/history'

class Orders extends Component {
    componentDidMount() {
        const {shopProfile} = this.props;
        if(Object.keys(shopProfile).length === 0 && shopProfile.constructor === Object) {
            history.push('/shop');
        } else {
            
        }
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className='app-seller'>
                    <BackMenu/>
                    <div className='order-page'>
                        <div className='order-header'>
                            <div className='order-tab'>
                                <div className='mr-3 label-txt-underlined'>All</div>
                                <div className='mr-3 label-txt-underlined'>Shipping</div>
                                <div className='label-txt-underlined'>Completed</div>
                            </div>
                            <div className='mt-3 underline-bar'></div>
                        </div>
                        <div className='order-list-pannel-container'>
                            0 Orders
                        </div>
                        <div className='order-list-header'>
                            <div className='order-list-tab'>
                                <span className='first txt-color'>Product(s)</span>
                                <span className='second center txt-color'>Order total</span>
                                <span className='third txt-color'>Status</span>
                                <span className='sixth txt-color'>Transport</span>
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
                            <div className='third'>
                                <select>
                                    <option>Pending</option>
                                    <option>Shipping</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                            <div className='fourth'>
                                J&T Express
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
                            <div className='third'>
                                <select>
                                    <option>Pending</option>
                                    <option>Shipping</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                            <div className='fourth'>
                                J&T Express
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
                            <div className='third'>
                                <select>
                                    <option>Pending</option>
                                    <option>Shipping</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                            <div className='fourth'>
                                J&T Express
                            </div>
                            <div className='fifth'>
                                <i className="fa fa-trash i-trash"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopProfile: state.shopReducer.shop
    }
}

export default connect(mapStateToProps)(Orders)