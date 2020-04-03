import React from "react";
import axios from "axios";
import s from "./task.module.css";

class TasksCreate extends React.Component {
  state = {
    taskName: null,
    taskDescription: null,
    project_id: null,
    err: ""
  };

  handleChange = event => {
    let e = event.target.name;
    let value = event.target.value;
    switch (e) {
      case "taskName":
        this.setState({ taskName: value });
        break;
      case "taskDescription":
        this.setState({ taskDescription: value });
        break;
      case "project_id":
        this.setState({ project_id: value });
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
    const tasks = {
      taskName: this.state.taskName,
      taskDescription: this.state.taskDescription,
      project_id: this.state.project_id
    };
    // let token = "Bearer " + localStorage.getItem("jwt");
    // axios.post(`http://localhost:3001/tasks`, {headers: {'Authorization': token }}, { task: tasks })
    let token = "Bearer " + localStorage.getItem("jwt")
    axios({ method: 'post', url: 'http://localhost:3001/tasks', headers: {'Authorization': token }, data: { task: tasks }})
    .then(response => {
      if(response.status === 201) this.setState({ err: "Creted" });         
      })
      .catch(error => {
        if(error.response.status === 401){
          this.setState({err: "You aren't authorized!"})
        } else if (error.response.status === 403){
          this.setState({err: "You don't have administrator rights!"})
        }
    });

    form.reset();
  };

  render() {
    return (
      <form className={s.myform} onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{ color: "#363B45" }}>Create new task</h1>
        <div>
          <input
            id="taskName"
            name="taskName"
            placeholder="Enter taskName"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <textarea
            className={s.text}
            id="taskDescription"
            name="taskDescription"
            placeholder="Enter taskDescription"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <input
            id="project_id"
            name="project_id"
            placeholder="Enter projectid"
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
export default TasksCreate;
