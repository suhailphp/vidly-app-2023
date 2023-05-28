import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like"
import Pagination from "./pagination";
class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage:1,
    pageSize:2
  };
  render() {

    return (
      <>
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
            {this.state.movies.map((movie) => {
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
          itemCount={this.state.movies.length}
          onPageChange={this.handlePageChange}

        ></Pagination>
      </>
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
    console.log(page);
    this.setState({currentPage:page})
  }
}

export default Movies;
