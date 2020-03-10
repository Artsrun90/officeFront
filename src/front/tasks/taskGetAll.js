import React from 'react';
import axios from 'axios';
import TasksPagin from "./taskspagin";


class taskGetAll extends React.Component {
    state = {
        tasks: [],
        loding: false,
        currentPage: 1,
        tasksPerpage: 10,
        currentPso: []
      }    
      
        componentDidMount ()  {
          this.setState({
            loding: true
          })
          
          axios.get('http://localhost:3001/tasks/?_limit=10')
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
                    
                    render() {
                      
                      console.log("task",this.state.tasks)
                      const indexOfLastTask = this.state.currentPage*this.state.tasksPerpage;
                      const indexOfFirstTask = indexOfLastTask-this.state.tasksPerpage;
                      const  currentPsots = this.state.tasks.slice(indexOfFirstTask, indexOfLastTask);
                      // this.setState({
                      //   currentPso: currentPsots
                      // })

                      return (
                        <div>
                        {console.log("cur",currentPsots)}
              <TasksPagin tasks={currentPsots} />                
          </div>
        )
      }
}

export default taskGetAll;