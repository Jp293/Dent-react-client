import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Recaptcha from 'react-recaptcha'
import { handleErrors, signUp, signIn } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

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
      isVerified: false
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

        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <Recaptcha
          sitekey="6LcCc5kUAAAAAFu_KDQKPPrcjvaIeKEbsmnNr2aw"
          render="explicit"
          onloadCallback={this.recaptchaLoaded}
          verifyCallback={this.verifyCallback}
        />
        <button onClick={this.handleSecurity} type="submit">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUp)
