import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { handleErrors, getLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'


class GetLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dents: null,
      notFound: false,
      deleted: false,
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id

    getLogApi(this.state.dents, this.props.user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      // .then(data => console.log(data) || data)
      .then(data => this.setState({ dents: data.dents }))
      .catch(() => this.setState({ notFound: true }))
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {
    if (!this.state.dents) {
      return <p>loading...</p>
    }
    const dents = this.state.dents.map(dent => (
      <li key={dent.id}>
        <Link to={`/dents/${dent.id}`}>Log ID: {dent.id}</Link>
      </li>
    ))

    return  (
      <React.Fragment>
        <h4>Dental Logs:</h4>
        <ul>
          {dents}
        </ul>
      </React.Fragment>
    )
  }
}


export default withRouter(GetLog)
