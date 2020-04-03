import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class RoleDelete extends React.Component {

    state = {      
        roleID:null,
        err:""       
    } 

    handleChange = (event) =>{       
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
          case "roleID":
                this.setState({roleID:value})
                break;                  
            default:
                console.log("Not found ID")
                break;
        }               
    }
    
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        chek: "",
        err:""})
        console.log(this.state.chek)    
        console.log(this.state.err)    
      const form = event.target;
        // axios.delete(`http://localhost:3001/roll/${this.state.roleID}`)
        let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'delete', url: `http://localhost:3001/roll/${this.state.roleID}`, headers: {'Authorization': token }})
          .then(response =>{ 
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
          });        
        
        form.reset();       
      }
    
      render() {       
        return (
          <form className={s.myform} style={{height:"200px"}} onSubmit={this.handleSubmit.bind(this)}>
            <h1 style={{color:"#363B45"}}>Delete role</h1>
            <div>
            <input 
            id="roleID"
            name="roleID"                   
            placeholder="Enter roleID"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p style={{color: "red"}}>{this.state.err}</p>
            <input 
                type="submit"
                value="Delete"
                />
          </form>
        );
      }
    }
    export default RoleDelete;