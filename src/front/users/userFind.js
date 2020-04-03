import React from "react";
import axios from "axios";
import  s from './user.module.css';

class UserFind extends React.Component {
    state = {
      users: {},
      user: "",
      error: ""
    };
  

  handleChange = event => {
    event.preventDefault();
    const user = event.target.value;
    this.setState({ user });
  };

  findTask = () => {
    this.setState({
      users: {},
      user: "",
      error: ""
    })
    let token = "Bearer " + localStorage.getItem("jwt");
    console.log("jwt", localStorage.getItem("jwt"))
    axios.get(`http://localhost:3001/users/${this.state.user}`, {headers: {'Authorization': token }})
    .then(res => {
      const users = res.data;
      this.setState({ users });
    })
    .catch(error => {
        console.log("error:",error.response.status)
        if(error.response.status === 401){
          this.setState({error: "You aren't authorized!"})
        } else if (error.response.status === 403){
          this.setState({error: "You don't have administrator rights!"})
        }else if(error.response.status === 404){
            this.setState({error: "Not found!"})
          }
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "220px" }}>
        <h2>Enter User Id</h2>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={s.userbutton} onClick={this.findTask.bind(this)}>Get Task</button>
        </div>
        <table className = {s.user} > 
              <tr >
              <th>User name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Role ID</th>
              </tr>
                           
             <tr>
              <td>{this.state.users.userName}</td>
              <td>{this.state.users.email}</td>
              <td>{this.state.users.gender}</td>
              <td>{this.state.users.date_Of_Birth}</td>
              <td>{this.state.users.roll_id}</td>
            </tr>
              </table>
        <div style={{marginLeft: "200px", marginTop: "40px"}}><h1>{this.state.error}</h1></div>
      </div>
    );
  }
}
export default UserFind;