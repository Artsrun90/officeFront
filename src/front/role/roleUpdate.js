import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class RoleUpdate extends React.Component {

    state = {      
        roleID:null,   
        roleName: null,
        err:""       
    } 

    handleChange = (event) =>{       
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
          case "roleID":
                this.setState({roleID:value})
                break;
          case "roleName":
                this.setState({roleName:value})
                break;                     
            default:
                console.log("anhamatexeli anun")
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
        const rolls = { rollName: this.state.roleName}
        // axios.patch(`http://localhost:3001/roll/${this.state.roleID}`, {roll: rolls})
        let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'patch', url: `http://localhost:3001/roll/${this.state.roleID}`, headers: {'Authorization': token }, data: { roll: rolls }})
          .then(response =>{ 
            if(response.status === 200) this.setState({ err: "Updated" }); 
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
        
        
        form.reset();       
      }
    
      render() {       
        return (
          <form className={s.myform} style={{height:"250px"}} onSubmit={this.handleSubmit.bind(this)}>
            <h1 style={{color:"#363B45"}}>Update role</h1>
            <div>
            <input 
            id="roleID"
            name="roleID"                   
            placeholder="Enter roleID"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <div>
            <input 
            id="roleName"
            name="roleName"                   
            placeholder="Enter roleName"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>            
            <p style={{color:"red"}}>{this.state.err}</p>
            <input 
                type="submit"
                value="Update"
                />
          </form>
        );
      }
    }
    export default RoleUpdate;