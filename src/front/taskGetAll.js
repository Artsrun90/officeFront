import React from 'react';
import axios from 'axios';
import  s from './style.module.css';
import  d from './taskGetAll.module.css';

class taskGetAll extends React.Component {
    state = {
        tasks: []
      }    
      
        handleSubmit = (event) => {
            event.preventDefault();
        axios.get('http://localhost:3001/tasks/?_limit=10')
        .then(res => {
          console.log(res)
            const tasks = res.data;
            this.setState({ tasks });
          })
        }
      
    
      render() {
        return (
            <div className={s.button} >
            < button  className={s.butt} onClick={this.handleSubmit.bind(this)}>GetAll</button>
          <table className = {d.customers} > 
          <tr >
              <th>taskName</th>
              <th>taskDescription</th>
              </tr>
            { this.state.tasks.map(tasks =>
             
              <tr>
              <td>{tasks.taskName}</td>
              <td>{tasks.taskDescription}</td>
              </tr>
            
              )}
              </table>

          
          </div>
        )
      }
}

export default taskGetAll;