import {Route,Routes,Navigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import Home from "./components/home";
import About from "./components/about";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
// import MovieDetail from "./components/movieDetail";
import Admin from "./components/admin";
import LoginFrom from "./components/loginForm";
import RegisterFrom from "./components/registerForm";
import MovieForm from "./components/movieForm";
import Logout from "./components/logout";

import "./App.css";



import React, { Component } from 'react';
class App extends Component {
  state = {  } 
   async componentDidMount() {
    try{
      let employee = jwtDecode(localStorage.getItem("token"));
      await this.setState({employee})
    }
    catch(e){
      console.log(e)
    }
  }

  render() { 
    return (
    <div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/"className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg viewBox="0 0 24 24" fill="currentColor" className="bi me-2" width="40" height="32" >
            <path d="M3.5 3.75a.25.25 0 01.25-.25h13.5a.25.25 0 01.25.25v10a.75.75 0 001.5 0v-10A1.75 1.75 0 0017.25 2H3.75A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 000-1.5h-7a.25.25 0 01-.25-.25V3.75z" />
            <path d="M6.25 7a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm-.75 4.75a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm16.28 4.53a.75.75 0 10-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 10-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5.5-5.5z" />
          </svg>
          <span className="fs-4">Vidly app</span>
        </a>
        <NavBar employee={this.state.employee} />
      </header>
      <main className="container">
        <Routes>
            <Route path="/register" exact element={<RegisterFrom />} />
            <Route path="/login" exact element={<LoginFrom />} />
            <Route path="/movies/:movieID" exact element={<MovieForm />} />
            <Route path="/movies" exact element={<Movies/>} />
            <Route path="/about" exact element={<About/>} />
            <Route path="/admin/*" element={<Admin/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/notFound" element={<NotFound/>} />
            <Route path="/" exact element={<Home />} />
            <Route
                path="*"
                element={<Navigate to="/notFound" replace />}
            />
            
        </Routes>
      </main>
    </div>
  );
  }
}
 
export default App;

