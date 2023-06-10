import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from 'lodash'

import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate"
import MoviesTable from "./moviesTable";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre:{_id:null,name:'All Movies'},
    sortColumn:{path:'title',order:'asc'},
    currentPage:1,
    pageSize:4
  };
  componentDidMount(){
    this.setState({movies:getMovies(),genres:[{_id:null,name:'All Movies'},...getGenres()]})
  }
  handleSort = (path) =>{
    let order = (this.state.sortColumn.order === 'asc' && this.state.sortColumn.path === path)?'desc':'asc'
    //console.log(path,order);
    this.setState({sortColumn:{path,order}})
  }
  handlePageChange = (page) =>{
    this.setState({currentPage:page})
  }
  handleGenreSelect= (genre)=>{
    this.setState({selectedGenre:genre,currentPage:1})
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked 
    this.setState({movies})
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies: movies });
  };
  render() {
    const {movies:AllMovies,currentPage,pageSize,selectedGenre,sortColumn} = this.state
    const filteredMovies = (selectedGenre._id)?AllMovies.filter(movie=>movie.genre._id === selectedGenre._id):AllMovies
    const sortedMovie = _.orderBy(filteredMovies,[sortColumn.path],[sortColumn.order])
    const movies = paginate(sortedMovie,currentPage,pageSize)
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
            onSort={this.handleSort}
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

  
}

export default Movies;
