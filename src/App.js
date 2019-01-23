import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import Header from './header/Header'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import CreateLog from './teeth/components/createlog'
// import GetLog from './teeth/components/GetLog'
// import DestroyLog from './teeth/components/DestroyLog'
// import UpdateLog from './teeth/components/UpdateLog'



class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}

        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/dents' render={() => (
            <CreateLog flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App

//<AuthenticatedRoute user={user} path='/dents' render={() => (
// <GetLog flash={this.flash} user={user} />
// )} />
// <AuthenticatedRoute user={user} path='/dents/:id' render={() => (
//   <UpdateLog flash={this.flash} user={user} />
// )} />
// <AuthenticatedRoute user={user} path='/dents/:id' render={() => (
//   <DestroyLog flash={this.flash} user={user} />
// )} />
