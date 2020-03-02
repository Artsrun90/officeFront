import React from 'react';
import axios from 'axios';
import  s from './style.module.css';

class taskGetAll extends React.Component {
    state = {
        tasks: []
      }    
      
        handleSubmit = (event) => {
            event.preventDefault();
        axios.get('http://localhost:3001/tasks', {params: {limit: 3 }})

          .then(res => {
            const tasks = res.data;
            this.setState({ tasks });
          })
        }
      
    
      render() {
        return (
            <div className={s.button} >
            < button  className={s.butt} onClick={this.handleSubmit.bind(this)}>GetAll</button>
          <ul>
            { this.state.tasks.map(tasks => <div>
              <h3>{tasks.taskName}</h3>
              {/* <h3><li>{tasks.taskDescription}</li></h3> */}
            </div>)}

          </ul>
          </div>
        )
      }
}

export default taskGetAll;