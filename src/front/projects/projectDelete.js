import React from "react";
import axios from "axios";
import s from "./project.module.css";

class ProjectDelete extends React.Component {
    state = {
      project: [],
      projectID: "",
      err: ""
    };
  

  handleChange = event => {
    const projectID = event.target.value;
    this.setState({ projectID });
  };

  findProject = (event) => {
    event.preventDefault();
      this.setState({
        err:""})    
    const form = event.target;
    // axios.delete(`http://localhost:3001/projects/${this.state.pro}`)
    let token = "Bearer " + localStorage.getItem("jwt")
      axios({ method: 'delete', url: `http://localhost:3001/projects/${this.state.projectID}`, headers: {'Authorization': token }})
      .then(response => {
        if(response.status === 200) this.setState({ err: "Deleteed" });         
        })
      .catch(error => {
          if(error.response.status === 401){
            this.setState({err: "You aren't authorized!"})
          } else if (error.response.status === 403){
            this.setState({err: "You don't have administrator rights!"})
          } else if(error.response.status === 404){
            this.setState({err: "Not found!"})
          }
      });

      form.reset();
  };

  render() {
    return (
      <form className={s.myform} style={{height:"200px"}} onSubmit={this.findProject.bind(this)}>
            <h1 style={{color:"#363B45"}}>Delete project</h1>
            <div>
            <input 
            id="projectID"
            name="taskID"                   
            placeholder="Enter project ID"
            type="text"
            onChange={this.handleChange.bind(this)} />
            </div>
            <p style={{color:"#E10C0C"}}>{this.state.err}</p>
            <input 
                type="submit"
                value="Delete"
                />
          </form>
    );
  }
}

export default ProjectDelete;
