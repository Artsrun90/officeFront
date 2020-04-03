import React from "react";
import axios from "axios";
import s from "../projects/project.module.css";

class TaskFind extends React.Component {
    state = {
      tasks: {},
      task: "",
      error: ""
    };
  

  handleChange = event => {
    event.preventDefault();
    const task = event.target.value;
    this.setState({ task });
  };

  findTask = () => {
    this.setState({
      tasks: {},
      task: "",
      error: ""
    })
    let token = "Bearer " + localStorage.getItem("jwt");
    console.log("jwt", localStorage.getItem("jwt"))
    axios.get(`http://localhost:3001/tasks/${this.state.task}`, {headers: {'Authorization': token }})
    .then(res => {
      const tasks = res.data;
      console.log("mount", tasks);
      this.setState({ tasks });
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
        <h2>Enter Task Id</h2>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={s.projectbutton} onClick={this.findTask.bind(this)}>Get Task</button>
        </div>
        <table className={s.project}>
          <tr>
            <th>Task Name</th>
            <th>Task Description</th>
          </tr>

          <tr>
            <td>{this.state.tasks.taskName}</td>
            <td>{this.state.tasks.taskDescription}</td>
          </tr>
        </table>
        <div style={{marginLeft: "200px", marginTop: "40px"}}><h1>{this.state.error}</h1></div>
      </div>
    );
  }
}
export default TaskFind;