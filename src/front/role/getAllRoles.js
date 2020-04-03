import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class getAllRoles extends React.Component {
    state = {
        roles: [],
        error: ""
    }

    componentDidMount() {
        // axios.get('http://localhost:3001/roll')
        let token = "Bearer " + localStorage.getItem("jwt");          
          axios.get('http://localhost:3001/roll', {headers: {'Authorization': token }})
            .then(res => {
                console.log("res", res)
                const roles = res.data;
                this.setState({ roles });
            })
            .catch(error => {
                if(error.response.status === 401){
                  this.setState({error: "You aren't authorized!"})
                } else if (error.response.status === 403){
                  this.setState({error: "You don't have administrator rights!"})
                }
            });

    }

    render() {

        return (
            <div style={{ marginLeft: "220px" }}>
                <table className={s.roll} >
                    <tr >
                        <th>Role Name</th>
                    </tr>
                    {this.state.roles.map(role =>

                        <tr>
                            <td>{role.rollName}</td>
                        </tr>

                    )}
                </table>
                <div style={{marginLeft: "250px", marginTop: "30px"}}><h1>{this.state.error}</h1></div>
            </div>
        )
    }
}

export default getAllRoles;