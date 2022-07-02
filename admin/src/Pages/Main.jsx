// import { Switch } from "antd";
import React from "react";
import {Router, Route } from 'react-router-dom'

// import { HashRouter } from "react-router-dom";
import AdminIndex from "./AdminIndex";
import Login from "./Login";
import { createBrowserHistory } from 'history'


function Main() {
  const history = createBrowserHistory();

  return (
    <div>
      <Router history={history}>
        <Route path='/' exact component={Login} />
        <Route path='/index/' component={AdminIndex} />
      </Router>
    </div>

  )
}
export default Main
