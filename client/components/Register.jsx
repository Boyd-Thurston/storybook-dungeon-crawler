import React from 'react'
import {loginError, registerUserRequest} from '../actions/auth'

export class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.reset()
    let {username, password, confirm_password, contact_details, email_address} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(registerUserRequest({username, password, contact_details, email_address}, confirmSuccess))
  }

  render(){
    return (
      <>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
          </label>
          <input name='username' value={this.state.username} onChange={this.handleChange}/>
          <label>
            Password:
          </label>
          <input name='password' value={this.state.password} onChange={this.handleChange} type='password'/>
          <label>
            Confirm password:
          </label>
          <input name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange} type='password'/>
          {this.state.password != '' && this.state.password == this.state.confirmPassword? 
            <input type='submit' value='Register' />:
            <>
              <p>passwords do not match</p>
              <input type='submit' value='Register' disabled/>
            </>
          }
        </form>
      </>
    )
  }

}

export default Register