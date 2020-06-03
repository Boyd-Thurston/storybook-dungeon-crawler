import React from 'react'

export class Register extends React.Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <>
        <h2>Register</h2>
        <form>
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
            <input type='submit' value='Register'/>:
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