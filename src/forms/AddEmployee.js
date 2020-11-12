import React, { Component } from "react";
import {
  Container,
  Form,
  Card,
  Button,
  InputGroup,
  Col,
} from "react-bootstrap";
import UserConsumer from "../context";
import axios from "axios";

class AddUser extends Component {
  state = {
    name: "",
    jobTitle: "",
    salary: "",
  };

  changeVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  addUser = async (dispatch, e) => {
    e.preventDefault();
    const { name, jobTitle, salary } = this.state;
    const newUser = {
      name,
      jobTitle,
      salary,
    };
    const response = await axios.post("https://nick-employee-manager.herokuapp.com/users", newUser);

    dispatch({
      type: "ADD_USER",
      payload: response.data,
    });
  };
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
          return (
            <Container style={{paddingTop:"50px"}} className="col-md-4">
              <Card className="text-center">
                <Card.Header id="header">
                  <div className="text-center">
                    <Card.Text as="h4">Add form</Card.Text>
                  </div>
                </Card.Header>

                <Card.Body>
                  <Form onSubmit={this.addUser.bind(this, value.dispatch)}>
                    <Form.Group
                      value={this.state.name}
                      onChange={this.addName}
                      controlId="name"
                    >
                      <Form.Label>Name : </Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Gandalf Grihamut"
                      />
                      <Form.Text className="text-muted">
                        Enter the name please.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group
                      value={this.state.jobTitle}
                      onChange={this.addJob}
                      controlId="jobTitle"
                    >
                      <Form.Label>Job : </Form.Label>
                      <Form.Control type="name" placeholder="White Wizard" />
                      <Form.Text className="text-muted">
                        Enter the job please.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group
                      value={this.state.salary}
                      onChange={this.addSalary}
                      as={Col}
                      md="8"
                      className="mr-auto ml-auto"
                      controlId="salary"
                    >
                      <Form.Label>Salary : </Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="number"
                          placeholder="7000"
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <InputGroup.Prepend>
                          <InputGroup.Text id="inputGroupPrepend">
                            USD
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Enter a valid number please.
                      </Form.Text>
                    </Form.Group>
                    <Button
                      className="btn btn-block"
                      variant="dark"
                      type="submit"
                    >
                      Save
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Container>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;