import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class RoleDelete extends React.Component {

    state = {      
        roleID:null,
        chek: "",
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
        axios.delete(
          `http://localhost:3001/roll/${this.state.roleID}`) 
          .then(response =>{ 
            console.log(response)
            if(response.status === 200){ 
            this.setState({chek:true})
            console.log(this.state.chek)  
            } else{
              this.setState({chek:false})
            } 
            })    
           .then(() => {if(this.state.chek){
            this.setState({err:"Created"})            
          } else {
            this.setState({err:"Not created"})
          }})
          .catch(this.setState({err:"Not created"}))        
        
        form.reset();       
      }
    
      render() {       
        return (
          <form className={s.myform} onSubmit={this.handleSubmit.bind(this)}>
            <h1 style={{color:"#363B45"}}>Delete role</h1>
            <div>
            <label htmlFor="roleID">roleID</label>
            <input 
            id="roleID"
            name="roleID"                   
            placeholder="Enter roleID"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p>{this.state.err}</p>
            <input 
                type="submit"
                value="Delete"
                />
          </form>
        );
      }
    }
    export default RoleDelete;