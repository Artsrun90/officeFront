import React from "react";
import axios from "axios";
import s from "./role.module.css";

class RoleFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: {},
      role: "",
      error: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    const role = event.target.value;
    this.setState({ role });
  };

  findRole = () => {
    this.setState({
      roles: {},
      role: "",
      error: ""
    })
      console.log("state", this.state.role)
    // axios.get(`http://localhost:3001/roll/${this.state.role}`)
    let token = "Bearer " + localStorage.getItem("jwt");
    axios.get(`http://localhost:3001/roll/${this.state.role}`, {headers: {'Authorization': token }})
    .then(res => {
      const roles = res.data;
      this.setState({ roles });
    })
    .catch(error => {
      console.log("error:",error.response.status)
      if(error.response.status === 401){
        this.setState({error: "You aren't authorized!"})
      } else if (error.response.status === 403){
        this.setState({error: "You don't have administrator rights!"})
      }else if (error.response.status === 404){
        this.setState({error: "Not found!"})
      }
  });
  };

  render() {
    return (
      <div style={{ marginLeft: "220px" }}>
        <h2>Enter Role Id</h2>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={s.rolebutton} onClick={this.findRole.bind(this)}>Get Role</button>
        </div>
        <table className={s.roll}>
          <tr>
            <th>Role Name</th>
          </tr>

          <tr>
            <td>{this.state.roles.rollName}</td>
          </tr>
        </table>
        <div style={{marginLeft: "200px", marginTop: "40px"}}><h1>{this.state.error}</h1></div>
      </div>
    );
  }
}
export default RoleFind;