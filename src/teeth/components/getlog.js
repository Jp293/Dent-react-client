import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { handleErrors, getLogApi } from '../teethApi'
import logMessages from '../logMessages'
import apiUrl from '../../apiConfig'
import './Dentlogs.scss'

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
        <div className="listed-logs">
          <div className="indv-log">
            <h4>Dental Logs:</h4>
            <p>(Please create logs if none are displaying.)</p>
            <ul>
              {dents}
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default withRouter(GetLog)
