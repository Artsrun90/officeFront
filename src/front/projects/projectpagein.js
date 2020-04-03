import React from "react";
import s from "./project.module.css"

class ProjectsPagein extends React.Component {
  
  render() {
    console.log("Loddingprops:", this.props.lodding)
    return (
      <div style={{ marginLeft: "220px" }}>
        <div>
          <table className={s.project}>
            <tr>
              <th>Project Name</th>
              <th>Project Description</th>
            </tr>
            {this.props.projects.map(item => (
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
export default ProjectsPagein;
