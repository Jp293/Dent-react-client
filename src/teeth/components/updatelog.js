import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link, Redirect } from 'react-router-dom'
import { handleErrors, updateLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'
import DentalForm from './DentalForm'

class UpdateLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      updated: false,
      // might need to be plural
      dents: {
        pain_level: '',
        sensitivity: '',
        how_long: '',
        medications: '',
        notes: ''
      }
    }
  }

  handleChange = event => {
    const editedTeeth = { ...this.state.dent, [event.target.name]: event.target.value }
    console.log(editedTeeth)
    this.setState({ dent: editedTeeth })
  }

  handleSubmit = event => {
    event.preventDefault()

    // const {flash, user} = this.props
    // const { dent  } = this.state

    updateLogApi(this.state.dent, this.props.user, this.props.flash)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({dents: data.dents}))
      .then(() => flash(teethMessages.updateLogSuccess, 'flash-success'))
      .then(() => history.push('/dents'))
      .catch(() => flash(teethMessages.logFailure, 'flash-error'))
  }

  render () {
    const id = this.props.match.params.id
    if (this.state.updated) {
      return <Redirect to={`/dents/${id}`}/>
    }
    const {pain_level, sensitivity, how_long, medications, notes} = this.state.dents
    return (
      <DentalForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        dent={this.state.dent} />

    )
  }
}

export default withRouter(UpdateLog)
