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
import history from '../../common/history'

class UserInfo extends Component {
    constructor(props) {
        super(props)
        const {userProfile} = this.props;
        this.state = {
            name: userProfile.user.name,
            email: userProfile.user.email,
            phone: userProfile.user.phone
        }
    }

    handleSubmit = () => {
        const {name, phone, email} = this.state;
        const data = {
            name,
            email,
            phone
        }
        if (
            name !== EMPTY_VALUE &&
            email !== WRONG_EMAIL_FORMAT &&
            email !== EMPTY_VALUE &&
            phone !== EMPTY_VALUE &&
            phone !== WRONG_PHONE_FORMAT
        ) {
            this.props.submitForm(data)
        }
        this.forceUpdate()
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

    render() {
        const {userProfile, updateStatus} = this.props;
        const {name, phone, email} = this.state;
        console.log(updateStatus)
        return (
            userProfile.user ? (
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
                        <PopUpNotify message="Update failed" status={updateStatus}/>
                        
                    ) : (
                        <div>

                        </div>
                    )
                }
                <div className='user-profile-content container d-flex mb-5'>
                    <div className='user-profile-left d-flex'>
                        <i className='fa icon-user'>&#xf2bd;</i>
                        <span className='txt-name ml-3'>{userProfile.user.name}</span>
                    </div>
                    <div className='user-profile-right'>
                        <div className='txt-account mb-3'>
                            <span className='mb-3'>My account</span>
                        </div>
                        <div className='form-fill-user-profile d-flex'>
                            <div className='form-user'>
                                <div className='list-item-form'>
                                    Name: <input className='ipn-login' onChange={this.handleNameChange} defaultValue={userProfile.user.name}/>
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
                                    Email: <input className='ipn-login' onChange={this.handleEmailChange} defaultValue={userProfile.user.email}/>
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
                                    Phone: <input className='ipn-login' onChange={this.handlePhoneChange} defaultValue={userProfile.user.phone}/>
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
                                    <div className='ml-3 mt-3'>
                                        <button>Upload</button>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
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
        submitForm: (user) => dispatch(userAction(user)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)