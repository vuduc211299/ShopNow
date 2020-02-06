import React, {Component} from 'react'
import '../../css/signUp.css'
import {connect} from 'react-redux'
import {SignUpAction, SIGNUP_FAILED, SIGNUP_SUCCESS} from '../../actions/authActions'

import { EMPTY_VALUE,
         WRONG_EMAIL_FORMAT,
         WRONG_PHONE_FORMAT,
         PASSWORD_SHORT,
         ERROR_CONFIRM_PASSWORD,
         checkEmailFormat,
         checkPasswordFormat,
         checkPhoneFormat,
         confirmPassword
        } from '../../helpers/checkFormat'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleNameChange = (e) => {
        if(e.target.value === ''){
            this.setState({
                name: EMPTY_VALUE
            })
        }else {
            this.setState({
                name: e.target.value
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

    handlePasswordChange = (e) => {
        this.setState({
            password: checkPasswordFormat(e.target.value)
        })
    }

    confirmPasswordChange = (e) => {
        const {password} = this.state;
        this.setState({
            confirmPassword: confirmPassword(password, e.target.value)
        })
    }

    handleSignUp = () => {
        const {name, email, password, phone, confirmPassword} = this.state;
        const user = {
            name,
            email,
            password,
            phone
        }
        if(email === '') this.setState({
            email: EMPTY_VALUE
        })
        if(password === '') this.setState({
            password: EMPTY_VALUE
        })
        if(name === '') this.setState({
            name: EMPTY_VALUE
        })
        if(phone === '') this.setState({
            phone: EMPTY_VALUE
        })
        if(confirmPassword === '') this.setState({
            confirmPassword: EMPTY_VALUE
        })
        if( name !== '' &&
            email !== '' &&
            password !== '' &&
            confirmPassword !== '' &&
            phone !== '' &&
            name !== EMPTY_VALUE &&
            email !== WRONG_EMAIL_FORMAT &&
            email !== EMPTY_VALUE &&
            password !== EMPTY_VALUE &&
            password !== PASSWORD_SHORT &&
            confirmPassword !== EMPTY_VALUE &&
            confirmPassword !== ERROR_CONFIRM_PASSWORD &&
            phone !== EMPTY_VALUE &&
            phone !== WRONG_PHONE_FORMAT
          ) {
            this.props.clickSignUp(user)
          }
    } 

    LogIn = () => {
        this.props.changeTab();
    }

    render() {
        const {status} = this.props;
        const {name, email, password, phone, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <div className='sign-up-container'>
                    <div className='sign-up-container-header d-flex justify-content-between'>
                        <div className='login-txt'>Sign Up</div>
                        <div onClick={this.LogIn}>Log in</div>
                    </div>
                    {
                        status === SIGNUP_FAILED ? (
                            <div className='txt-warning'>
                                Email or phone are already exist
                            </div>
                        ) : status === SIGNUP_SUCCESS ? (
                            <div>
                                Sign Up success
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                    <div className='sign-up-container-body mt-5'>
                        <input className='ipn-login mt-2' onChange={this.handleNameChange} placeholder="name"/>
                        {
                            name === EMPTY_VALUE ? (
                                <div className='txt-warning'>
                                    {EMPTY_VALUE}
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                        <input className='ipn-login mt-2' onChange={this.handleEmailChange} placeholder="email"/>
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
                        <input className='ipn-login mt-2' onChange={this.handlePhoneChange} placeholder="phone"/>
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
                        <input type="password" className='ipn-login mt-2' onChange={this.handlePasswordChange} placeholder="password"/>
                        {
                            password === EMPTY_VALUE || password === PASSWORD_SHORT ? password === EMPTY_VALUE ? (
                                <div className='txt-warning'>
                                    {EMPTY_VALUE}
                                </div>
                            ) : (
                                <div className='txt-warning'>
                                    {PASSWORD_SHORT}
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                        <input type="password" className='ipn-login mt-2' onChange={this.confirmPasswordChange} placeholder="Confirm password"/>
                        {
                            confirmPassword === EMPTY_VALUE || confirmPassword === ERROR_CONFIRM_PASSWORD ? confirmPassword === EMPTY_VALUE ? (
                                <div className='txt-warning'>
                                    {EMPTY_VALUE}
                                </div>
                            ) : (
                                <div className='txt-warning'>
                                    {ERROR_CONFIRM_PASSWORD}
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                    <div className="sign-up-container-footer mt-5">
                        <div className='d-flex justify-content-end'>
                            <button onClick={this.handleSignUp} className='btn-common'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickSignUp: (user) => dispatch(SignUpAction(user))
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authReducer.statusSignUp
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)