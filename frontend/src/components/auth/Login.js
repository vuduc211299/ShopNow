import React, {Component} from 'react'
import '../../css/login.css'
import {connect} from 'react-redux'
import { LoginAction } from '../../actions/authActions'
import { LOGIN_FAILED } from '../../actions/authActions'
import {EMPTY_VALUE,
        WRONG_EMAIL_FORMAT,
        PASSWORD_SHORT,
        checkEmailFormat,
        checkPasswordFormat
    } from '../../helpers/checkFormat'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            email: ''
        }
    }
    handleEmailChange = (e) => {
        this.setState({
            email: checkEmailFormat(e.target.value)
        })
    }
    handlePassChange = (e) => {
        this.setState({
            password: checkPasswordFormat(e.target.value)
        })
    }

    submitLoginForm = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        if(email === '') this.setState({
            email: EMPTY_VALUE
        })
        if(password === '') this.setState({
            password: EMPTY_VALUE
        })
        if(
            email !== '' &&
            password !== '' &&
            email !== WRONG_EMAIL_FORMAT &&
            email !== EMPTY_VALUE &&
            password !== EMPTY_VALUE &&
            password !== PASSWORD_SHORT
        ){
            this.props.loginStatus(email, password);
        }
    }

    SignUp = () => {
        this.props.changeTab();
    }
    
    render() {
        const {password, email} = this.state;
        return (
            <div className="login-page">
               <div className='login-container'>
                   <div className='d-flex justify-content-between mt-3'>
                       <span className='login-txt'>Login</span>
                       <span onClick={this.SignUp}>Sign Up</span>
                   </div>
                   {
                        this.props.status !== LOGIN_FAILED ? (
                            <div></div>
                        ) : (
                            <div className='txt-warning'> wrong name or password</div>
                        ) 
                   }
                   <div className='mt-5'>
                       <div>
                        <input type='email' className='ipn-login' placeholder="email" onChange={this.handleEmailChange}/>
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
                       <div className='mt-4'>
                        <input type="password" className='ipn-login' onChange={this.handlePassChange} placeholder="password"/>
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
                       </div>
                   </div>
                   <div className='d-flex justify-content-end mt-3'>
                       <span>Forgot password</span>
                   </div>
                   <div className='d-flex justify-content-end mt-3'>
                       <button 
                            className='btn-common'
                            onClick={this.submitLoginForm}
                        >
                            Login
                        </button>
                   </div>
                   <div className='d-flex justify-content-center p-4'>
                        <button className="loginBtn loginBtn--google">
                            Login with Google
                        </button>
                   </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.authReducer.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginStatus: (username, password) => dispatch(LoginAction(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)