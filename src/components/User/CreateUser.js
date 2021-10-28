import React, { Component } from 'react';
import UserService from '../../Service/UserService';

class CreateUser extends Component {
    constructor(props){
        super(props)
        this.state={
            users: []
        }
    }
    componentDidMount(){
        UserService.ValidateLogin().then((res)=>{
this.setState({users:res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className ="text-center" >User List</h2>
                <div className="row">
                    <table className="table table-striped table-border">
                        <thead>
                            <tr>
                                <th>UserPassword</th>
                                <th>UserRole</th>
                                <th>UserId</th>
                                {/* <th> Action</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user=>
                                    <tr key={user.userId}>
                                   <td>{user.password}</td>    
                                   <td>{user.role}</td> 
                                   <td>{user.userId}</td>
                                   
                                   
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CreateUser;