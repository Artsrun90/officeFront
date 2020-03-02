import React from 'react';
import axios from 'axios';
import  s from './style.module.css';

class UserGetAll extends React.Component {
    state = {
        users: []
      }    
      
        handleSubmit = (event) => {
            event.preventDefault();
        axios.get('http://localhost:3001/users/getAllUsers')

          .then(res => {
            console.log(res)
            const users = res.data;
            this.setState({ users });
          })
        }
      
    
      render() {
        return (
            <div className={s.button} >
            < button  className={s.butt} onClick={this.handleSubmit.bind(this)}>GetAll</button>
          <ul>
            { this.state.users.map(users => <div>
              <h3><li>{users.userName}</li></h3>
              <h3>{users.date_Of_Birth}</h3>
              <h3>{users.gender}</h3>
              <h2>-------------------------------</h2>
              {/* <h3><li>{tasks.taskDescription}</li></h3> */}
            </div>)}

          </ul>
          </div>
        )
      }
}

export default UserGetAll;