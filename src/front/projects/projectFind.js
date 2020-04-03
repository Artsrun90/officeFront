import React from "react";
import axios from "axios";
import s from "./project.module.css";

class ProjectFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      pro: "",
      error: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    const pro = event.target.value;
    this.setState({ pro });
  };

  findProject = () => {
    this.setState({
      project: {},
      pro: "",
      error: ""
    })
    let token = "Bearer " + localStorage.getItem("jwt");
    axios.get(`http://localhost:3001/projects/${this.state.pro}`, {headers: {'Authorization': token }})
    .then(res => {
      const project = res.data;
      console.log("mount", project);
      this.setState({ project });
      console.log("data:", typeof(project))
    })
    .catch(error => {
      console.log("error:",error.response.status)
      if(error.response.status === 401){
        this.setState({error: "You aren't authorized!"})
      } else if (error.response.status === 403){
        this.setState({error: "You don't have administrator rights!"})
      }else if (error.response.status === 404){
        this.setState({error: "Not found!"})
      }
  });
  };

  render() {
    return (
      <div style={{ marginLeft: "220px" }}>
        <h2>Enter Project Id</h2>
        <input
          type="Text"
          name="projectID"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={s.projectbutton} onClick={this.findProject.bind(this)}>Get Project</button>
        </div>
        <table className={s.project}>
          <tr>
            <th>Project Name</th>
            <th>Project Description</th>
          </tr>

          <tr>
            <td>{this.state.project.name}</td>
            <td>{this.state.project.description}</td>
          </tr>
        </table>
        <div style={{marginLeft: "200px", marginTop: "40px"}}><h1>{this.state.error}</h1></div>
      </div>
    );
  }
}
export default ProjectFind;
