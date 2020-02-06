import React, {Component} from 'react'
import '../../css/signUp.css'

class SignUp extends Component {
    LogIn = () => {
        this.props.changeTab();
    }

    render() {
        return (
            <div className='sign-up'>
                <div className='sign-up-container'>
                    <div className='sign-up-container-header d-flex justify-content-between'>
                        <div className='login-txt'>Sign Up</div>
                        <div onClick={this.LogIn}>Log in</div>
                    </div>
                    <div className='sign-up-container-body mt-5'>
                        <input className='ipn-login mt-2' placeholder="email"/>
                        <input className='ipn-login mt-2' placeholder="password"/>
                        <input className='ipn-login mt-2' placeholder="phone"/>
                    </div>
                    <div className="sign-up-container-footer mt-5">
                        <div className='d-flex justify-content-end'>
                            <button className='btn-common'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp