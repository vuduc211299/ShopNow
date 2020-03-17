import React, {Component} from 'react'
import {connect} from 'react-redux'
import Footer from '../../Footer/Footer'
import Popup from 'reactjs-popup'
import Login from '../../auth/Login'
import '../../../css/userinfo.css'
import { userAction } from '../../../actions/userAction'
import PopUpNotify from '../../common/PopUpNotify'
import { EMPTY_VALUE,
    WRONG_EMAIL_FORMAT,
    WRONG_PHONE_FORMAT,
    checkPhoneFormat,
    checkEmailFormat
   } from '../../../helpers/checkFormat'
import NavBar from '../../Header/NavBar'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        const {userProfile} = this.props;
        this.state = {
            name: userProfile.name,
            email: userProfile.email,
            phone: userProfile.phone,
            address: userProfile.address
        }
    }

    componentWillUnmount(){
        this.props.refreshStatus()
    }

    handleSubmit = () => {
        this.props.refreshStatus()
        const {name, phone, email, address} = this.state;
        const data = {
            name,
            email,
            phone,
            address
        }
        if (
            name !== EMPTY_VALUE &&
            email !== WRONG_EMAIL_FORMAT &&
            email !== EMPTY_VALUE &&
            phone !== EMPTY_VALUE &&
            phone !== WRONG_PHONE_FORMAT &&
            address !== EMPTY_VALUE
        ) {
            this.props.submitForm(data)
        }
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


    handleEmailChange =(e) => {
        this.setState({
            email: checkEmailFormat(e.target.value)
        })
    }

    handlePhoneChange =(e) => {
        this.setState({
            phone: checkPhoneFormat(e.target.value)
        })
    }

    handleAddressChange = (e) => {
        if(e.target.value !== ''){
            this.setState({
                address: e.target.value
            })
        } else {
            this.setState({
                address: EMPTY_VALUE
            })
        }
    }

    render() {
        const {userProfile, updateStatus} = this.props;
        const {name, phone, email, address} = this.state;
        return (
            userProfile ? (
            <div>
                <NavBar/>
                <div className='user-profile-page'>
                    {   
                        updateStatus === 'status_success' ? (
                            <PopUpNotify message="Update success" status={updateStatus}/>
                        ) : (
                            <div>

                            </div>
                        )
                    }
                    {
                        updateStatus === 'status_failed' ? (
                            <PopUpNotify message="Update failed, email or phone have already exist" status={updateStatus}/>
                            
                        ) : (
                            <div>

                            </div>
                        )
                    }
                    <div className='user-profile-content container d-flex mb-5'>
                        <div className='user-profile-left d-flex'>
                            <i className='fa icon-user'>&#xf2bd;</i>
                            <span className='txt-name ml-3'>{userProfile.name}</span>
                        </div>
                        <div className='user-profile-right'>
                            <div className='txt-account mb-3'>
                                <span className='mb-3'>My account</span>
                            </div>
                            <div className='form-fill-user-profile d-flex'>
                                <div className='form-user'>
                                    <div className='list-item-form'>
                                        Name: <input className='ipn-login' onChange={this.handleNameChange} defaultValue={userProfile.name}/>
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
                                    <div className='list-item-form'>
                                        Email: <input className='ipn-login' onChange={this.handleEmailChange} defaultValue={userProfile.email}/>
                                        {
                                            email === EMPTY_VALUE || email === WRONG_EMAIL_FORMAT ? email === EMPTY_VALUE ? (
                                                <div className='txt-warning'>
                                                    {EMPTY_VALUE}
                                                </div>
                                            ) : (
                                                <div className='txt-warning'>
                                                    {WRONG_EMAIL_FORMAT}
                                                </div>
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                    </div>
                                    <div className='list-item-form'>
                                        Phone: <input className='ipn-login' onChange={this.handlePhoneChange} defaultValue={userProfile.phone}/>
                                        {
                                            phone === EMPTY_VALUE || phone === WRONG_PHONE_FORMAT ? phone === EMPTY_VALUE ? (
                                                <div className='txt-warning'>
                                                    {EMPTY_VALUE}
                                                </div>
                                            ) : (
                                                <div className='txt-warning'>
                                                    {WRONG_PHONE_FORMAT}
                                                </div>
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                    </div>
                                    <div className='list-item-form'>
                                        Address: <input className='ipn-login' onChange={this.handleAddressChange} defaultValue={userProfile.address}/>
                                        {
                                            address === EMPTY_VALUE  ? (
                                                <div className='txt-warning'>
                                                    {EMPTY_VALUE}
                                                </div>
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                    </div>
                                    <div className='list-item-form'>
                                        <button 
                                            className='btn-common'
                                            onClick={this.handleSubmit}
                                        >
                                            Save
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className='img-upload'>
                                    <div>
                                        <div>
                                            <i className='fa icon-user-2'>&#xf2bd;</i>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
            ) : (
                <Popup
                    open={true}
                    modal
                >
                    <Login/>
                </Popup>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.userReducer.userInfoUpdate,
        updateStatus: state.userReducer.updateStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (user) => dispatch(userAction(user)),
        refreshStatus: () => dispatch({type: 'REFRESH_STATUS'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)