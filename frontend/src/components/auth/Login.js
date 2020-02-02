import React, {Component} from 'react'
import '../../css/login.css'

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
                username: '',
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
                password: '',
            })
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
                   <div className='mt-5'>
                       <div>
                        <input className={IpnUserclassName} placeholder="Username" onChange={this.handleUserChange}/>
                        {
                            username !== '' ? (
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
                            password !== '' ? (
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

export default Login