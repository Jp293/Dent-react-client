import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { handleErrors, createLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'
import './Dentlogs.scss'


class CreateLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      dent: {
        pain_level: '',
        sensitivity: '',
        how_long: '',
        medications: '',
        notes: ''
      },
      user: props.user,
      created: false
    }
  }

  handleChange = event => {
    const editedTeeth = { ...this.state.dent, [event.target.name]: event.target.value }
    this.setState({ dent: editedTeeth })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {flash, user, history} = this.props
    const { dent  } = this.state

    createLogApi(this.state.dent, user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(() => flash(logMessages.createLogSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .then(() => history.push('/dents'))
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {
    const { id } = this.state

    return (
      <form className='create-form' onSubmit={this.handleSubmit}>
        <h3>Create Log</h3>
        <label htmlFor="pain_level">Pain Level: </label>
        <input
          required
          type="number"
          name="pain_level"
          min="0"
          max="10"
          value={this.state.dent.pain_level}
          placeholder="Scale 0 - 10"
          onChange={this.handleChange}
        />
        <label htmlFor="sensitivity">Sensitivity: </label>
        <input
          required
          type="number"
          name="sensitivity"
          min="0"
          max="10"
          value={this.state.dent.sensitivity}
          placeholder="Scale 0 - 10"
          onChange={this.handleChange}
        />
        <label htmlFor="how_long">How Long: </label>
        <input
          required
          name="how_long"
          value={this.state.dent.how_long}
          placeholder="ex. 2 days/3 weeks/1 month"
          onChange={this.handleChange}
        />
        <label htmlFor="medications">Medications: </label>
        <input
          name="medications"
          value={this.state.dent.medications}
          type="medications"
          placeholder="Ibuprofren/Aspirin/etc?"
          onChange={this.handleChange}
        />
        <label htmlFor="notes">Notes: </label>
        <input
          name="notes"
          value={this.state.dent.notes}
          type="notes"
          placeholder="Any other symptoms?"
          onChange={this.handleChange}
        />
        <button type="submit">Create Log</button>
      </form>
    )
  }
}

export default withRouter(CreateLog)
