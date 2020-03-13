import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./front/menu";

import GetAllRoles from "./front/role/getAllRoles";
import RoleCreate from "./front/role/roleCreate";
import RoleUpdate from "./front/role/roleUpdate";
import RoleDelete from "./front/role/deleteRole";
import ТaskGetAll from "./front/tasks/taskGetAll";
import Тaskcreate from "./front/tasks/taskscreate";
import ТaskUpdate from "./front/tasks/tasksUpdate";
import TaskDelete from "./front/tasks/deleteTask";
import Users from "./front/users";
import Programming from "./front/Programming";
import ProjectsAll from "./front/projects/projectAll";
import ProjectFind from "./front/projects/projectFind";
import ProjectCreate from "./front/projects/projectCreate";
import ProjectUpdate from "./front/projects/projectUpdate";
import ProjectDelete from "./front/projects/projectDelete";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Programming} />
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
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    );
  }
}
export default App;
