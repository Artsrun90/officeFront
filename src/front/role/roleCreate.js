import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class RoleCreate extends React.Component {
    state = {         
        rollName: null,
        project_id: null,
        err: ""  
    } 

    handleChange = (event) =>{       
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
          case "rollName":
                this.setState({rollName:value})
                break;                      
              default:
                console.log("anhamatexeli anun")
                break;
        }               
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        err:""})   
      const form = event.target;
        const rolls = { rollName:this.state.rollName}
        // axios.post(`http://localhost:3001/roll`, {roll: rolls})
        let token = "Bearer " + localStorage.getItem("jwt")
    axios({ method: 'post', url: 'http://localhost:3001/roll', headers: {'Authorization': token }, data: { roll: rolls }})
          .then(response =>{ 
            if(response.status === 201) this.setState({ err: "Creted" });
            })    
            .catch(error => {
              if(error.response.status === 401){
                this.setState({err: "You aren't authorized!"})
              } else if (error.response.status === 403){
                this.setState({err: "You don't have administrator rights!"})
              }
          });        
        
        form.reset();       
      }
    
      render() {       
        return (
          <form className={s.myform} style={{height:"200px"}} onSubmit={this.handleSubmit.bind(this)}>
            <h1 style={{color:"#363B45"}}>Create new Role</h1>
            <div>
            <input 
            id="rollName"
            name="rollName"                   
            placeholder="Enter Role name"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p style={{color: "red"}}>{this.state.err}</p>
            <input 
                type="submit"
                value="Create"
                />
          </form>
        );
      }
    }
    export default RoleCreate;