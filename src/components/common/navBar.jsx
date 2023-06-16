import {NavLink} from "react-router-dom"
const navBar = (props) => {
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
        </ul>
     );
}
export default navBar;