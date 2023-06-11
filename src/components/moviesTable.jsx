import React, { Component } from 'react';
import Like from "./common/like"
class MoviesTable extends Component {
    raiseSort = path =>{
      let {sortColumn,onSort} = this.props
      let order = (sortColumn.order === 'asc' && sortColumn.path === path)?'desc':'asc'
      sortColumn = {path,order}
      onSort(sortColumn)
    }
    render() { 
      const {movies,onSort,onLike,onDelete} = this.props;
        return (<>
            <table className="table">
            <thead>
              <tr>
                <th onClick={()=>this.raiseSort('title')} scope="col" style={{cursor:'pointer'}}>Title</th>
                <th onClick={()=>this.raiseSort('genre.name')} scope="col" style={{cursor:'pointer'}}>Genre</th>
                <th onClick={()=>this.raiseSort('numberInStock')} scope="col" style={{cursor:'pointer'}}>Stock</th>
                <th onClick={()=>this.raiseSort('dailyRentalRate')} scope="col" style={{cursor:'pointer'}}>Rate</th>
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
        </>);
    }
}
 
export default MoviesTable;