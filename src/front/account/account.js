import React, { Component } from "react";
import axios from "axios";
import s from "./account.module.css";
import {Link} from 'react-router-dom';

class Account extends Component {
    state = {
        login: "",
        userName: "",
        email: "",
        role: "",
        roll_id: "",
        date_Of_Birth: "",
        gender: ""
    }

    componentDidMount(){
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`http://localhost:3001/users`, {headers: {'Authorization': token }})
        .then(response =>{ 
            console.log("response",response.data)  
            this.setState({
                login: response.data.login,
                userName: response.data.userName,
                email: response.data.email,
                roll_id: response.data.roll_id,
                date_Of_Birth: response.data.date_Of_Birth,
                gender: response.data.gender,
            })         
            // axios.get(`http://localhost:3001/roll/${this.state.roll_id}`)
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`http://localhost:3001/roll/getRoleIdForAccount/${this.state.roll_id}`, {headers: {'Authorization': token }})
        .then(response =>{ 
            console.log("role-id",response.data)  
            console.log("role",response.data)  
            this.setState({
                role: response.data.rollName                
            })         
            }) 
            })               
    }

    render(){
        return(
            <div className={s.acc}>
                <div>
                <label>Login: </label>
                <h3>{this.state.login}</h3>
                </div>
                
                <div>
                <label>User Name: </label>
                <h3>{this.state.userName}</h3>
                </div>

                <div>
                <label>Email: </label>
                <h3>{this.state.email}</h3>
                </div>

                <div>
                <label>Date of birth: </label>
                <h3>{this.state.date_Of_Birth}</h3>
                </div>

                <div>
                <label>Gender: </label>
                <h3>{this.state.gender}</h3>
                </div>

                <div>
                <label>Role: </label>
                <h3>{this.state.role}</h3>
                </div>
                <Link to='/update_yourself' style={{textDecoration:"none"}}>
                <button className={s.updateButton}>Update</button>
                </Link>
            </div>
        )
    }

}

export default Account;