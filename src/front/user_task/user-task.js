import React from 'react';
import axios from 'axios';
import s from "./usertask.module.css"

class UserTask extends React.Component {
  state = {
        usertask: [],
        err: ""
      }  
    
      componentDidMount() {
        this.setState({
          usertask: [],
        err: ""
        })
        let token = "Bearer " + localStorage.getItem("jwt");          
          axios.get('http://localhost:3001/GetAllUserTasks', {headers: {'Authorization': token }})
            .then(res => {
              const usertask = res.data;
              console.log("usertask:", usertask)
                this.setState({ usertask });
            })
            .catch(error => {
              if(error.response.status === 401){
                this.setState({err: "You aren't authorized!"})
              } else if (error.response.status === 403){
                this.setState({err: "You don't have administrator rights!"})
              } else if(error.response.status === 404){
                this.setState({err: "Not found!"})
              }
          }) 
    }

    handleSubmit = (value, id) => {
      let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'delete', url: `http://localhost:3001/destroyUserTask/${id}`, headers: {'Authorization': token }})
          .then(response => {
            if(response.status === 200) this.setState({ err: "Deleteed" });         
            }) 
            
            this.state.usertask.splice(value, 1)
      }
      
      // deleteTr = (value) => {
      //   this.state.usertask.splice(value, 1)
      // }
        
 render() {                      
   
   return (
    <div style={{ marginLeft: "220px" }}>
    <table className={s.tasks} >
        <tr >
            <th>User Name</th>
            <th>Task Name</th>
        </tr>
        {this.state.usertask.map((event, index) =>

            <tr>
                <td>{event.userName}</td>
                <td>{event.taskName}</td>
                <button className={s.usertaskbutton} onClick={this.handleSubmit.bind(this, index, event.id)}>Delete</button>
            </tr>

        )}
    </table>
    <div style={{marginLeft: "250px", marginTop: "30px"}}><h1>{this.state.err}</h1></div>
</div>
        )
      }
}

export default UserTask;