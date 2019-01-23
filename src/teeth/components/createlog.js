import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { CreateLogApi } from '../teethApi'
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
        <label htmlFor="pain_level">Pain Level</label>
        <input
          required
          type="pain_level"
          name="pain_level"
          value={pain_level}
          placeholder="Pain Level"
          onChange={this.handleChange}
        />
        <label htmlFor="sensitivity">Sensitivity</label>
        <input
          required
          name="sensitivity"
          value={sensitivity}
          type="sensitivity"
          placeholder="Sensitivity"
          onChange={this.handleChange}
        />
        <label htmlFor="how_long">How Long</label>
        <input
          required
          name="how_long"
          value={how_long}
          type="how_long"
          placeholder="How Long"
          onChange={this.handleChange}
        />
        <label htmlFor="medications">Medications</label>
        <input
          required
          name="medications"
          value={medications}
          type="medications"
          placeholder="Medications"
          onChange={this.handleChange}
        />
        <button type="submit">Create Log</button>
      </form>
    )
  }
}

export default withRouter(CreateLog)
