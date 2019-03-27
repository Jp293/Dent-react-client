import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'


class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword : !state.showPassword }))
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  signIn = event => {
    event.preventDefault()

    const { email, password } = this.state
    const { flash, history, setUser } = this.props

    signIn(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signInSuccess, 'flash-success'))
      .then(() => history.push('/dents'))
      .catch(() => flash(messages.signInFailure, 'flash-error'))
  }

  render () {
    const { email, password } = this.state

    return (
      <form className='auth-form' onSubmit={this.signIn}>
        <h3>😁</h3>
        <TextField
          id="outlined-email-input-signin"
          className="textField"
          label="Email"
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-adornment-password"
          className="textField"
          label="Password"
          required
          name="password"
          value={password}
          type={this.state.showPassword ? 'text': 'password'}
          placeholder="Password"
          onChange={this.handleChange}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment className="icon" position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff/> : <Visibility/> }
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button variant="outlined" color="primary" type="submit">
        Sign In
        </Button>
      </form>
    )
  }
}

export default withRouter(SignIn)
