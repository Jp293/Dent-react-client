import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { handleErrors, getLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'


class GetLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dent: null
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    const {flash, user} = this.props
    const { dent  } = this.state

    getLogApi(this.state.dent, user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(() => flash(logMessages.getLogSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(console.log)
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {

    if (!this.state.dent) {
      return <p>loading...</p>
    }
    const logs = this.state.dent.map(dent => (
      <li key={dent.id}>
        <Link to={`/dents/${dent.id}`}>{dent.id}</Link>
      </li>
    ))

    return  (
      <React.Fragment>
        <h4>Dent Logs:</h4>
        <ul>
          {dents}
        </ul>
      </React.Fragment>
    )
  }
}


export default withRouter(GetLog)
