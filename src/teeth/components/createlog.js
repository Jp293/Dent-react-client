import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
        <TextField
          id="pain-level-create"
          label="Pain Level"
          required
          name="pain_level"
          value={this.state.dent.pain_level}
          type="number"
          min="0"
          max="10"
          placeholder="Scale 0 - 10"
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="sensitivity-create"
          label="Sensitivity"
          required
          name="sensitivity"
          value={this.state.dent.sensitivity}
          type="number"
          min="0"
          max="10"
          placeholder="Scale 0 - 10"
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="how-long-create"
          label="How Long"
          required
          name="how_long"
          value={this.state.dent.how_long}
          placeholder="ex. 2 days/3 weeks/1 month"
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="medications-create"
          label="Medications"
          name="medications"
          value={this.state.dent.medications}
          type="text"
          placeholder="Ibuprofren/Aspirin/None?"
          onChange={this.handleChange}
          variant="outlined"
        />
        <TextField
          id="notes-create"
          label="Notes"
          name="notes"
          value={this.state.dent.notes}
          type="text"
          placeholder="Any other symptoms?"
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

export default withRouter(CreateLog)
