import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like"
import ListGroup from "./listGroup"
import Pagination from "./pagination";
import {paginate} from "../utils/paginate"
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre:{_id:null,name:'All Movies'},
    currentPage:1,
    pageSize:4
  };
  componentDidMount(){
    this.setState({movies:getMovies(),genres:[{_id:null,name:'All Movies'},...getGenres()]})
  }
  render() {
    const {movies:AllMovies,currentPage,pageSize,selectedGenre} = this.state
    const filteredMovies = (selectedGenre._id)?AllMovies.filter(movie=>movie.genre._id === selectedGenre._id):AllMovies
    const movies = paginate(filteredMovies,currentPage,pageSize)
    //console.log(movies)
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          >
          </ListGroup>
        </div>
        <div className="col-10">
            <p>Total {this.state.movies.length} movie</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like 
                        liked={movie.liked}
                        onClick={()=>this.handleLike(movie)}
                      >
                      </Like>
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-sml btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            currentPage={this.state.currentPage}
            pageSize={this.state.pageSize}
            itemCount={filteredMovies.length}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
        
      </div>
    );
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked 
    this.setState({movies})
  }

  handlePageChange = (page) =>{
    this.setState({currentPage:page})
  }

  handleGenreSelect= (genre)=>{
    this.setState({selectedGenre:genre,currentPage:1})
  }
}

export default Movies;
