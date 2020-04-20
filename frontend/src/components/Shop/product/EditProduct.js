import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editProductById } from '../../../actions/productAction'
import PopupNotify from '../../common/PopUpNotify'
import { MAX_QUANTITY , MAX_DISCOUNT, EMPTY_VALUE, MAX_PRICE, WRONG_PHONE_FORMAT, checkPhoneFormat } from '../../../helpers/checkFormat'

class EditProduct extends Component {
    constructor(props) {
        super(props)
        const { editProduct } = this.props;
        this.state = {
            edit_name: editProduct.name,
            edit_des: editProduct.description,
            edit_price: editProduct.price,
            edit_discount: editProduct.discount,
            edit_quantity: editProduct.quantity,
            checkValidEditPrice: '',
            checkValidEditDiscount: '',
            checkValidEditQuantity: '',
            disableBtn: true
        }
    }

    componentDidUpdate(prevState) {
        if(this.state !== prevState) {
            const {edit_name, edit_des, edit_price, edit_discount, disableBtn} = this.state
            if(
                edit_name !== '' &&
                edit_name !== EMPTY_VALUE &&
                edit_des !== '' &&
                edit_des !== EMPTY_VALUE &&
                edit_discount !== '' &&
                edit_price !== '' &&
                disableBtn 
            ) {
                this.setState({
                    disableBtn: false
                })
            }

            if((edit_name === '' ||
                edit_name === EMPTY_VALUE ||
                edit_des === '' ||
                edit_des === EMPTY_VALUE ||
                edit_discount === '' ||
                edit_price === '') &&
                !disableBtn
            ) {
                this.setState({
                    disableBtn: true
                })
            }
        }
    }

    handleDiscountChange = (e) => {
        if (checkPhoneFormat(e.target.value) !== WRONG_PHONE_FORMAT) {
            if (parseInt(e.target.value) <= MAX_DISCOUNT) {
                this.setState({
                    edit_discount: e.target.value,
                    checkValidEditDiscount: ''
                })
            }
            if (parseInt(e.target.value) > MAX_DISCOUNT) {
                this.setState({
                    edit_discount: MAX_DISCOUNT.toString(),
                    checkValidEditDiscount: ''
                })
            }
            if (e.target.value === '') {
                this.setState({
                    edit_discount: '',
                    checkValidEditDiscount: EMPTY_VALUE
                })
            }
        }
    }

    handleNameChange = (e) => {
        if (e.target.value !== '') {
            this.setState({
                edit_name: e.target.value
            })
        } else {
            this.setState({
                edit_name: EMPTY_VALUE
            })
        }
    }

    handleDesChange = (e) => {
        if (e.target.value !== '') {
            this.setState({
                edit_des: e.target.value
            })
        } else {
            this.setState({
                edit_des: EMPTY_VALUE
            })
        }
    }

    handleQuantityChange = (e) => {
        if (checkPhoneFormat(e.target.value) !== WRONG_PHONE_FORMAT) {
            if (parseInt(e.target.value) <= MAX_QUANTITY) {
                this.setState({
                    edit_quantity: e.target.value,
                    checkValidEditQuantity: ''
                })
            }
            if (parseInt(e.target.value) > MAX_QUANTITY) {
                this.setState({
                    edit_quantity: MAX_QUANTITY.toString(),
                    checkValidEditQuantity: ''
                })
            }
            if (e.target.value === '') {
                this.setState({
                    edit_quantity: '',
                    checkValidEditQuantity: EMPTY_VALUE
                })
            }
        }
    }

    handlePriceChange = (e) => {
        if (checkPhoneFormat(e.target.value) !== WRONG_PHONE_FORMAT) {
            if (parseInt(e.target.value) <= MAX_PRICE) {
                this.setState({
                    edit_price: e.target.value,
                    checkValidEditPrice: ''
                })
            }
            if (parseInt(e.target.value) > MAX_PRICE) {
                this.setState({
                    edit_price: MAX_PRICE.toString(),
                    checkValidEditPrice: ''
                })
            }
            if (e.target.value === '') {
                this.setState({
                    edit_price: '',
                    checkValidEditPrice: EMPTY_VALUE
                })
            }
        }
    }

    handleSave = () => {
        const { editProduct } = this.props;
        const { edit_name, edit_des, edit_price, edit_discount, edit_quantity } = this.state
        const data = {
            id: editProduct._id,
            name: edit_name,
            description: edit_des,
            price: edit_price,
            discount: edit_discount,
            quantity: edit_quantity
        }
        if(
            edit_name !== EMPTY_VALUE &&
            edit_des !== EMPTY_VALUE &&
            edit_discount !== '' &&
            edit_price !== '' &&
            edit_quantity !== ''
        ) {
            this.props.saveDate(data)
        }
    }

