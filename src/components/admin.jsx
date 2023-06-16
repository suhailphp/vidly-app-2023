import React, { Component } from 'react';
import {Route,Routes,NavLink} from 'react-router-dom'
import User from './user'
import Post from './post'

class Admin extends Component {
    
    render() { 
        return (
            <div className="row">
                <div className="col-12">
                    <h1>Admin dasboard</h1>
                     <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/admin/user" className="nav-link" >
                            Users
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/post" className="nav-link">
                            Post
                            </NavLink>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/user" exact element={<User/>} />
                        <Route path="/post" exact element={<Post/>} />
                    </Routes>
                    
                </div>
            </div>
        );
    }
}
 
export default Admin;

