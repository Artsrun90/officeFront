import React from "react";
import axios from "axios";
import s from "./project.module.css";

class ProjectFind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      pro: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    const pro = event.target.value;
    this.setState({ pro });
  };

  findProject = () => {
    axios.get(`http://localhost:3001/projects/${this.state.pro}`).then(res => {
      const project = res.data;
      console.log("mount", project);
      this.setState({ project });
    });
  };

  render() {
    return (
      <div style={{ marginLeft: "300px" }}>
        <h2>Enter Project Id</h2>
        <input
          type="Text"
          name="projectID"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button onClick={this.findProject.bind(this)}>Get Project</button>
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
      </div>
    );
  }
}
export default ProjectFind;
