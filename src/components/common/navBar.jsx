import React from 'react';

import {NavLink} from "react-router-dom"
const navBar = ({employee}) => {
    return ( 
        <ul className="nav nav-pills">
          <li className="nav-item">
            
          </li>
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
          </li>
          {(!employee)?
          <React.Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
          </React.Fragment>
          :
          <React.Fragment>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                  {(employee)?employee.name:''}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  logout
                </NavLink>
              </li>
          </React.Fragment>
}

          
        </ul>
     );
}
export default navBar;