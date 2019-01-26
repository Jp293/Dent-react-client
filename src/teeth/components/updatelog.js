import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {  Redirect } from 'react-router-dom'
import { handleErrors, updateLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'
import DentalForm from './DentalForm'

class UpdateLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      updated: false,
      dent: {
        pain_level: '',
        sensitivity: '',
        how_long: '',
        medications: '',
        notes: ''
      }
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
  }

  handleChange = event => {
    const editedTeeth = { ...this.state.dent, [event.target.name]: event.target.value }
    this.setState({ dent: editedTeeth })
  }

  handleSubmit = event => {
    event.preventDefault()

    const {flash, user, history } = this.props
    const id = this.props.match.params.id

    updateLogApi(user, this.state.dent, id)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({updated: true}))
      .then(() => flash(logMessages.updateLogSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .then(() => history.push('/dents'))
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {
    const id = this.props.match.params.id
    if (this.state.updated) {
      return <Redirect to={`/dents/${id}`}/>
    }
    const {pain_level, sensitivity, how_long, medications, notes} = this.state.dent
    return (
      <DentalForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        dent={this.state.dent} />

    )
  }
}

export default withRouter(UpdateLog)
