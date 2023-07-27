import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loginUserAPI } from '../Config/Redux/Action';
import { getAuth } from 'firebase/auth';
import fireConfig from '../Config/Firebase';
import Button from '../Atoms/Button';
import { Navigate } from 'react-router-dom';

class LoginDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false
        };
        this.auth = getAuth(fireConfig)
    }
    handleChangeText = (e) => {
        const { id, value } = e.target;
        this.setState({ [id]: value });
      };

    handleSubmit = async() => {

        const { email, password } = this.state;
        const {history} = this.props
        const res = await this.props.loginAPI({ auth: this.auth, email: email, password: password }).catch(err => err)
        if (res === true){
            console.log('Login Sukses')
            this.setState({
                email: '',
                password: ''
              })
              
            
            
        }else{
            console.log("Login Failed")
        }

    };
    changeUser = () => {
        this.props.changeUserName()
    }
    render() {
        const { handleCloseLogin, handleShowDialog } = this.props;
        
        

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-60"></div>
            <div className="relative sm:max-w-lg w-full p-10 bg-white rounded-xl py-16 font-inter">
              <button
                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={handleShowDialog ? handleShowDialog : handleCloseLogin}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h1 className='font-bold text-[#031C32] text-4xl'>Login Page</h1>
              <div>
                <div className='flex flex-col gap-2'>
                  <h1 className='font-semibold text-[#031C32]'>Email</h1>
                  <div className='w-full border-[2px] border-slate-200 px-4 py-3 rounded-lg'>
                    <input
                      className='outline-none'
                      placeholder="Email"
                      id="email"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChangeText}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-[#031C32]' >Password</h1>
                    <div className='w-full border-[2px] border-slate-200 px-4 py-3 rounded-lg'>
                      <input
                        className='outline-none'
                        placeholder="Password"
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChangeText}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={this.handleSubmit} title="Login" loading={this.props.isLoading} />
    
            </div>
          </div>
            )
    }

}



const reduxState = (state) => ({
    isLoading: state.isLoading
  })
  
  const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
  })



export default connect(reduxState, reduxDispatch)(LoginDialog)
