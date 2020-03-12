import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './menu';
import Projects from './projects';
import GetAllRoles from './role/getAllRoles';
import RoleCreate from './role/roleCreate';
import RoleUpdate from './role/roleUpdate';
import RoleDelete from './role/deleteRole';
import ТaskGetAll from './tasks/taskGetAll'
import Тaskcreate from './tasks/taskscreate'
import ТaskUpdate from './tasks/tasksUpdate'
import TaskDelete from './tasks/deleteTask'
import Users from './users';


class App extends React.Component {
  
    render() {
        return (
        <Router>               
            <Menu/>                              
            <Switch>
                <Route path='/' exact component={Projects}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/roles/all' component={GetAllRoles}/>
                <Route path='/roles/create' component={RoleCreate}/>
                <Route path='/roles/update' component={RoleUpdate}/>
                <Route path='/roles/delete' component={RoleDelete}/>
                <Route path='/tasks/all' component={ТaskGetAll}/>
                <Route path='/tasks/create' component={Тaskcreate}/>
                <Route path='/tasks/update' component={ТaskUpdate}/>
                <Route path='/tasks/delete' component={TaskDelete}/>
                <Route path='/users' component={Users}/>
            </Switch>                                
        </Router>            
         );
    }
}
export default App;