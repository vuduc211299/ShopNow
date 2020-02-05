import React, {Component} from 'react'
import {connect} from 'react-redux'
import Footer from '../../Footer/Footer'
import Popup from 'reactjs-popup'
import Login from '../../auth/Login'
import '../../../css/userinfo.css'
import { userAction } from '../../../actions/userAction'

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
        if(name === 'wrong_format' || phone === 'wrong_format' || email === 'wrong_format') {
            console.log('wrong-format')
        } else {
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
                name: 'wrong_format'
            })
        }
    }


    handleEmailChange =(e) => {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(reg.test(String(e.target.value).toLowerCase()) && e.target.value !== ''){
            this.setState({
                email: e.target.value
            })
        } else{
            this.setState({
                email: 'wrong_format'
            })
        }
    }

    handlePhoneChange =(e) => {
        const reg = new RegExp('^[0-9]*$');
        if(reg.test(e.target.value) && e.target.value !== ''){
            this.setState({
                phone: e.target.value
            })
        } else {
            this.setState({
                phone: 'wrong_format'
            })
        }
    }

    render() {
        const {userProfile} = this.props;
        return (
            userProfile.user ? (
            <div className='user-profile-page'>
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
                                </div>
                                <div className='list-item-form'>
                                    Email: <input className='ipn-login' onChange={this.handleEmailChange} defaultValue={userProfile.user.email}/>
                                </div>
                                <div className='list-item-form'>
                                    Phone: <input className='ipn-login' onChange={this.handlePhoneChange} defaultValue={userProfile.user.phone}/>
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
        userProfile: state.userReducer.userInfoUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm: (user) => dispatch(userAction(user)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)