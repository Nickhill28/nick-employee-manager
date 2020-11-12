import React, { Component } from "react";
import UserConsumer from "../context";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
class ListEmployee extends Component {
  deleteUser = async (dispatch, e) => {
    const { id } = this.props;

    console.log(id);
    await axios.delete(`https://nick-employee-manager.herokuapp.com/users/${id}`);

    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };

  render() {
    return (
      <UserConsumer>
        {(value) => {
          return (
            <tr>
              <td className="col-md-1">{this.props.id}</td>
              <td>{this.props.name}</td>
              <td>{this.props.jobTitle}</td>
              <td>{this.props.salary}</td>
              <td>
                <Link
                  className="btn btn-warning"
                  to={`edituser/${this.props.id}`}
                >
                  <i className="fas fa-user-edit"></i>
                </Link>
              </td>
              <td>
                <Button
                  onClick={this.deleteUser.bind(this, value.dispatch)}
                  variant="danger"
                >
                  <i className="far fa-trash-alt"></i>
                </Button>
              </td>
              
            </tr>
            
          );
        }}
      </UserConsumer>
    );
  }
}
export default ListEmployee;