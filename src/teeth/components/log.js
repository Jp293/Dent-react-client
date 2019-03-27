import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router'
import { handleErrors, indexLogApi, destroyLogApi } from '../teethApi'
import logMessages from '../logMessages'
import './Dentlogs.scss'

class Log extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dent: null,
      notFound: false,
      deleted: false,
    }
  }

  componentDidMount () {
    const { flash } = this.props
    const id = this.props.match.params.id

    indexLogApi(this.props.user, id)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(data => this.setState({ dent: data.dent }))
      .catch(() => this.setState({ notFound: true }))
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  destroy = () => {
    const options = {
      method: 'DELETE'
    }

    const { flash, history } = this.props
    const id = this.props.match.params.id

    destroyLogApi(this.props.user, id)
      .then(res => res.ok ? res : new Error())
      .then(()=> this.setState({ deleted: true }))
      .then(() => flash(logMessages.destroyLogSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .then(() => history.push('/dents'))
      .catch(() => flash(logMessages.logFailure, 'flash-error'))
  }

  render () {
    const { dent, notFound, deleted } = this.state

    if (notFound) {
      return <Redirect to='/'/>
    } else if (!dent) {
      return <p>loading...</p>
    } else if (deleted) {
      return (
        <Redirect to={{
          pathname: '/dents',
          state: {message: 'Log sucessfully deleted!'}
        }} />
      )
    }

    const { id, pain_level, sensitivity, how_long, medications, notes } = dent
    return(
      <React.Fragment>
        <div className="log">
          <h5>Dental Log # : {this.state.dent.id}</h5>
          <p>Pain Level : {this.state.dent.pain_level}</p>
          <p>Sensitivity : {this.state.dent.sensitivity}</p>
          <p>Length of Time: {this.state.dent.how_long}</p>
          <p>Medications taken : {this.state.dent.medications}</p>
          <p>Notes : {this.state.dent.notes}</p>

          <Button className="log-button" variant="contained" color="primary" >
            <Link to={`/dents/${id}/update`} style={{ color: '#FFF' }}>Update </Link>
          </Button>
          <Button className="log-button" variant="contained" color="secondary" onClick={this.destroy}>Delete </Button>
          <Button className="log-button" variant="contained" color="default">
            <Link to={'/dents'}>Return </Link>
          </Button>
        </div>
      </React.Fragment>
    )
  }
}


export default withRouter(Log)
