import React from "react";
import axios from "axios";
import s from "./usertask.module.css"

class UserTasksCreate extends React.Component {
  state = {
    userId: null,
    taskId: null,
    err: ""
  };

  handleChange = event => {
    let e = event.target.name;
    let value = event.target.value;
    switch (e) {
      case "userId":
        this.setState({ userId: value });
        break;
      case "taskId":
        this.setState({ taskId: value });
        break;
      default:
        console.log("anhamatexeli anun");
        break;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      err: ""
    });
    console.log(this.state.err);
    const form = event.target;
    const usertask = {
        user_id: this.state.userId,
        task_id: this.state.taskId
    };
    // let token = "Bearer " + localStorage.getItem("jwt");
    // axios.post(`http://localhost:3001/tasks`, {headers: {'Authorization': token }}, { task: tasks })
    let token = "Bearer " + localStorage.getItem("jwt")
    axios({ method: 'post', url: 'http://localhost:3001/user_task', headers: {'Authorization': token }, data: { user_task: usertask }})
    .then(response => {
      if(response.status === 201) this.setState({ err: "Creted" });         
      })
      .catch(error => {
        if(error.response.status === 401){
          this.setState({err: "You aren't authorized!"})
        } else if (error.response.status === 403){
          this.setState({err: "You don't have administrator rights!"})
        } else if (error.response.status === 422){
          this.setState({err: "You entered incorrect data!"})
        }
    });

    form.reset();
  };

  render() {
    return (
      <form className={s.myform} style={{height: "300px"}} onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{ color: "#363B45" }}>Create new user_task</h1>
        <div>
          <input
            id="userId"
            name="userId"
            placeholder="Enter userId"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <input
            className={s.text}
            id="taskId"
            name="taskId"
            placeholder="Enter taskId"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <p style={{color: "red"}}>{this.state.err}</p>
        <input type="submit" value="Create" />
      </form>
    );
  }
}
export default UserTasksCreate;