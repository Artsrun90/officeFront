import React from "react";
import axios from "axios";
import s from "../projects/project.module.css";

class RoleFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {},
      role: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    const role = event.target.value;
    this.setState({ role });
  };

  findRole = () => {
      console.log("state", this.state.role)
    axios.get(`http://localhost:3001/roll/${this.state.role}`)
    .then(res => {
      const roles = res.data;
      this.setState({ roles });
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "300px" }}>
        <h2>Enter Role Id</h2>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={s.projectbutton} onClick={this.findRole.bind(this)}>Get Role</button>
        </div>
        <table className={s.project}>
          <tr>
            <th>Role Name</th>
          </tr>

          <tr>
            <td>{this.state.roles.rollName}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default RoleFind;