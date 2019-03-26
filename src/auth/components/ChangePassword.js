import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, changePassword } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: '',
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  changePassword = event => {
    event.preventDefault()

    const { oldPassword, newPassword } = this.state
    const { flash, history, user } = this.props

    changePassword(this.state, user)
      .then(handleErrors)
      .then(() => flash(messages.changePasswordSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.changePasswordFailure, 'flash-error'))
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <form className='auth-form' onSubmit={this.changePassword}>
        <h3>Change Password</h3>
        <TextField
          id="outlined-email-input-chpw"
          label="Old Password"
          required
          name="oldPassword"
          value={oldPassword}
          type="password"
          placeholder="Old Password"
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-email-input-nwpw"
          label="New Password"
          required
          name="newPassword"
          value={newPassword}
          type="password"
          placeholder="New Password"
          onChange={this.handleChange}
          variant="outlined"
        />
        <Button variant="outlined" color="primary" type="submit">
        Submit
        </Button>
      </form>
    )
  }
}

export default withRouter(ChangePassword)
