import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router'
import { handleErrors, indexLogApi, destroyLogApi } from '../teethApi'
import logMessages from '../logMessages'


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
        <h5>Dental Log # : {this.state.dent.id}</h5>
        <p>Pain Level : {this.state.dent.pain_level}</p>
        <p>Sensitivity : {this.state.dent.sensitivity}</p>
        <p>Length of Time: {this.state.dent.how_long}</p>
        <p>Medications taken : {this.state.dent.medications}</p>
        <p>Notes : {this.state.dent.notes}</p>

        <Button variant="outlined" color="primary" >
          <Link to={`/dents/${id}/update`}>Update </Link>
        </Button>
        <Button variant="outlined" color="primary" onClick={this.destroy}>Delete </Button>
        <Button variant="outlined" color="secondary">
          <Link to={'/dents'} style={{color: 'red'}}>Return </Link>
        </Button>
      </React.Fragment>
    )
  }
}


export default withRouter(Log)
