import React from "react";
import axios from "axios";
import s from "../style.module.css";

class ProjectCreate extends React.Component {
  state = {
    projCreate: [],
    name: null,
    description: null,
    userID: null,
    err: ""
  };

  handleChange = e => {
    const an = e.target.name;
    const va = e.target.value;
    switch (an) {
      case "name":
        this.setState({ name: va });
        break;
      case "description":
        this.setState({ description: va });
        break;
      case "userID":
        this.setState({ userID: va });
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

    const project = {
      name: this.state.name,
      description: this.state.description,
      userID: this.state.userID
    };
    axios
      .post(`http://localhost:3001/projects`, { project })
      .then(response => {
        // console.log(response);
        if (response.status === 201) {
          this.setState({ err: "Created" });
        } else {
          this.setState({ err: "Not created" });
        }
      })
      .catch(this.setState({ err: "Not created" }));
    form.reset();
  }

  render() {
    return (
      <form className={s.myform} onSubmit={this.handleSubmit.bind(this)}>
        <h1 style={{ color: "#363B45" }}>Create new Project</h1>
        <div>
          <label htmlFor="name">Project Name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter Project Name"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div>
          <label htmlFor="description">Project Description</label>
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
          <label htmlFor="userID">User Id</label>
          <input
            id="userID"
            name="userID"
            placeholder="Enter User Id"
            type="text"
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <p>{this.state.err}</p>
        <input type="submit" value="Create" />
      </form>
    );
  }
}
export default ProjectCreate;
