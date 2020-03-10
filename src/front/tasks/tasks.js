import React from 'react';
import  s from './style.module.css';
import TaskCreate from './taskscreate';
import TaskGetAll from './taskGetAll';


class Tasks extends React.Component {
    render(){
        return(
            <div >
              <TaskCreate/>
              <TaskGetAll/>
            </div>
            
        )
    }
}

export default Tasks;