import React, { Component } from "react";
import { Container, Card, Row } from "react-bootstrap";
import UserConsumer from "../context";
import axios from "axios";
import {Link} from "react-router-dom"

class UpdateUser extends Component {
  state = {
    name: "",
    jobTitle: "",
    salary: "",
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    console.log(id);

    const response = await axios.get(`https://nick-employee-manager.herokuapp.com/users/${id}`);
    const { name, jobTitle, salary } = response.data;
    this.setState({
      name,
      jobTitle,
      salary,
    });
  };

  updateUser = async (dispatch, e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, jobTitle, salary } = this.state;
    const updatedUser = {
      name,
      salary,
      jobTitle,
    };
    console.log(updatedUser);
    const response = await axios.put(
      `https://nick-employee-manager.herokuapp.com/users/${id}`,
      updatedUser
    );

    dispatch({ type: "UPDATE_USER", payload: response.data });
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
            <Container className="col-md-4" style={{paddingTop:"70px"}}>
              <Card className="text-center">
                <Card.Header id="header">
                  <div>
                    <Row>
                      <div className="col-md-9 text-center">
                        <Card.Text as="h4">Update User form</Card.Text>
                      </div>
                      <div className="col-md-2"></div>
                    </Row>
                  </div>
                </Card.Header>

                <Card.Body>
                  <form onSubmit={this.updateUser.bind(this, value.dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        value={this.state.name}
                        onChange={this.addName}
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="jobTitle">Job:</label>
                      <input
                        value={this.state.jobTitle}
                        onChange={this.addJob}
                        type="text"
                        className="form-control"
                        id="jobTitle"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="salary">Salary:</label>
                      <input
                        value={this.state.salary}
                        onChange={this.addSalary}
                        type="number"
                        className="form-control"
                        id="salary"
                      />
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary mr-2">
                        Save
                      </button>

                      <Link className="btn btn-success ml-2" to="/users">
                        Go back
                      </Link>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Container>
          );
        }}
      </UserConsumer>
    );
  }
}
export default UpdateUser;