import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Tasks from './tasks';
import Menu from './menu';
import Projects from './projects';
import Rolls from './rolls';
import ТaskGetAll from './tasks/taskGetAll'
import Тaskcreate from './tasks/taskscreate'
import ТaskUpdate from './tasks/tasksUpdate'
import Users from './users';


class App extends React.Component {
  
    render() {
        return (
        <Router>               
            <Menu/>                              
            <Switch>
                <Route path='/' exact component={Projects}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/rolls' component={Rolls}/>
                <Route path='/tasks/all' component={ТaskGetAll}/>
                <Route path='/tasks/create' component={Тaskcreate}/>
                <Route path='/tasks/update' component={ТaskUpdate}/>
                <Route path='/users' component={Users}/>
            </Switch>                                
        </Router>            
         );
    }
}
export default App;