import React from 'react';
import axios from 'axios';
import Pagination from '../tasks/pagination';
import ProjectsPagein from './projectpagein';
import Lodding from '../lodding/lodding';

class ProjectGetAll extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        projects: [],
        currentPage: 1,
        projectPerpage: 10,
        lodding: false,
        error: ""
      }  }  
      
        componentDidMount ()  {
          console.log("Lodding4:", this.state.lodding)
        const foo = () => { 
          let token = "Bearer " + localStorage.getItem("jwt");          
          axios.get('http://localhost:3001/projects', {headers: {'Authorization': token }})
          .then(res => {
            console.log("status:", res.status)
            console.log("res",res)
            const projects = res.data;
            this.setState({ projects });            
            
          })
          .catch(error => {
            if(error.response.status === 401){
              this.setState({error: "You aren't authorized!"})
            } else if (error.response.status === 403){
              this.setState({error: "You don't have administrator rights!"})
            }else if (error.response.status === 404){
              this.setState({error: "Not found!"})
            }
        });
        this.setState({
          lodding: !this.state.lodding
       })
      }
          this.setState({lodding: !this.state.lodding})
          window.setTimeout(foo, 1000) 
          }

 paginate = (pageNumber) => this.setState({currentPage: pageNumber});
                    
 render() {
                      
   const indexOfLastProjects = this.state.currentPage*this.state.projectPerpage;
   const indexOfFirstProjects = indexOfLastProjects-this.state.projectPerpage;
   const currentProjects = this.state.projects.slice(indexOfFirstProjects, indexOfLastProjects);
 //commit
 //commit
   return (
  <div>
   {console.log("Lodding3:",this.state.lodding)}
    <ProjectsPagein projects={currentProjects}/> 
    <Pagination tasksPerpage={this.state.projectPerpage} totalTasks={this.state.projects.length} paginate={this.paginate.bind(this)}/>
    <Lodding lodding={this.state.lodding}/>               
   <div style={{marginLeft: "550px"}}><h1>{this.state.error}</h1></div>
   </div>
        )
      }
}

export default ProjectGetAll;