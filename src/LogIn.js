// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div className="log-in">
         <h1 className="heading">Log In</h1>

        <form onSubmit={this.handleSubmit} className="log-in-form">
          
          <div>
            <label htmlFor="userName">User Name:</label> 
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />
          </div>

          <div>
            <input type="submit" value="Log In" className="log-in-btn" />
          </div>
          
        </form>
      </div>
    )
  }
}

export default LogIn;