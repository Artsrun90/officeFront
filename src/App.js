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
import ProjectsAll from "./front/projects/projectAll";
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

class App extends React.Component {         
  

  render() {
    return (
      <Router>    
        <Navigation/>
        <Menu />
        <AllComponents/>
      </Router>
    );
  }
}
function refreshPage() {
  window.location.reload(false);
}
const Navigation = () => (
  <div style={{backgroundColor: "#EAEAEA"}}>
                {                                                                                                
                  localStorage.getItem("jwt") ? 
                  <div className={s.Sign_in_up} style={{marginLeft: "1000px"}}>
                  <Link to="/account">
                      <button>My account</button>
                  </Link>
                  <Link to="/log_out">
                      <button onClick={refreshPage}>Log out</button>
                  </Link>
                  </div>
                  :
                <div className={s.Sign_in_up}>                
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
          <Route path="/projects/all" component={ProjectsAll} />
          <Route path="/projects/find" component={ProjectFind} />
          <Route path="/projects/create" component={ProjectCreate} />
          <Route path="/projects/update" component={ProjectUpdate} />
          <Route path="/projects/delete" component={ProjectDelete} />
          <Route path="/roles/all" component={GetAllRoles} />
          <Route path="/roles/create" component={RoleCreate} />
          <Route path="/roles/update" component={RoleUpdate} />
          <Route path="/roles/delete" component={RoleDelete} />
          <Route path="/tasks/all" component={ТaskGetAll} />
          <Route path="/tasks/create" component={Тaskcreate} />
          <Route path="/tasks/update" component={ТaskUpdate} />
          <Route path="/tasks/delete" component={TaskDelete} />
          <Route path="/users/all" component={UsersGetAll} />
  </Switch>
);

export default App;
