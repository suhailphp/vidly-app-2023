import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate"
import MoviesTable from "./moviesTable";
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
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          ></MoviesTable>
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
