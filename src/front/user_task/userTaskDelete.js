import React from 'react';
import axios from 'axios';
import s from "./usertask.module.css"

class UserTaskkDelete extends React.Component {

    
    handleSubmit = (event) => {
      event.preventDefault();
      let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'delete', url: `http://localhost:3001/destroyUserTask/${this.props.id}`, headers: {'Authorization': token }})
          .then(response => {
            if(response.status === 200) this.setState({ err: "Deleteed" });         
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
    
      render() { 
          console.log("props:", this.props)      
        return (
            <button className={s.usertaskbutton} onClick={this.handleSubmit.bind(this)}>Delete</button>
        );
      }
    }
    export default UserTaskkDelete;