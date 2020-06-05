import React from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'

export class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let {username, password} = this.state
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(loginUser({username, password}, confirmSuccess))
  }

  render() {
    return (
      <>
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input name='username' value={this.state.username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input name='password' value={this.state.password} onChange={this.handleChange} type='password'/>
          <input type='submit' value='Register' />
        </form>
      </>
    )
  }
}

export default SignIn