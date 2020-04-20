import React, { Component } from 'react'
import '../../css/orderPage.css'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import BackMenu from './BackMenu'
import history from '../common/history'
import { getAllOrderAction, deleteOrderByIdAction } from '../../actions/orderAction'
import Popup from 'reactjs-popup'
import PopupNotify from '../common/PopUpNotify'

class Orders extends Component {
    componentDidMount() {
        const { shopProfile } = this.props;
        if (Object.keys(shopProfile).length === 0 && shopProfile.constructor === Object) {
            history.push('/shop');
        } else {
            this.props.loadOrder()
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.status_delete !== this.props.status_delete){
            this.props.loadOrder()
        }
    }

    componentWillUnmount() {
        this.props.resetStatus()
    }

    deleteOrder = (id) => {
        if(window.confirm('Do you want to delete this order ?')) {
            this.props.resetStatus()
            this.props.deleteOrder({_id: id})
        }
    }

    render() {
        const { order, status_delete } = this.props
        return (
            <div>
                {
                    status_delete === 'status_success' ? (
                        <PopupNotify
                            message="Delete success"
                            status={status_delete}
                        />
                    ) : (
                            <div></div>
                        )
                }
                <Navbar />
                <div className='app-seller'>
                    <BackMenu />
                    <div className='order-page'>
                        <div className='order-header'>
                            <div className='order-tab'>
                                <div className='mr-3 label-txt-underlined label-color'>All</div>
                            </div>
                            <div className='mt-3 underline-bar'></div>
                        </div>
                        <div className='order-list-pannel-container'>
                            {order.length} Orders
                        </div>
                        <div className='order-list-header'>
                            <div className='order-list-tab'>
                                <span className='first txt-color'>Product(s)</span>
                                <span className='second center txt-color'>Order total</span>
                                <span className='second center txt-color'>Order from</span>
                                <span className='sixth txt-color'>Transport</span>
                            </div>
                        </div>
                        {
                            order.length > 0 ? order.map(od => {
                                return (
                                    <div className='order-list-products'>
                                        <div className='order-product first'>
                                            <img src={od.product_id.image} width='20%' height='60%' />
                                            <span className='ml-3'>{od.product_id.name}</span>
                                        </div>
                                        <div className='second center'>
                                            <span>{od.quantity}</span>
                                        </div>
                                        <div className='second center'>
                                            <Popup
                                                trigger={
                                                    <span className='hover'>{od.order_from.name}</span>
                                                }
                                                on='click'
                                                position='bottom center'
                                            >
                                            <div>
                                                <div>
                                                    <label className='txt-color'>Name: </label>
                                                    <span className='label-color'>{od.order_from.name}</span>
                                                </div>
                                                <div>
                                                    <label className='txt-color'>Address: </label>
                                                    <span className='label-color'>{od.order_from.address}</span>
                                                </div>
                                                <div>
                                                    <label className='txt-color'>Phone: </label>
                                                    <span className='label-color'>{od.order_from.phone}</span>
                                                </div>
                                            </div>
                                            </Popup>
                                        </div>
                                        <div className='fourth'>
                                            J&T Express
                                        </div>
                                        <div className='fifth'>
                                            <i onClick={this.deleteOrder.bind(this, od._id)} className="fa fa-trash i-trash"></i>
                                        </div>
                                    </div>
                                )
                            }) : (
                                <div></div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        shopProfile: state.shopReducer.shop,
        order: state.orderReducer.order,
        status_delete: state.orderReducer.delete_status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadOrder: () => dispatch(getAllOrderAction()),
        resetStatus: () => dispatch({type: 'REFRESH_DELETE_ORDER_STATUS'}),
        deleteOrder: (id) => dispatch(deleteOrderByIdAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)