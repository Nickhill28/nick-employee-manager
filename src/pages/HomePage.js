import React, { Component } from "react";
import "../index.css";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <header className="masthead ">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-black font-weight-bold">
                Employee Management App
              </h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 font-weight-light mb-5">
                I've built this app with React.js, Context-Api, React-Router,
                Bootstrap etc.
              </p>
              <hr className="divider my-4" />
              <p className="text-white-75 font-weight-light mb-5">
                If you want to try app, once click{" "}
                <a href="https://nick-employee-manager.herokuapp.com/">
                  here{" "}
                </a>
                to wake up the database. Now you are free to add, delete or edit
                employees.
              </p>

              <Link className="btn btn-dark btn-xl mr-2" to="/users">
                Database & Operations
              </Link>
              <Link className="btn btn-dark btn-xl ml-2" to="/adduser">
                Employee Add
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HomePage;