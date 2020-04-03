import React, { Component } from "react";
import axios from "axios";
import s from "./Valid.module.css";

class RegisterForm extends Component {
  state = {
    email: "name",
    password: "password",
    login: "",
    userName: "",
    date_Of_Birth: "",
    gender: "",
    roll_id: ""
  ,
    errorForm: "",
    count: 0,
    error: "",
    err: ""
  };

  validate = () => {
    let errorForm = "";
    let err = "";
    console.log("includes:----",this.state.email.includes("@"))
    console.log("email:----",this.state.email.match(/[0-9]/g))

    if (
      this.state.email === "name" ||
      this.state.email.length < 10 ||
      this.state.email.match(/[0-9]/g) === null ||
      !this.state.email.includes("@") ||
      this.state.password === "password" ||
      this.state.password.length < 6 ||
      this.state.password.match(/[0-9]/g) === null      
    ) {
      errorForm = "You have a some ERROR";
    } else if (this.state.count === 3) {
      err = "Cannot login at this time. Contact the System Administrator";
    }
  

    if (errorForm) {
      this.setState({ errorForm });
      return false;
    } else if (err) {
      this.setState({ err });
      return false;
    }
    return true;
  };

  handleChange = event => {
    console.log("event:", event);
    console.log("event.target.name:", event.target.name);
    console.log("event.target.value:", event.target.value);
    console.log(this.state.count);
    console.log(this.state.email)

    this.setState({
      errorForm: this.state.error,
      [event.target.name]: event.target.value
    });
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  hanleSubmit = event => {
    event.preventDefault();
    const valid = this.validate();
    if (valid) {
         
      const form = event.target;
        const user = {
          email:this.state.email,
          password: this.state.password,
          login: this.state.login,
          userName: this.state.userName, 
          date_Of_Birth: this.state.date_Of_Birth, 
          gender: this.state.gender,
          roll_id: this.state.roll_id
        }

        axios.post(`http://localhost:3001/users`, {user})
        .then(response =>{ 
            console.log(response)
            if(response.status === 201){ 
            this.setState({chek:true}) 
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

      console.log(this.state);
    }
  };

  render() {
    return (
      <form className={s.myform} onSubmit={this.hanleSubmit.bind(this)}>
        <h1>Sign Up</h1>
        <p>{this.state.errorForm}</p>
        <p>{this.state.err}</p>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            // pattern="^[ 0-9]+$"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="text"
            name="login"
            placeholder="Enter your login"
            // pattern="^[ 0-9]+$"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="text"
            name="userName"
            placeholder="Enter your Name"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="date"
            name="date_Of_Birth"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            type="text"
            name="roll_id"
            placeholder="Enter your roll_id"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div style={{width: "400px"}}>

          <div style={{width: "200px", float: "left"}}>
          <label htmlFor="male" style={{color: "#696969"}}>Male</label>
          <input
            style={{width: "20px", height: "20px"}}
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange.bind(this)}
          />
          </div>

          <div style={{width: "200px", float: "right"}}>
          <label htmlFor="male" style={{color: "#696969"}}>Female</label>
          <input
            style={{width: "20px", height: "20px"}}
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange.bind(this)}
          />
          </div>
        </div>         
        <div>
          <input
            type="submit"
            value="Sign Up"
            onClick={this.incrementCount.bind(this)}
          />
        </div>
      </form>
    );
  }
}
export default RegisterForm;
