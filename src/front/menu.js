import React from 'react';
import {Link} from 'react-router-dom';
import  s from './style.module.css';
import { GoOrganization } from 'react-icons/go';

class Menu extends React.Component {
    render(){
        return(
            <nav className={s.sidemenu}>
                <div >
                    <h2>PROGDash</h2>
                </div> 
                <ul >                                      
                    <Link to='/projects'>
                        <li><GoOrganization/> Projects</li>
                    </Link>
                    <Link to='/rolls'>
                        <li>Roles</li>
                    </Link>
                    <Link to='/tasks'>
                        <li>Tasks</li>
                    </Link>
                    <Link to='/users'>
                        <li>Users</li>
                    </Link>
                </ul>
                </nav>
        )
    }
}
export default Menu;