    render() {
        const { edit_name, 
                edit_des, 
                edit_discount,
                edit_price, 
                edit_quantity, 
                checkValidEditDiscount, 
                checkValidEditPrice,
                checkValidEditQuantity 
            } = this.state
        const {status_edit} = this.props
        return (
            <div>
                {
                    status_edit === 'status_success' ? (
                        <PopupNotify
                            message="Updated"
                            status={status_edit}
                        />
                    ) : (
                        <div></div>
                    )
                }
                <div className='order-list-pannel-container'>
                    <div className='edit-product-header-txt'>Edit Product</div>
                </div>
                <div className='edit-product-page'>
                    <div className='ipn-common-seller mt-5 mb-3'>
                        <span className='ipn-label txt-title'>Product Name:</span>
                        <div className={edit_name !== EMPTY_VALUE ? 'ipn-product-container' : 'ipn-product-container-error'}>
                            <input
                                className={edit_name !== EMPTY_VALUE ? 'ipn-product-name' : 'ipn-product-name-error'}
                                type="text"
                                maxLength="120"
                                defaultValue={edit_name}
                                onChange={this.handleNameChange}
                            />
                            <div className='ipn-prefix'>
                                {
                                    edit_name !== EMPTY_VALUE ? edit_name.length + '/120' : '0/120'
                                }
                            </div>
                        </div>
                    </div>
                    <div className='add-product-des mt-3'>
                        <span className='ipn-label txt-title'>Product Description:</span>
                        <div className={edit_des !== EMPTY_VALUE ? 'des-txt-area-div' : 'des-txt-area-div-error'}>
                            <textarea
                                maxLength='3000'
                                onChange={this.handleDesChange}
                                className={edit_des !== EMPTY_VALUE ? 'des-txt-area' : 'des-txt-area-error'}
                                defaultValue={edit_des}
                            />
                        </div>
                    </div>
                    <div className='ipn-prefix justify-content-end'>
                        {
                            edit_des !== EMPTY_VALUE ? edit_des.length + '/3000' : '0/3000'
                        }
                    </div>
                    <div className='ipn-common-seller mt-3'>
                        <span className='ipn-label txt-title'>Price:</span>
                        <div className={checkValidEditPrice !== EMPTY_VALUE ? 'ipn-product-container' : 'ipn-product-container-error'}>
                            <div className='ipn-prefix'>
                                $
                            </div>
                            <input
                                className={checkValidEditPrice !== EMPTY_VALUE ? 'ipn-product-name' : 'ipn-product-name-error'}
                                onChange={this.handlePriceChange}
                                defaultValue={edit_price}
                                value={edit_price}
                            />
                        </div>
                    </div>
                    <div className='ipn-common-seller mt-3'>
                        <span className='ipn-label txt-title'>Discount:</span>
                        <div className={checkValidEditDiscount !== EMPTY_VALUE ? 'ipn-product-container' : 'ipn-product-container-error'}>
                            <div className='ipn-prefix'>
                                %
                            </div>
                            <input
                                className={checkValidEditDiscount !== EMPTY_VALUE ? 'ipn-product-name' : 'ipn-product-name-error'}
                                onChange={this.handleDiscountChange}
                                defaultValue={edit_discount}
                                value={edit_discount}
                            />
                        </div>
                    </div>
                    <div className='ipn-common-seller mt-3'>
                        <span className='ipn-label txt-title'>Quantity:</span>
                        <div className={checkValidEditQuantity !== EMPTY_VALUE ? 'ipn-product-container' : 'ipn-product-container-error'}>
                            <input
                                className={checkValidEditQuantity !== EMPTY_VALUE ? 'ipn-product-name' : 'ipn-product-name-error'}
                                onChange={this.handleQuantityChange}
                                defaultValue={edit_quantity}
                                value={edit_quantity}
                            />
                        </div>
                    </div>
                </div>
                <div className='btn-function'>
                    <button className='btn-a btn-cancel mr-4'>Cancel</button>
                    <button onClick={this.handleSave} disabled={this.state.disableBtn} className='btn-a btn-confirm'>Save and Publish</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveDate: (data) => dispatch(editProductById(data))
    }
}

const mapStateToProps = (state) => {
    return {
        status_edit: state.productReducer.status_edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)