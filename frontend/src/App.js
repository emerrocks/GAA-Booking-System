import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import AuthPage from './pages/Auth'
import EventsPage from './pages/Events'
import BookingsPage from './pages/Bookings'
import MainNavigation from './components/Navigation/MainNavigation'
import AuthContext from './context/auth-context'
import DashboardPage from './pages/Dashboard'
import AdminPage from './pages/Admin'

class App extends Component {
  state = {
    token: null,
    userId: null,
    adminId: null,
  }

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId })
  }
  adminLogin = (token, adminId, tokenExpiration) => {
    this.setState({ token: token, adminId: adminId })
  }

  logout = () => {
    this.setState({ token: null, userId: null, adminId: null })
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              adminId: this.state.adminId,
              login: this.login,
              adminLogin: this.adminLogin,
              logout: this.logout,
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Switch>
                {this.state.token && (
                  <Redirect from="/" to="/dashboard" exact />
                )}
                {this.state.token && (
                  <Redirect from="/auth" to="/events" exact />
                )}
                {this.state.token && (
                  <Redirect from="/admin" to="/events" exact />
                )}
                {!this.state.token && (
                  <Route path="/dashboard" component={DashboardPage} />
                )}
                {!this.state.token && (
                  <Route path="/auth" component={AuthPage} />
                )}
                {!this.state.token && (
                  <Route path="/admin" component={AdminPage} />
                )}
                <Route path="/events" component={EventsPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
                {this.state.token && (
                  <Route path="/dashboard" component={DashboardPage} />
                )}
                {!this.state.token && <Redirect to="/dashboard" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App
