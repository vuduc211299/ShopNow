import React, {Component} from 'react'
import '../../css/login.css'
import {connect} from 'react-redux'
import { LoginAction } from '../../actions/authActions'
import { LOGIN_FAILED } from '../../actions/authActions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            username: ''
        }
    }
    handleUserChange = (e) => {
        const {value} = e.target;
        if(value === ''){
            this.setState({
                username: 'wrong-input'
            })
        } else{
            this.setState({
                username: e.target.value
            })
        }
    }
    handlePassChange = (e) => {
        const {value} = e.target;
        if(value === ''){
            this.setState({
                password: 'wrong-input'
            })
        }else{
            this.setState({
                password: e.target.value
            })
        }
    }

    submitLoginForm = (e) => {
        e.preventDefault();
        const {username} = this.state;
        const {password} = this.state;
        if(username === '') {
            this.setState({
                username: 'wrong-input'
            })
        }

        if(password === '') {
            this.setState({
                password: 'wrong-input'
            })
        }
        if(username !== 'wrong-input' && password !== 'wrong-input' && username !== '' && password !== ''){
            this.props.loginStatus(username, password);
        }
    }
    
    render() {
        const {password} = this.state;
        const {username} = this.state;
        
        const IpnPassclassName = "ipn-login " + password;
        const IpnUserclassName = "ipn-login " + username;
        return (
            <div className="login-page">
               <div className='login-container'>
                   <div className='d-flex justify-content-between mt-3'>
                       <span id='login-txt'>Login</span>
                       <span>Sign Up</span>
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
                        <input className={IpnUserclassName} placeholder="Username" onChange={this.handleUserChange}/>
                        {
                            username === 'wrong-input' ? (
                                <div className='txt-warning'>
                                    Please fill this field
                                </div>
                            ): (
                                <div></div>
                            )
                        }
                       </div>
                       <div className='mt-4'>
                        <input type="password" className={IpnPassclassName} onChange={this.handlePassChange} placeholder="password"/>
                        {
                            password === 'wrong-input' ? (
                                <div className='txt-warning'>
                                    Please fill this field
                                </div>
                            ): (
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
                   <div className='d-flex justify-content-center'>
                        <button className='btn-gg'>
                           <i className="fa">&#xf1a0;</i>
                           <span className='mb-3'>Google</span>
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