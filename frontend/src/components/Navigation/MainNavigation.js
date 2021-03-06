import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../context/auth-context'
import './MainNavigation.css'

const mainNavigation = (props) => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <header className="main-nav">
          <div className="main-nav-logo">
            <h1>GAA Pitch Booking System </h1>
          </div>
          <div className="btn-search">
            <input
              className="input-search"
              type="text"
              name="btnSearch"
              placeholder="Search here ..."
            />
            <i className="fas fa-search"></i>
          </div>
          <nav className="main-nav-items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Login</NavLink>
                </li>
              )}
              {!context.token && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>Logout</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      )
    }}
  </AuthContext.Consumer>
)

export default mainNavigation
