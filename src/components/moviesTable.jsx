import React, { Component } from 'react';
import Like from "./common/like"
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
class MoviesTable extends Component {
    
    render() { 
      const {movies,onLike,onDelete} = this.props;
      const columns = [
        {path:'title',label:'Title'},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'like',content: (movie=><Like liked={movie.liked} onClick={()=>this.props.onLike(movie)}/>)},
        {key:'action', content:(movie=><button onClick={() => this.props.onDelete(movie)} className="btn btn-sml btn-danger" >Delete </button>) },
      ]
        return (
            <table className="table">
            <TableHeader
              onSort={this.props.onSort}
              sortColumn={this.props.sortColumn}
              columns={columns}
            ></TableHeader>
            <TableBody
              data={movies}
              columns={columns}
            ></TableBody>
          </table>
        );
    }
}
 
export default MoviesTable;