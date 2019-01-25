import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { handleErrors, createLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'


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
    console.log(editedTeeth)
    this.setState({ dent: editedTeeth })
  }

  handleSubmit = event => {
    event.preventDefault()
    const {flash, user} = this.props
    const { dent  } = this.state

    createLogApi(this.state.dent, user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(() => flash(logMessages.createLogSuccess, 'flash-success'))
      // Do I even need history.push?
      .then(() => history.push('/'))
      .catch(console.log)
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {
    const { id } = this.state

    return (
      <form className='create-form' onSubmit={this.handleSubmit}>
        <h3>Create Log</h3>
        <label htmlFor="pain_level">Pain Level</label>
        <input
          required
          type="pain_level"
          name="pain_level"
          value={this.state.dent.pain_level}
          placeholder="Pain Level"
          onChange={this.handleChange}
        />
        <label htmlFor="sensitivity">Sensitivity</label>
        <input
          required
          name="sensitivity"
          value={this.state.dent.sensitivity}
          type="sensitivity"
          placeholder="Sensitivity"
          onChange={this.handleChange}
        />
        <label htmlFor="how_long">How Long</label>
        <input
          required
          name="how_long"
          value={this.state.dent.how_long}
          type="how_long"
          placeholder="How Long"
          onChange={this.handleChange}
        />
        <label htmlFor="medications">Medications</label>
        <input
          required
          name="medications"
          value={this.state.dent.medications}
          type="medications"
          placeholder="Medications"
          onChange={this.handleChange}
        />
        <label htmlFor="notes">Notes</label>
        <input
          required
          name="notes"
          value={this.state.dent.notes}
          type="notes"
          placeholder="Notes"
          onChange={this.handleChange}
        />
        <button type="submit">Create Log</button>
      </form>
    )
  }
}

export default withRouter(CreateLog)
