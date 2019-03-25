import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Recaptcha from 'react-recaptcha'
import { handleErrors, signUp, signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'

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
    if (this.state.isVerified) {
      alert(messages.verifySuccess, 'flash-success')
    } else {
      alert(messages.verifyFailure, 'flash-error')
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

    const { email, password, passwordConfirmation, verifyCallback, recaptchaLoaded, handleSecurity} = this.state
    const { flash, history, setUser } = this.props

    signUp(this.state)
      .then(recaptchaLoaded)
      .then(handleSecurity)
      .then(verifyCallback)
      .then(handleErrors)
      .then(() => signIn(this.state))
      .then(handleErrors)
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.signUpSuccess, 'flash-success'))
      .then(() => history.push('/dents'))
      .catch(() => flash(messages.signUpFailure, 'flash-error'))
  }

  render () {
    const { email, password, passwordConfirmation} = this.state

    return (
      <form className='auth-form' onSubmit={this.signUp}>
        <h3>Sign Up</h3>
        <TextField
          id="outlined-email-input"
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
          required
          id="outlined-adornment-password"
          variant="outlined"
          label="Password"
          name="password"
          value={password}
          placeholder="Password"
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
        <Button variant="outlined" color="primary" onClick={this.handleSecurity} type="submit">
        Sign Up
        </Button>
      </form>
    )
  }
}

export default withRouter(SignUp)
// export withStyles(styles)(OutlineInputAdornments)
