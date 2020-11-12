import React, { Component } from "react";
import "./App.css";
import NavbarC from "./components/NavbarC";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPage from "./pages/AddPage";
import EmployeePage from "./pages/Employeepage"
import UpdateUser from "./pages/updatepage"
import HomePage from "./pages/HomePage"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarC></NavbarC>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/adduser" component={AddPage} />
              <Route exact path="/users" component={EmployeePage} />
              <Route exact path="/edituser/:id" component={UpdateUser} />
              <Route component={HomePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}