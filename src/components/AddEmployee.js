import React, { Component } from "react";
import { Navbar, Row, Col, Form, Button, Nav } from "react-bootstrap";
import UserConsumer from "../context";
import axios from "axios";
import {animateScroll as scroll } from "react-scroll";

class AddEmployee extends Component {
  
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: false,
      name: "",
      jobTitle: "",
      salary: "",
    };
  }
  scrollToBottom() {
   scroll.scrollToBottom();
}
  addUser = async (dispatch, e) => {
    e.preventDefault();
    const { name, jobTitle, salary } = this.state;
    const newUser = {
      name,
      jobTitle,
      salary,
    };
    const response = await axios.post(
      "https://nick-employee-manager.herokuapp.com/users",
      newUser
    );

    dispatch({
      type: "ADD_USER",
      payload: response.data,
    });
  };
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  addName = (e) => {
    this.setState({ name: e.target.value });
  };
  addJob = (e) => {
    this.setState({ jobTitle: e.target.value });
  };
  addSalary = (e) => {
    this.setState({ salary: e.target.value });
  };
 
  render() {
    
    return (
      <UserConsumer>
        {(value) => {
          const collapsed = this.state.collapsed;
          return (
            <footer style={this.state.collapsed ? { paddingTop: "340px" } : { paddingTop: "90px" }}>
            <Navbar
              className="text-center fixed-bottom"
             
              collapseOnSelect
              expand="md"
              bg="dark"
              variant="dark"
            >
              <Navbar.Brand>Add Employee Easily</Navbar.Brand>
              
              <Navbar.Toggle
                onClick={() => { this.toggleNavbar(); this.scrollToBottom();}}
                aria-controls="responsive-navbar-nav"
              ></Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                {collapsed ? (
                  <Nav>
                    <Form
                      className="text-center"
                      onSubmit={this.addUser.bind(this, value.dispatch)}
                    >
                      {" "}
                      <Form.Group
                        value={this.state.name}
                        onChange={this.addName}
                        controlId="name"
                      >
                        <Form.Text className="text-muted">
                          Enter the name please.
                        </Form.Text>
                        <Form.Control
                          type="name"
                          placeholder="Gandalf the Grey"
                        />
                      </Form.Group>
                      <Form.Group
                        value={this.state.jobTitle}
                        onChange={this.addJob}
                        controlId="jobTitle"
                      >
                        <Form.Text className="text-muted">
                          Enter the job please.
                        </Form.Text>
                        <Form.Control type="name" placeholder="White Wizard" />
                      </Form.Group>
                      <Form.Group
                        value={this.state.salary}
                        onChange={this.addSalary}
                        controlId="name"
                      >
                        <Form.Text className="text-muted">
                          Enter the salary please.
                        </Form.Text>
                        <Form.Control type="number" placeholder="7000" />
                      </Form.Group>{" "}
                      <Form.Text className="text-muted">
                        Clik to add user.
                      </Form.Text>
                      <Button
                        className="btn col-md-3 ml-auto mr-auto"
                        variant="primary"
                        type="submit"
                      >
                        <i className="fas fa-user-plus"></i>
                      </Button>
                    </Form>
                  </Nav>
                ) : (
                  <Nav className="ml-auto mr-auto">
                    <Form id ="id" 
                      className="text-center col-md-auto"
                      onSubmit={this.addUser.bind(this, value.dispatch)}
                    >
                      <Row>
                        {" "}
                        <Col>
                          <Form.Group
                            value={this.state.name}
                            onChange={this.addName}
                            controlId="name"
                          >
                            <Form.Text className="text-muted">
                              Enter the name please.
                            </Form.Text>
                            <Form.Control
                              type="name"
                              placeholder="Gandalf the Grey"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            value={this.state.jobTitle}
                            onChange={this.addJob}
                            controlId="jobTitle"
                          >
                            <Form.Text className="text-muted">
                              Enter the job please.
                            </Form.Text>
                            <Form.Control
                              type="name"
                              placeholder="White Wizard"
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group
                            value={this.state.salary}
                            onChange={this.addSalary}
                            controlId="name"
                          >
                            <Form.Text className="text-muted">
                              Enter the salary please.
                            </Form.Text>
                            <Form.Control type="number" placeholder="7000" />
                          </Form.Group>
                        </Col>
                        <Col>
                          {" "}
                          <Form.Text className="text-muted">
                            Clik to add Employee.
                          </Form.Text>
                          <Button
                        className="btn col-md-3 ml-auto mr-auto"
                        variant="primary"
                        type="submit"
                      >
                        <i className="fas fa-user-plus"></i>
                      </Button>
              
                        </Col>
                      </Row>
                    </Form>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Navbar>
            </footer>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddEmployee;