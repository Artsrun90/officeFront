import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Menu from "./front/menu";

import GetAllRoles from "./front/role/getAllRoles";
import RoleCreate from "./front/role/roleCreate";
import RoleUpdate from "./front/role/roleUpdate";
import RoleDelete from "./front/role/deleteRole";
import ТaskGetAll from "./front/tasks/taskGetAll";
import Тaskcreate from "./front/tasks/taskscreate";
import ТaskUpdate from "./front/tasks/tasksUpdate";
import TaskDelete from "./front/tasks/deleteTask";
import Programming from "./front/Programming";
import ProjectsAll from "./front/projects/projectgetall";
import ProjectFind from "./front/projects/projectFind";
import ProjectCreate from "./front/projects/projectCreate";
import ProjectUpdate from "./front/projects/projectUpdate";
import ProjectDelete from "./front/projects/projectDelete";
import SignUp from "./front/signUp/signUp";
import SignIn from "./front/signIn/signIn";
import UsersGetAll from "./front/users/usergetall";
import Logout from "./front/logOut/logOut";
import  s from './front/style.module.css';
import Account from "./front/account/account";
import RoleFind from "./front/role/rolefind";
import TaskFind from "./front/tasks/taskFind";
import UserFind from "./front/users/userFind";
import UsersCreate from "./front/users/userCreate";
import UsersUpdate from "./front/users/userUpdate";
import UsersDelete from "./front/users/deleteUser";

import axios from "axios";
import Avatar from "./front/avatar.png"
import UserTask from "./front/user_task/user-task";
import TasksOfUser from "./front/user_task/tasksOfUser";
import UpdateYourself from "./front/account/updateYourself";
import UserTasksCreate from "./front/user_task/userTaskCreate";

class App extends React.Component { 
  constructor(props){
    super(props);
  this.state = {
    username: ""
  }
}

  componentDidMount(){
        let token = "Bearer " + localStorage.getItem("jwt");
        axios.get(`http://localhost:3001/users`, {headers: {'Authorization': token }})
        .then(response =>{  
            this.setState({
                userName: response.data.userName
            })         
            })               
    }

  render() {
    return (
      <Router>    
        <Navigation username={this.state.userName}/>
        <Menu />
        <AllComponents/>
      </Router>
    );
  }
}

const Navigation = (props) => (
  
  <div style={{backgroundColor: "#EAEAEA", height: "90px"}}>
                {console.log("name:",props)}
                {                                                                                                
                  localStorage.getItem("jwt") ? 
                  <div className={s.Sign_in_up} style={{ marginLeft: "200px"}}>                    
                  <div style={{float: "left"}}>                   
                      <img src={Avatar} alt="Avatar" className={s.avatar}/>
                      <div className={s.username}>
                      <p><b>{props.username}</b></p>
                      {/* width:"150px" */}
                      </div>
                  </div>
                  <div style={{float: "right"}}>
                  <Link to="/account">
                      <button>My account</button>
                  </Link>
                  <Link to="/log_out">
                      <button>Log out</button>
                  </Link>
                  </div>
                  </div>
                  :
                <div className={s.Sign_in_up} style={{marginLeft: "1010px"}}>                
                  <Link to="/sign_up" style={{width: "200px"}}>
                   <button>Sign Up</button>
                  </Link>
                  <Link to="/sign_in" style={{width: "200px"}}>
                    <button >Sign In</button>
                  </Link>
                </div>
                }
    </div>
);


const AllComponents = () => (
  <Switch>        
          <Route path="/" exact component={Programming} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/log_out" component={Logout} />
          <Route path="/account" component={Account} />
          <Route path="/update_yourself" component={UpdateYourself} />
          <Route path="/projects/all" component={ProjectsAll} />
          <Route path="/projects/find" component={ProjectFind} />
          <Route path="/projects/create" component={ProjectCreate} />
          <Route path="/projects/update" component={ProjectUpdate} />
          <Route path="/projects/delete" component={ProjectDelete} />
          <Route path="/roles/all" component={GetAllRoles} />
          <Route path="/roles/find" component={RoleFind}/>
          <Route path="/roles/create" component={RoleCreate} />
          <Route path="/roles/update" component={RoleUpdate} />
          <Route path="/roles/delete" component={RoleDelete} />
          <Route path="/tasks/all" component={ТaskGetAll} />
          <Route path="/tasks/find" component={TaskFind} />
          <Route path="/tasks/create" component={Тaskcreate} />
          <Route path="/tasks/update" component={ТaskUpdate} />
          <Route path="/tasks/delete" component={TaskDelete} />
          <Route path="/users/all" component={UsersGetAll} />
          <Route path="/users/find" component={UserFind} />
          <Route path="/users/create" component={UsersCreate} />
          <Route path="/users/update" component={UsersUpdate} />
          <Route path="/users/delete" component={UsersDelete} />
          <Route path="/user-task" component={UserTask} />
          <Route path="/tasks-of-user" component={TasksOfUser} />
          <Route path="/user-task-create" component={UserTasksCreate} />
  </Switch>
);

export default App;
