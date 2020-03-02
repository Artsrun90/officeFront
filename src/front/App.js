import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Tasks from './tasks';
import Menu from './menu';
import Projects from './projects';
import Rolls from './rolls';
import Тasks from './tasks'
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
                <Route path='/tasks' component={Тasks}/>
                <Route path='/users' component={Users}/>
            </Switch>                                
        </Router>            
         );
    }
}
export default App;