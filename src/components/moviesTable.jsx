import React, { Component } from 'react';
import Like from "./common/like"
import TableHeader from './common/tableHeader';
class MoviesTable extends Component {
    
    render() { 
      const columns = [
        {path:'title',label:'Title'},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'like'},
        {key:'action'},
      ]
      const {movies,onLike,onDelete} = this.props;
        return (
            <table className="table">
            <TableHeader
              onSort={this.props.onSort}
              sortColumn={this.props.sortColumn}
              columns={columns}
            ></TableHeader>
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
                        onClick={()=>onLike(movie)}
                      >
                      </Like>
                    </td>
                    <td>
                      <button
                        onClick={() => onDelete(movie)}
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
        );
    }
}
 
export default MoviesTable;