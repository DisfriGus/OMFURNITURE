import React, { Component } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import fireConfig from '../Config/Firebase';
import Button from '../Atoms/Button';
import { connect } from 'react-redux';
import { registerUserAPI } from '../Config/Redux/Action';


class SignUpDialog extends Component {
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

  handleSubmit = () => {
    
    const { email, password } = this.state;
    this.props.registerAPI({auth: this.auth , email: email, password: password})
    this.setState({
      email: '',
      password:''
    })
    
  };

  render() {
    const { handleCloseSignUpDialog, handleSignUpDialog } = this.props;
    const { email, password } = this.state;
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-60"></div>
        <div className="relative sm:max-w-lg w-full p-10 bg-white rounded-xl py-16 font-inter">
          <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleSignUpDialog ? handleSignUpDialog : handleCloseSignUpDialog}
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
          <h1>Register Page</h1>
          <div>
            <input
              placeholder="Email"
              id="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChangeText}
            />
            <input
              placeholder="Password"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangeText}
            />
          </div>
          <Button onClick={this.handleSubmit} title="Register" loading={this.props.isLoading}/>
          
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading : state.isLoading
})

const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(SignUpDialog);