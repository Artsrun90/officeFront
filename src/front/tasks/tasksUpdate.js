import React from 'react';
import axios from 'axios';
import  s from '../style.module.css'

class TasksUpdate extends React.Component {
    state = {         
        taskName: null,
        taskDescription: null,
        project_id: null,
        chek: "",
        err:""       
    } 

    handleChange = (event) =>{ 
      
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
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
        chek: "",
        err:""})
        console.log(this.state.chek)    
        console.log(this.state.err)    
      const form = event.target;
        const tasks = { taskName:this.state.taskName, taskDescription: this.state.taskDescription, project_id: this.state.project_id}
        axios.patch(
          `http://localhost:3001/tasks`, {task: tasks}) 

          .then(response =>{ 
            console.log(response)
            if(response.status === 201){ 
            this.setState({chek:true})
            console.log(this.state.chek)  
            } else{
              this.setState({chek:false})
            } 
            })    
           .then(() => {if(this.state.chek){
            this.setState({err:"Created"})            
          } else {
            this.setState({err:"Not created"})
          }})
          .catch(this.setState({err:"Not created"}))
        
        
        form.reset();       
      }
    
      render() {       
        return (
          <form className={s.myform} onSubmit={this.handleSubmit.bind(this)}>
            <h1 style={{color:"#363B45"}}>Update task</h1>
            <div>
            <label htmlFor="taskName">taskName</label>
            <input 
            id="taskName"
            name="taskName"                   
            placeholder="Enter taskName"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>

            <div>
            <label htmlFor="taskDescription">taskDescription</label>
            <textarea className={s.text}
            id="taskDescription"
            name="taskDescription"                   
            placeholder="Enter taskDescription"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>

            <div>
            <label htmlFor="project_id">project_id</label>
            <input 
            id="project_id"
            name="project_id"                   
            placeholder="Enter projectid"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p>{this.state.err}</p>
            <input 
                type="submit"
                value="Update"
                />
          </form>
        );
      }
    }
    export default TasksUpdate;