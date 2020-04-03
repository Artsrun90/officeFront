import React from "react";
import axios from "axios";
import s from "./project.module.css";

class ProjectUpdate extends React.Component {
  state = {
    projUpdate: [],
    id: null,
    name: null,
    description: null,
    userID: null,
    err: ""
  };

  handleChange = event => {
    const e = event.target.name;
    const value = event.target.value;
    switch (e) {
      case "id":
        this.setState({ id: value });
        break;
      case "name":
        this.setState({ name: value });
        break;
      case "description":
        this.setState({ description: value });
        break;
      case "userID":
        this.setState({ userID: value });
        break;

      default:
        console.log("Error");
        break;
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      err: ""
    });
    const form = event.target;

    const projects = {
      name: this.state.name,
      description: this.state.description,
      userID: this.state.userID
    };
    // axios.patch(`http://localhost:3001/projects/${this.state.id}`, { project })
    let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'patch', url: `http://localhost:3001/projects/${this.state.id}`, headers: {'Authorization': token }, data: { project: projects }})
      .then(response => {
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
      <form className={s.myform} onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{ color: "#363B45" }}>Create new Project</h1>
        <div>
          <input
            id="id"
            name="id"
            placeholder="Enter Project ID"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            id="name"
            name="name"
            placeholder="Enter Project Name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <textarea
            className={s.text}
            id="description"
            name="description"
            placeholder="Enter Project Description"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <input
            id="userID"
            name="userID"
            placeholder="Enter User Id"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <p style={{color:"red"}}>{this.state.err}</p>
        <input type="submit" value="Create" />
      </form>
    );
  }
}
export default ProjectUpdate;
