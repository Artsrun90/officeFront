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
        tasksPerpage: 10
      }  }  
      
        componentDidMount ()  {
          this.setState({
            loding: true
          })
          
          axios.get('http://localhost:3001/tasks')
          .then(res => {
            console.log("res",res)
            const tasks = res.data;
            this.setState({ tasks });
          })
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
   </div>
        )
      }
}

export default taskGetAll;