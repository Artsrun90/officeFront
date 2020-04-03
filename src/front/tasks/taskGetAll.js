import React from 'react';
import axios from 'axios';
import TasksPagin from "./taskspagin";
import Pagination from './pagination';



class taskGetAll extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        loding: false,
        currentPage: 1,
        tasksPerpage: 10,
        error: ""
      }  }  
      
        componentDidMount ()  {
          this.setState({
            error: "",
            loding: true
          })
          let token = "Bearer " + localStorage.getItem("jwt");
          axios.get('http://localhost:3001/tasks', {headers: {'Authorization': token }})
          .then(res => {
            console.log("res",res)
            const tasks = res.data;
            this.setState({ tasks });
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
           this.setState({
          loding: false
          })
          console.log()
          }

 paginate = (pageNumber) => this.setState({currentPage: pageNumber});
                    
 render() {
                      
   const indexOfLastTask = this.state.currentPage*this.state.tasksPerpage;
   console.log("task",this.state.tasks)
   const indexOfFirstTask = indexOfLastTask-this.state.tasksPerpage;
   const currentTasks = this.state.tasks.slice(indexOfFirstTask, indexOfLastTask);
 
   return (
  <div>
   {console.log("cur",currentTasks)}
    <TasksPagin tasks={currentTasks}/> 
    <Pagination tasksPerpage={this.state.tasksPerpage} totalTasks={this.state.tasks.length} paginate={this.paginate.bind(this)}/>               
    <div style={{marginLeft: "500px"}}><h1>{this.state.error}</h1></div>
   </div>
        )
      }
}

export default taskGetAll;