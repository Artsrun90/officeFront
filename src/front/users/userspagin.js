import React , {Component} from 'react';
import  s from './userl.module.css';

class TasksPagin extends Component {        

    render() {        
        return (
            <div style={{marginLeft:"220px"}}>
            <table className = {s.customers} > 
              <tr >
              <th>User name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Role ID</th>
              </tr>
            { this.props.users.map(user =>
             
             <tr>
             {console.log("user.email:", user)}
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.date_Of_Birth}</td>
              <td>{user.roll_id}</td>
            </tr>
            
            )}
            {/* {console.log("tasksProps:"+this.props)} */}
              </table>
            </div>
        );
    }
}

export default TasksPagin;