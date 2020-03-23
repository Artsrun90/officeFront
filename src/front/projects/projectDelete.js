import React from "react";
import axios from "axios";
import s from "../style.module.css";
import d from "./project.module.css";

class ProjectDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      pro: "",
      err: ""
    };
  }

  handleChange = event => {
    event.preventDefault();

    const pro = event.target.value;
    this.setState({ pro });
  };

  findProject = () => {
    // this.setState({ err: "" });
    // const form = event.target;
    axios
      .delete(`http://localhost:3001/projects/${this.state.pro}`)
      .then(response => {
        const project = response.data;
        this.setState({ project });
        // console.log(response);
        if (response.status === 201) {
          this.setState({ err: "Project is Deleted", pro: "" });
        } else {
          this.setState({ err: "Project is Not Deleted" });
        }
      });
    //   .catch(this.setState({ err: "Not Updated" }));
    // this.state.pro.reset();
  };

  render() {
    // console.log(this.state.project[0]);
    return (
      <div style={{ marginLeft: "300px" }}>
        <h2>Enter Project Id</h2>
        <input
          type="Text"
          name="projectID"
          onChange={this.handleChange.bind(this)}
        />
        <div>
          <button className={d.projectbutton} onClick={this.findProject.bind(this)}>Delete</button>
        </div>
        <table className={s.project}>
          {/* <tr>
            <td>{this.state.project[0]}</td>
          </tr> */}
          <h3>{this.state.err}</h3>
        </table>
      </div>
    );
  }
}

export default ProjectDelete;
