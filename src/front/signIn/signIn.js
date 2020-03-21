import React, { Component } from "react";
import axios from "axios";
import s from "./Valid.module.css";

class RegisterForm extends Component {
  state = {
    email: "name",
    password: "password",
    login: "",
    userName: "",

    count: 0,
    err: ""
  };

  handleChange = event => {
    console.log("event:", event);
    console.log("event.target.name:", event.target.name);
    console.log("event.target.value:", event.target.value);
    console.log(this.state.count);
    console.log(this.state.email)

    this.setState({
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
        const auth = {"email": this.state.email, "password": this.state.password, "userName": this.state.userName}
        // const user = {"auth": {"email": this.state.email, "password": this.state.password, "userName": this.state.userName}}

        axios.post(`http://localhost:3001/user_token`, {auth})
        .then(response =>{ 
          localStorage.setItem("jwt", response.data.jwt);
          this.props.history.push("/");
          console.log("jwt",response.data.jwt)
        })
          .catch(this.setState({err:"You have some error"}))
          console.log("props",this.props)
          console.log("username",this.state.userName);
          
  };

  

  render() {
    return (
      <form className={s.myform} onSubmit={this.hanleSubmit.bind(this)}>          
        <h1>Sign In</h1>
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
            type="submit"
            value="Sign In"
            onClick={this.incrementCount.bind(this)}
          />
        </div>
      </form>
    );
  }
}
export default RegisterForm;
