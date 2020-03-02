import React from 'react';
import  s from './style.module.css';
import UserGetAll from './usergetall';

class Users extends React.Component {
    render(){
        return(
            <div className={s.div}>
            <UserGetAll/>
            </div>
        )
    }
}

export default Users;