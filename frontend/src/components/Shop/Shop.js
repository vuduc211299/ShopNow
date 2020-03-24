import React, {Component} from 'react'
import NavBar from './Navbar'
import BackMenu from './BackMenu'
import '../../css/backMenu.css'
import '../../css/shop.css'
import {connect} from 'react-redux'
import { EMPTY_VALUE } from '../../helpers/checkFormat'
import { updateShopProfileAction } from '../../actions/shop/shopAction'
import PopUpNotify from '../common/PopUpNotify'

class Shop extends Component {

    constructor (props) {
        super(props)
        const {shopProfile} = this.props;
        this.state = {
            name: shopProfile.name,
            des: shopProfile.description,
            file: shopProfile.image
        }
    }

    componentWillUnmount(){
        this.props.refreshStatus()
    }

    handleNameChange = (e) => {
        if(e.target.value !== ''){
            this.setState({
                name: e.target.value
            })
        } else {
            this.setState({
                name: EMPTY_VALUE
            })
        }
    }

    handleDesChange = (e) => {
        if(e.target.value !== ''){
            this.setState({
                des: e.target.value
            })
        } else {
            this.setState({
                des: EMPTY_VALUE
            })
        }
    }

    handleUploadImg = () => {
        document.getElementById("ipn-upload-img").click()
    }

    uploadImg = (e) => {
        if(e.target.files[0].type === 'image/png' || 
            e.target.files[0].type === 'image/jpg' || 
            e.target.files[0].type === 'image/jpeg'){
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                this.setState({
                    file: reader.result
                });
            }
        } else {
            alert('this file is only supported jpg, png, jpeg file')
        }
    }

    handleSubmit = () => {
        this.props.refreshStatus()
        const { name, file, des } = this.state;
        const data = {
            name,
            image: file,
            description: des
        }
        if(name !== EMPTY_VALUE) {
            this.props.updateProfile(data)
        }
    }

    render() {
        const {name} = this.state
        const {shopProfile, updateStatus} = this.props
        return (
            <div>
                {   
                    updateStatus === 'status_success' ? (
                        <PopUpNotify message="Update success" status={updateStatus}/>
                    ) : (
                        <div>

                        </div>
                    )
                }
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
                                            <img src={shopProfile.image} width='640px' height='427px'/>
                                        </div>
                                        <div className='shop-detail-ipn w-100'>
                                            <div>
                                                <div className= 'ipn-label txt-title'>Shop Name</div>
                                                <div className='ipn-product-container'>
                                                    <input 
                                                        onChange={this.handleNameChange} 
                                                        defaultValue={shopProfile.name} 
                                                        maxLength="50" 
                                                        className='ipn-product-name'/>  
                                                </div>
                                                {
                                                    name === EMPTY_VALUE ? (
                                                        <div className='txt-warning'>
                                                            {EMPTY_VALUE}
                                                        </div>
                                                    ) : (
                                                        <div></div>
                                                    )
                                                }
                                            </div>
                                            <div className='mt-3'>
                                                <div className= 'ipn-label txt-title'>Image</div>
                                                <div className='upload-img-div' onClick={this.handleUploadImg}>
                                                    <div>
                                                        <i className="fa fa-plus-img">&#xf055;</i>
                                                    </div>
                                                </div>
                                                <input onChange={this.uploadImg} id='ipn-upload-img' type="file" hidden/>
                                            </div>
                                            <div className='mt-3'>
                                                <div className= 'ipn-label txt-title'>Shop Description</div>
                                                <div className='ipn-product-container'>
                                                    <input 
                                                        defaultValue={shopProfile.description}
                                                        onChange={this.handleDesChange} 
                                                        className='ipn-product-name' 
                                                        maxLength="500"
                                                        type="textarea"
                                                    />
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center mt-3'>
                                                <button onClick={this.handleSubmit} className='btn-a btn-confirm'>Save</button>
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

const mapStateToProps = (state) => {
    return {
        shopProfile: state.shopReducer.shop,
        updateStatus: state.shopReducer.updateState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProfile: (data) => dispatch(updateShopProfileAction(data)),
        refreshStatus: () => dispatch({type: 'REFRESH_STATUS_1'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)