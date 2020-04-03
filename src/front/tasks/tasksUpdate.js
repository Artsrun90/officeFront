import React from 'react';
import axios from 'axios';
import s from "./task.module.css";

class TasksUpdate extends React.Component {
    state = {      
        taskID:null,   
        taskName: null,
        taskDescription: null,
        project_id: null,
        err:""       
    } 

    handleChange = (event) =>{ 
      
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
          case "taskID":
                this.setState({taskID:value})
                break;
          case "taskName":
                this.setState({taskName:value})
                break;
          case "taskDescription":
            this.setState({taskDescription:value})
                break;
                case "project_id":
            this.setState({project_id:value})
                break;                                 
            default:
                console.log("anhamatexeli anun")
                break;
        }               
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        err:""}) 
      const form = event.target;
      const tasks = { taskName:this.state.taskName, taskDescription: this.state.taskDescription, project_id: this.state.project_id}
        // axios.patch(
        //   `http://localhost:3001/tasks/${this.state.taskID}`, {task: tasks})
      let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'patch', url: `http://localhost:3001/tasks/${this.state.taskID}`, headers: {'Authorization': token }, data: { task: tasks }})
      .then(response => {
      if(response.status === 200) this.setState({ err: "Updated" });         
      })
      .catch(error => {
            if(error.response.status === 401){
              this.setState({err: "You aren't authorized!"})
            } else if (error.response.status === 403){
              this.setState({err: "You don't have administrator rights!"})
            } else if(error.response.status === 404){
              this.setState({err: "Not found!"})
            }
        })        
        
        form.reset();       
      }
    
      render() {       
        return (
          <form className={s.myform} style={{height: "400px"}} onSubmit={this.handleSubmit.bind(this)}>
            <h1 style={{color:"#363B45"}}>Update task</h1>
            <div>
            <input 
            id="taskID"
            name="taskID"                   
            placeholder="Enter taskID"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <div>
            <input 
            id="taskName"
            name="taskName"                   
            placeholder="Enter taskName"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>

            <div>
            <textarea className={s.text}
            id="taskDescription"
            name="taskDescription"                   
            placeholder="Enter taskDescription"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>

            <div>
            <input 
            id="project_id"
            name="project_id"                   
            placeholder="Enter projectid"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p style={{color: "red"}}>{this.state.err}</p>
            <input 
                type="submit"
                value="Update"
                />
          </form>
        );
      }
    }
    export default TasksUpdate;