import React, { Component } from 'react';
import Like from "./common/like"
import Table from './common/table';
import {Link} from "react-router-dom"
class MoviesTable extends Component {
    
    render() { 
      const {movies} = this.props;
      const columns = [
        {path:'title',label:'Title',content:(movie=><Link to={`/movies/${movie.movieID}`}>{movie.title}</Link>)},
        {path:'genre.name',label:'Genre'},
        {path:'numberInStock',label:'Stock'},
        {path:'dailyRentalRate',label:'Rate'},
        {key:'like',content: (movie=><Like liked={movie.liked} onClick={()=>this.props.onLike(movie)}/>)},
        {key:'action', content:(movie=><button onClick={() => this.props.onDelete(movie)} className="btn btn-sml btn-danger" >Delete </button>) },
      ]
        return (
            <Table
              data={movies}
              columns={columns}
              onSort={this.props.onSort}
              sortColumn={this.props.sortColumn}
            ></Table>
        );
    }
}
 
export default MoviesTable;