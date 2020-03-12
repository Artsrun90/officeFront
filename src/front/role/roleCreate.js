import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class RoleCreate extends React.Component {
    state = {         
        rollName: null,
        project_id: null,
        chek: "",
        err:""       
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
        chek: "",
        err:""})
        console.log(this.state.chek)    
        console.log(this.state.err)    
      const form = event.target;
        const rolls = { rollName:this.state.rollName}
        axios.post(
          `http://localhost:3001/roll`, {roll: rolls}) 

          .then(response =>{ 
            console.log(response)
            if(response.status === 201){ 
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
            <h1 style={{color:"#363B45"}}>Create new Role</h1>
            <div>
            <label htmlFor="rollName">Role Name</label>
            <input 
            id="rollName"
            name="rollName"                   
            placeholder="Enter Role name"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p>{this.state.err}</p>
            <input 
                type="submit"
                value="Create"
                />
          </form>
        );
      }
    }
    export default RoleCreate;