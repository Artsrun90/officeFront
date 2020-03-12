import React from 'react';
import axios from 'axios';
import s from './role.module.css'

class getAllRoles extends React.Component {
    state = {
        roles: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/roll')
            .then(res => {
                console.log("res", res)
                const roles = res.data;
                this.setState({ roles });
            })

    }

    render() {

        return (
            <div style={{ marginLeft: "300px" }}>
                <table className={s.customers} >
                    <tr >
                        <th>Role Name</th>
                    </tr>
                    {this.state.roles.map(role =>

                        <tr>
                            <td>{role.rollName}</td>
                        </tr>

                    )}
                </table>
            </div>
        )
    }
}

export default getAllRoles;