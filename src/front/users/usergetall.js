import React from 'react';
import axios from 'axios';
import UsersPagin from "./userspagin";
import Pagination from '../tasks/pagination';

class UsersGetAll extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        users: [],
        currentPage: 1,
        usersPerpage: 10,
        error: ""
      }  }  
      
        componentDidMount ()  {
          
          let token = "Bearer " + localStorage.getItem("jwt");          
          axios.get('http://localhost:3001/users/getAllUsers', {headers: {'Authorization': token }})
          .then(res => {
            console.log("status:", res.status)
            console.log("res",res)
            const users = res.data;
            this.setState({ users });            
            
          })
          .catch(error => {
            console.log("error:",error.response.status)
            if(error.response.status === 401){
              this.setState({error: "You aren't authorized!"})
            } else if (error.response.status === 403){
              this.setState({error: "You don't have administrator rights!"})
            }
        });
          }

 paginate = (pageNumber) => this.setState({currentPage: pageNumber});
                    
 render() {
                      
   const indexOfLastUsers = this.state.currentPage*this.state.usersPerpage;
   console.log("task",this.state.users)
   const indexOfFirstUsers = indexOfLastUsers-this.state.usersPerpage;
   const currentUsers = this.state.users.slice(indexOfFirstUsers, indexOfLastUsers);
 //commit
 //commit
   return (
  <div>
   {console.log("cur",currentUsers)}
    <UsersPagin users={currentUsers}/> 
    <Pagination tasksPerpage={this.state.usersPerpage} totalTasks={this.state.users.length} paginate={this.paginate.bind(this)}/>               
   <div style={{marginLeft: "550px"}}><h1>{this.state.error}</h1></div>
   </div>
        )
      }
}

export default UsersGetAll;