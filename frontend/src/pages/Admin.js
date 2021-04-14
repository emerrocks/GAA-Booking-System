import React, { Component } from 'react'
import AuthContext from '../context/auth-context'
import './Admin.css'

class AdminPage extends Component {
  state = {
    isAdminLogin: true,
    email: '',
    password: '',
    confirmPassword: '',
  }

  static contextType = AuthContext

  constructor(props) {
    super(props)
    this.adminEmailElement = React.createRef()
    this.adminPasswordElement = React.createRef()
    this.adminConfirmPasswordElement = React.createRef()
  }

  handlePasswordChange = () => {
    const { password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert('Passwords do not match')
    }
  }

  switchModeHandler = () => {
    this.setState((prevState) => {
      return { isAdminLogin: !prevState.isAdminLogin }
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    const email = this.adminEmailElement.current.value
    const password = this.adminPasswordElement.current.value
    const confirmPassword = this.adminConfirmPasswordElement.current.value

    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0
    ) {
      return
    }
    let requestBody = {
      query: `
        query AdminLogin($email: String!, $password: String! $confirmPassword: String!){ 
          adminLogin(email: $email, password: $password, confirmPassword: $confirmPassword){
          adminId
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
    if (!this.state.isAdminLogin) {
      requestBody = {
        query: `
          mutation CreateAdmin($email: String!, $password: String!, $confirmPassword: String!) {
            createAdmin(adminInput: {email: $email, password: $password, confirmPassword: $confirmPassword}){
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
        if (resData.data.adminLogin.token) {
          this.context.adminLogin(
            resData.data.adminLogin.token,
            resData.data.adminLogin.adminId,
            resData.data.adminLogin.tokenExpiration,
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <form className="admin-form" onSubmit={this.submitHandler}>
        <div className="welcome">
          <h1>
            Welcome to the {this.state.isAdminLogin ? 'Login Page' : 'Sign Up Page'}
          </h1>
        </div>
        <div className="form-control">
          <label htmlFor="email">
            Email Address<span className="mandatory">*</span>
          </label>
          <input
            type="email"
            id="email"
            ref={this.adminEmailElement}
            placeholder="Enter email address"
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
            ref={this.adminPasswordElement}
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
            ref={this.adminConfirmPasswordElement}
          />
          {console.log(this.handlePasswordChange)}
        </div>
        <div className="form-actions">
          <button type="submit"> Submit </button>
          <button type="button" onClick={this.switchModeHandler}>
            Switch to {this.state.isAdminLogin ? 'Signup' : 'Login'}
          </button>
        </div>
      </form>
    )
  }
}

export default AdminPage
