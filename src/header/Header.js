import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/dents" style={{color: 'white'}}>Dental Logs</Link>
    <Link to="/change-password" style={{color: 'white'}}>Change Password</Link>
    <Link to="/sign-out" style={{color: 'white'}}>Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" style={{color: 'white'}}>Sign Up</Link>
    <Link to="/sign-in"style={{color: 'white'}}>Sign In</Link>
  </React.Fragment>
)

// const alwaysOptions = (
//   <React.Fragment>
//     <Link to="/">Home</Link>
//   </React.Fragment>
// )

const Header = ({ user }) => (
  <AppBar position="static">
    <Toolbar>
      <div>
        <div className="img-container" style={{height: '70px', width: '70px'}}>
          <img src={require('./Dent-logo-react.svg')}/>
        </div>
      </div>
      <Typography variant="h6" color="inherit" style={{}}>
            Dent
      </Typography>
      <nav className="main-header">
        { user && <span> Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </nav>
    </Toolbar>
  </AppBar>
)

export default Header
