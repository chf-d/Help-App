import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx';
import User from './components/User.jsx';
import Called from './components/Called.jsx';

export default class App extends Component {

  state = {
    user: {}
  }

  createUser = (name, pass) => {

    this.setState({ user: { name: name, pass: pass, Called: '', orgNum: 101 } })
  }

  createCall = (org, orgNum) => {

    let user = this.state.user
    user.Called = org
    user.orgNum = orgNum
    this.setState({ user: user })
  }


  render() {
    return (
      <div className="App">

        <Router>
          <Switch>
            <Route exact path='/' component={() => { return <Home createUser={this.createUser} /> }} />
            <Route exact path={`/${this.state.user.name}`} component={() => { return <User createCall={this.createCall} /> }} />
            <Route exact path={`/${this.state.user.orgNum}`} component={() => { return <Called user={this.state.user} /> }} />

          </Switch>
        </Router>

      </div>
    )
  }
}
