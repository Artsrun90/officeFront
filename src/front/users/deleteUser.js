import React from "react";
import axios from "axios";
import s from "./user.module.css";

class UsersDelete extends React.Component {
    state = {
        userId: "",
        err: ""
      };

     
    
      handleChange = event => { 
        this.setState({
            [event.target.name]: event.target.value
        })               
      };
    
    
      hanleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        
        // axios.post(`http://localhost:3001/users`, {user})
            let token = "Bearer " + localStorage.getItem("jwt")
             axios({ method: 'delete', url: `http://localhost:3001/users/${this.state.userId}`, headers: {'Authorization': token }})
            .then(response =>{ 
                console.log(response)
                if(response.status === 200) this.setState({ err: "Deleted" });
                })    
            .catch(error => {
                    if(error.response.status === 401){
                      this.setState({err: "You aren't authorized!"})

                    } else if (error.response.status === 403){
                      this.setState({err: "You don't have administrator rights!"})

                    } else if (error.response.status === 404){
                      this.setState({err: "Not found!"})
                    }
            });    
            form.reset();  
        }
    
      render() {
        return (
          <form style={{height: "200px"}} className={s.myform} onSubmit={this.hanleSubmit.bind(this)}>
            <h1>Delete user</h1>
            <div>
              <input
                type="text"
                name="userId"
                placeholder="Enter user Id"
                // pattern="^[ 0-9]+$"
                onChange={this.handleChange.bind(this)}
                />
            </div>            
            <div style={{color:"red"}}>
            <p>{this.state.err}</p>
            <p>{this.state.errorForm}</p>
            </div>
            <div>
              <input
                type="submit"
                value="Delete"
                />
            </div>
          </form>
        );
    }
}
export default UsersDelete;