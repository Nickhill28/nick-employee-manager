import React, { Component } from "react";
import Users from "../components/Employee";
import BottomAdd from "../components/AddEmployee";

class UsersPage extends Component {
  render() {
    return (
      <div style={{ paddingTop: "70px" }}>
        <Users />
        
          <BottomAdd />
      
      </div>
    );
  }
}
export default UsersPage;