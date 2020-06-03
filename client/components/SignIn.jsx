import React from 'react'

export class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = () => {
    signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(() => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  render() {
    return (
      <>
        <h2>Sign In</h2>
        <label>Username:</label>
        <input name='username' value={this.state.username} onChange={this.handleChange}/>
        <label>Password:</label>
        <input name='password' value={this.state.password} onChange={this.handleChange} type='password'/>
        <button type='button' onClick={handleClick}>Sign in</button>
      </>
    )
  }
}