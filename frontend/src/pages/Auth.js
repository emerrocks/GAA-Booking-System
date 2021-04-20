import React, { Component } from 'react'
import AuthContext from '../context/auth-context'
import './Auth.css'

class AuthPage extends Component {
  state = {
    isLogin: true,
    email: '',
    password: '',
    confirmPassword: '',
  }

  static contextType = AuthContext

  constructor(props) {
    super(props)
    this.emailElement = React.createRef()
    this.passwordElement = React.createRef()
    this.confirmPasswordElement = React.createRef()
  }

  handlePasswordChange = () => {
    const { password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('Passwords do not match')
    }
  }

  switchModeHandler = () => {
    this.setState((prevState) => {
      return { isLogin: !prevState.isLogin }
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const email = this.emailElement.current.value
    const password = this.passwordElement.current.value
    const confirmPassword = this.confirmPasswordElement.current.value

    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0
    ) {
      return
    }
    let requestBody = {
      query: `
        query Login($email: String!, $password: String! $confirmPassword: String!){ 
          login(email: $email, password: $password, confirmPassword: $confirmPassword){
          userId
          token
          tokenExpiration
        }
      }
      `,
      variables: {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      },
    }
    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!, $confirmPassword: String!) {
            createUser(userInput: {email: $email, password: $password, confirmPassword: $confirmPassword}){
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
      }
    }

    fetch('http://localhost:8080/api', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!')
        }
        return res.json()
      })
      .then((resData) => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration,
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="welcome">
          <h1>
            Welcome to the {this.state.isLogin ? 'Login Page' : 'Sign Up Page'}
          </h1>
        </div>
        <div className="form-control">
          <label htmlFor="email">
            Email Address<span className="mandatory">*</span>
          </label>
          <input
            type="email"
            id="email"
            ref={this.emailElement}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">
            Password <span className="mandatory">*</span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            ref={this.passwordElement}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirmPassword">
            Confirm Password <span className="mandatory">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            onSubmit={this.handlePasswordChange}
            ref={this.confirmPasswordElement}
            required
          />
          {console.log(this.handlePasswordChange)}
        </div>
        <div className="form-actions">
          <button type="submit"> Submit </button>
          <button type="button" onClick={this.switchModeHandler}>
            Switch to {this.state.isLogin ? 'Signup' : 'Login'}
          </button>
        </div>
      </form>
    )
  }
}

export default AuthPage
