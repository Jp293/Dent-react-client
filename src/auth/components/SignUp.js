import React, { Component } from 'react'
import Recaptcha from 'react-recaptcha'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import { handleErrors, signUp, signIn } from '../api'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.handleSecurity = this.handleSecurity.bind(this)
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this)
    this.verifyCallback = this.verifyCallback.bind(this)
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      isVerified: false,
      showPassword: false,
    }
  }

  recaptchaLoaded = event => {
    console.log('recaptcha loaded')
  }

  handleSecurity = event => {

    const { flash } = this.props

    if (this.state.isVerified) {
      flash(messages.verifySuccess, 'flash-success')
    } else {
      flash(messages.verifyFailure, 'flash-error')
    }
  }
  verifyCallback = response => {
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }
  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword : !state.showPassword }))
  }

  signUp = event => {
    event.preventDefault()

    const { email, password, passwordConfirmation } = this.state
    const { flash, history, setUser, setState } = this.props

    signUp(this.state)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/dents'))
      .catch(() => this.setState({ isVerified: false }))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render () {
    const { email, password, passwordConfirmation} = this.state

    return (
      <form className='auth-form' onSubmit={this.signUp}>
        <h3>Create Account</h3>
        <TextField
          id="outlined-email-input-signup"
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
              <InputAdornment position="end">
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
        <TextField
          required
          id="outlined-adornment-pconfirmation"
          variant="outlined"
          label="Password Confirmation"
          name="passwordConfirmation"
          value={passwordConfirmation}
          placeholder="Confirm Password"
          onChange={this.handleChange}
          type={this.state.showPassword ? 'text': 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
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

        <Recaptcha
          sitekey="6LcCc5kUAAAAAFu_KDQKPPrcjvaIeKEbsmnNr2aw"
          render="explicit"
          onloadCallback={this.recaptchaLoaded}
          verifyCallback={this.verifyCallback}
        />
        <Button variant="outlined" color="primary" type="submit">
        Sign Up
        </Button>
      </form>
    )
  }
}

export default withRouter(SignUp)
// export withStyles(styles)(OutlineInputAdornments)
