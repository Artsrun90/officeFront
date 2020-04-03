import React from "react";
import axios from "axios";
import s from "./account.module.css";

class UpdateYourself extends React.Component {
    state = {
        userId: "",
        email: "name",
        password: "password",
        login: "",
        userName: "",
        date_Of_Birth: "",
        gender: "",
        roll_id: "",

        err: "",
        errorForm: ""
      };

      componentDidMount(){
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`http://localhost:3001/users`, {headers: {'Authorization': token }})
            .then(response =>{   
            this.setState({
                userId: response.data.id
            })
            })
      }

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
        let e = event.target.name;
        let value = event.target.value;
        switch (e) {
          case "userId":
                this.setState({userId:value})
                break;
          case "email":
                this.setState({email:value})
                break;
          case "password":
                this.setState({password:value})
                break;
          case "login":
            this.setState({login:value})
                break;
          case "userName":
            this.setState({userName:value})
                break;                                 
          case "date_Of_Birth":
            this.setState({date_Of_Birth:value})
                break;                                 
          case "gender":
            this.setState({gender:value})
                break;                                 
          case "roll_id":
            this.setState({roll_id:value})
                break;                                 
            default:
                console.log("anhamatexeli anun")
                break;
        }  
      };
    
    
      hanleSubmit = event => {
        event.preventDefault();
        this.setState({
          err: "",
          errorForm: ""
        })
        const valid = this.validate();
        const form = event.target;
        if (valid) {             
            const users = {
              email:this.state.email,
              password: this.state.password,
              login: this.state.login,
              userName: this.state.userName, 
              date_Of_Birth: this.state.date_Of_Birth, 
              gender: this.state.gender
            }

            let token = "Bearer " + localStorage.getItem("jwt")
             axios({ method: 'patch', url: `http://localhost:3001/users/updateYourself/${this.state.userId}`, headers: {'Authorization': token }, data: { user: users }})
            .then(response =>{ 
                console.log(response)
                if(response.status === 200) this.setState({ err: "Updated" });
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
      };
    
      render() {
        console.log("render")
        return (
          <form className={s.myform} onSubmit={this.hanleSubmit.bind(this)}>
            <h1>Update</h1>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter your new Email"
                // pattern="^[ 0-9]+$"
                onChange={this.handleChange.bind(this)}
                />
            </div>
            <div>
              <input
                type="text"
                name="login"
                placeholder="Enter your new login"
                // pattern="^[ 0-9]+$"
                onChange={this.handleChange.bind(this)}
                />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your new Password"
                onChange={this.handleChange.bind(this)}
                />
            </div>
            <div>
              <input
                type="text"
                name="userName"
                placeholder="Enter your new Name"
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
            <div style={{color:"red"}}>
            <p>{this.state.err}</p>
            <p>{this.state.errorForm}</p>
            </div>
            <div>
              <input
                type="submit"
                value="Update"
                />
            </div>
          </form>
        );
    }
}
export default UpdateYourself;