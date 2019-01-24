import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { handleErrors, getLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'


class GetLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dent: null,
      notFound: false,
      deleted: false
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id

    getLogApi(this.state.dent, this.props.user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => console.log(data) || data)
      .then(data => this.setState({ dent: data.dents }))
      .catch(() => this.setState({ notFound: true }))
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {

    console.log(this.state.dent)
    if (!this.state.dent) {
      return <p>loading...</p>
    }
    const logs = this.state.dent.map(dents => (
      <li key={dent.id}>
        <Link to={'/dents/'}>{dents.id}</Link>
      </li>
    ))

    return  (
      <React.Fragment>
        <h4>Dental Logs:</h4>
        <ul>
          {dent}
        </ul>
      </React.Fragment>
    )
  }
}


export default withRouter(GetLog)
