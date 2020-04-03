import React from 'react';
import axios from 'axios';
import s from "./usertask.module.css"

class TasksOfUser extends React.Component {
    state = {
        usertasks: [],
        userName: "",
        error: ""
      }  

      handleChange = event => {
        event.preventDefault();
        const userName = event.target.value;
        this.setState({ userName });
      };
    
      findTasks = () => {
        this.setState({
          usertasks: [],
          userName: "",
          error: ""
        })
        let token = "Bearer " + localStorage.getItem("jwt");
        console.log("jwt", localStorage.getItem("jwt"))
        axios.get(`http://localhost:3001/getTasks/${this.state.userName}`, {headers: {'Authorization': token }})
        .then(res => {
          const usertasks = res.data;
          console.log("usertasks:", usertasks)
          this.setState({ usertasks });
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

        <h2>Enter User Name</h2>
        <input
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={s.usertaskbutton} onClick={this.findTasks.bind(this)}>Get Tasks</button>
        </div>
        <table className = {s.tasks} > 
              <tr >
                 <th>Task Name</th>
                 <th>Task Description</th>
              </tr>
                           
             {this.state.usertasks.map(tasks =>
               <tr>
                <td>{tasks.taskName}</td>
                <td>{tasks.taskDescription}</td>
            </tr>
            )}
              </table>
        <div style={{marginLeft: "200px", marginTop: "40px"}}><h1>{this.state.error}</h1></div>
   
  </div>
        )
      }
}

export default TasksOfUser;