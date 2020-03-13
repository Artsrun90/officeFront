import React from "react";
import axios from "axios";
import s from "./project.module.css";
class ProjectsAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/projects").then(res => {
      const project = res.data;
      console.log("mount", project);
      this.setState({ project });
    });
  }

  render() {
    console.log("dghdghs", this.state.project);

    return (
      <div style={{ marginLeft: "300px" }}>
        <div>
          <table className={s.project}>
            <tr>
              <th>Project Name</th>
              <th>Project Description</th>
            </tr>
            {this.state.project.map(item => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}
export default ProjectsAll;
