import React , {Component} from 'react';
import  s from '../style.module.css';
import  d from './taskGetAll.module.css';

class TasksPagin extends Component {        

    render() {        
        return (
            <div style={{marginLeft:"300px"}}>
                 <table className = {d.customers} > 
          <tr >
              <th>taskName</th>
              <th>taskDescription</th>
              </tr>
            { this.props.tasks.map(tasks =>
             
            <tr>
              <td>{tasks.taskName}</td>
              <td>{tasks.taskDescription}</td>
            </tr>
            
            )}
            {/* {console.log("tasksProps:"+this.props)} */}
              </table>
            </div>
        );
    }
}

export default TasksPagin;