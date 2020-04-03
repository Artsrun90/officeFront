import React from 'react';
import {Link} from 'react-router-dom';
import  s from './style.module.css';
import { IoIosContacts } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { FaBuffer } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
// import axios from "axios";
// import Avatar from "./avatar.png"


class Menu extends React.Component {
state = {
    showProject: false,
    iconProject: <IoIosArrowDown/>,
    showRole: false,
    iconRole: <IoIosArrowDown/>,
    showTask: false,
    iconTask: <IoIosArrowDown/>,
    showUser: false,
    iconUser: <IoIosArrowDown/>,
    showUserTask: false,
    iconUserTask: <IoIosArrowDown/>,
    userName: ""
}

// componentDidMount(){
//     let token = "Bearer " + localStorage.getItem("jwt");
//     axios.get(`http://localhost:3001/users`, {headers: {'Authorization': token }})
//     .then(response =>{ 
//         console.log("response",response.data)  
//         this.setState({
//             userName: response.data.userName
//         })         
//         })               
// }

showProject(event) {
    event.preventDefault();       
    this.setState({
        showProject: !this.state.showProject,
    });
    if(this.state.showProject){
        this.setState({
            iconProject: <IoIosArrowDown/>
        })
    } else{
        this.setState({
            iconProject: <IoIosArrowUp/>
        })
    }
  }

showRole(event) {
    event.preventDefault();       
    this.setState({
        showRole: !this.state.showRole,
    });
    if(this.state.showRole){
        this.setState({
            iconRole: <IoIosArrowDown/>
        })
    } else{
        this.setState({
            iconRole: <IoIosArrowUp/>
        })
    }
  }

showTask(event) {
    event.preventDefault();       
    this.setState({
        showTask: !this.state.showTask,
    });
    if(this.state.showTask){
        this.setState({
            iconTask: <IoIosArrowDown/>
        })
    } else{
        this.setState({
            iconTask: <IoIosArrowUp/>
        })
    }
  }

showUser(event) {
    event.preventDefault();       
    this.setState({
        showUser: !this.state.showUser,
    });
    if(this.state.showUser){
        this.setState({
            iconUser: <IoIosArrowDown/>
        })
    } else{
        this.setState({
            iconUser: <IoIosArrowUp/>
        })
    }
  }
showUserTask(event) {
    event.preventDefault();       
    this.setState({
        showUserTask: !this.state.showUserTask,
    });
    if(this.state.showUserTask){
        this.setState({
            iconUserTask: <IoIosArrowDown/>
        })
    } else{
        this.setState({
            iconUserTask: <IoIosArrowUp/>
        })
    }
  }
  

    render(){
        return(
            <nav className={s.sidemenu}>
                <div style={{fontSize: "30px", backgroundColor: "gray", paddingTop:"20px", paddingBottom:"5px"}}>
                    <Link  style={{textDecoration:"none"}} to="/">
                    <h2>PROGDash </h2>
                    </Link>
                </div> 
                <ul style={{width: "100%"}}>     
                                                     
                    <Link to='/projects' style={{textDecoration:"none"}} onClick={this.showProject.bind(this)}>
                         <li ><FaBuffer/> Projects {this.state.iconProject}</li>
                    </Link>
                    
                    {this.state.showProject
                    ?
                    (<div style={{marginLeft:"30px", backgroundColor: "#474C56"}}>

                    <Link to='/projects/all' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- All</li>
                    </Link>

                    <Link to='/projects/find' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Find</li>
                    </Link>

                    <Link to='/projects/create' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Create</li>
                    </Link>

                    <Link to='/projects/update' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Update</li>
                    </Link>

                    <Link to='/projects/delete' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Delete</li>
                    </Link>

                    </div>)
                    :(null)}

                    <Link to='/roles' style={{textDecoration:"none"}} onClick={this.showRole.bind(this)}>
                        <li><IoIosContact/> Roles {this.state.iconRole}</li>
                    </Link>

                    {this.state.showRole
                    ?
                    (<div style={{marginLeft:"30px", backgroundColor: "#474C56"}}>

                    <Link to='/roles/all' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- All</li>
                    </Link>

                    <Link to='/roles/find' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Find</li>
                    </Link>

                    <Link to='/roles/create' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Create</li>
                    </Link>

                    <Link to='/roles/update' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Update</li>
                    </Link>

                    <Link to='/roles/delete' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Delete</li>
                    </Link>

                    </div>)
                    :(null)}


                    <Link to='/tasks' style={{textDecoration:"none"}} onClick={this.showTask.bind(this)}>
                        <li><IoIosDocument/> Tasks {this.state.iconTask}</li>
                    </Link>

                    {this.state.showTask
                    ?
                    (<div style={{marginLeft:"30px", backgroundColor: "#474C56"}}>

                    <Link to='/tasks/all' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- All</li>
                    </Link>

                    <Link to='/tasks/find' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Find</li>
                    </Link>

                    <Link to='/tasks/create' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Create</li>
                    </Link>

                    <Link to='/tasks/update' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Update</li>
                    </Link>

                    <Link to='/tasks/delete' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Delete</li>
                    </Link>

                    </div>)
                    :(null)}

                    <Link to='/users' style={{textDecoration:"none"}} onClick={this.showUser.bind(this)}>
                        <li><IoIosContacts/> Users {this.state.iconUser}</li>
                    </Link>

                    {this.state.showUser
                    ?
                    (<div style={{marginLeft:"30px", backgroundColor: "#474C56"}}>

                    <Link to='/users/all' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- All</li>
                    </Link>

                    <Link to='/users/find' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Find</li>
                    </Link>

                    <Link to='/users/create' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Create</li>
                    </Link>

                    <Link to='/users/update' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Update</li>
                    </Link>

                    <Link to='/users/delete' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Delete</li>
                    </Link>

                    </div>)
                    :(null)}
                    <Link to='/users' style={{textDecoration:"none"}} onClick={this.showUserTask.bind(this)}>
                        <li><IoIosContacts/> AbUser {this.state.iconUserTask}</li>
                    </Link>

                    {this.state.showUserTask
                    ?
                    (<div style={{marginLeft:"30px", backgroundColor: "#474C56"}}>

                    <Link to='/user-task' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- UserTask</li>
                    </Link>

                    <Link to='/tasks-of-user' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- TasksOfUser</li>
                    </Link>  

                    <Link to='/user-task-create' style={{textDecoration:"none"}}>
                        <li style={{fontSize:"20px"}}>- Create</li>
                    </Link> 

                    </div>)
                    :(null)}
                </ul>
                </nav>
               
        )
    }
}
export default Menu;