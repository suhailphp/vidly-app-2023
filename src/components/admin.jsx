import React, { Component } from 'react';
import {Route,Routes,Link} from 'react-router-dom'
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
                            <Link to="/admin/user" className="nav-link" >
                            Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/post" className="nav-link">
                            Post
                            </Link>
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

