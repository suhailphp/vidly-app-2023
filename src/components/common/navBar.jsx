const navBar = (props) => {
    return ( 
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/movies" className="nav-link">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
        </ul>
     );
}
 
export default navBar;