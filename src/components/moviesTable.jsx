import React, { Component } from 'react';
import Like from "./common/like"
class MoviesTable extends Component {
    state = { movies:this.props.movies } 
    render() { 
        return (<>
            <table className="table">
            <thead>
              <tr>
                <th onClick={()=>this.props.onSort('title')} scope="col" style={{cursor:'pointer'}}>Title</th>
                <th onClick={()=>this.props.onSort('genre.name')} scope="col" style={{cursor:'pointer'}}>Genre</th>
                <th onClick={()=>this.props.onSort('numberInStock')} scope="col" style={{cursor:'pointer'}}>Stock</th>
                <th onClick={()=>this.props.onSort('dailyRentalRate')} scope="col" style={{cursor:'pointer'}}>Rate</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like 
                        liked={movie.liked}
                        onClick={()=>this.props.onLike(movie)}
                      >
                      </Like>
                    </td>
                    <td>
                      <button
                        onClick={() => this.props.onDelete(movie)}
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
        </>);
    }
}
 
export default MoviesTable;