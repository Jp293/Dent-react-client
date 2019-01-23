import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { CreateLog } from '../teethApi'
import messages from '../teethMessages'
import apiUrl from '../../apiConfig'

class CreateLog extends Component {
  constructor () {
    super()

    this.state = {
      id:null,
      dent: {
        pain_level: '',
        sensitivity: '',
        how_long: '',
        medications: '',
        notes: ''
      }
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  CreateLog = event => {
    event.preventDefault()

    const {  } = this.state
    const {  } = this.props

    CreateLog(this.state)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(res => setUser(res.user))
      .then(() => flash(messages.CreateLogSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.LogFailure, 'flash-error'))
  }

  render () {
    const { id } = this.state

    return (
      <form className='create-form' onSubmit={this.CreateLog}>
        <h3>Create Log</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          value={email}
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
        <button type="submit">Create Log</button>
      </form>
    )
  }
}

export default withRouter(SignIn)
