import React , {Component} from 'react'
import  s from '../style.module.css';
import  d from './taskGetAll.module.css';

class TasksPagin extends Component {
        
    state = { 
        curnt: []
    };
    
    // console.log("s2222222222"+ this.props.tasks)

    UNSAFE_componentDidUpdate(){
        console.log("s2222222222"+ this.props.tasks)
        
       this.setState({curnt : this.props.tasks})
    }
    render() {

        console.log("sjadh"+this.state.curnt)
        
        return (
            <div style={{marginLeft:"300px"}}>
                 <table className = {d.customers} > 
          <tr >
              <th>taskName</th>
              <th>taskDescription</th>
              </tr>
            { this.state.curnt.map(tasks =>
             
             <tr>
              <td>{tasks.taskName}</td>
              <td>{tasks.taskDescription}</td>
              </tr>
            
            )}
            {console.log("tasksProps:"+this.props)}
              </table>
            </div>
        );
    }
}

export default TasksPagin;