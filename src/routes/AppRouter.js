import * as React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import { PrivateRoute } from './utils'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import UsersPage from '../pages/UsersPage'

export const AppRouter = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <Router>
    <nav>
      <li> <Link to='/home'> Home </Link> </li>
      <li> <Link to='/login'> Login </Link> </li>
      <li> <Link to='/users'> Users </Link> </li>
    </nav>
      <Redirect from="/" to="/home" />
      <PrivateRoute path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/users" component={UsersPage} />
    </Router>
  )
}