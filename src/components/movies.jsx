import React, { Component } from "react";
import { getMovies,deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import _ from 'lodash'

import ListGroup from "./common/listGroup"
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate"
import MoviesTable from "./moviesTable";
import Input from './common/input';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre:{genreID:null,name:'All Movies'},
    sortColumn:{path:'title',order:'asc'},
    currentPage:1,
    pageSize:4,
    searchQuery:''
  };
  async componentDidMount(){
    let genres = await getGenres()
    this.setState({
      movies:await getMovies(),
      genres:[{genreID:null,name:'All Movies'},...genres]
    })
  }
  handleSort = (sortColumn) =>{
    this.setState({sortColumn})
  }
  handlePageChange = (page) =>{
    this.setState({currentPage:page})
  }
  handleGenreSelect= (genre)=>{
    this.setState({selectedGenre:genre,currentPage:1,searchQuery:''})
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked 
    this.setState({movies})
  }
  handleDelete = async (movie) => {
    let originalMovie = this.state.movies
    const movies = this.state.movies.filter((mov) => mov.movieID !== movie.movieID);
    this.setState({ movies: movies });
    try{
      await deleteMovie(movie.movieID)
    }
    catch(e){
      if(e.response && e.response.status == 404){
        alert('Movie already deleted')
      }
      this.setState({movies:originalMovie})
    }
  };
  handleSearch =(e) =>{
    this.setState({searchQuery:e.currentTarget.value})
  }
  render() {
    const {movies:AllMovies,currentPage,pageSize,selectedGenre,sortColumn,searchQuery} = this.state
    const searchedMovie = (searchQuery)?AllMovies.filter(movie=>movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())):AllMovies
    const filteredMovies = (selectedGenre.genreID)?searchedMovie.filter(movie=>movie.Genre.genreID === selectedGenre.genreID):searchedMovie
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

           <Input
                name='search'
                label='Search movie'
                value={this.state.searchQuery}
                error=''
                onChange={this.handleSearch}
            ></Input>

            <p>Total {this.state.movies.length} movie</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
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
