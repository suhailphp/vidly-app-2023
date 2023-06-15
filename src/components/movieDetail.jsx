import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom'

class MovieDetail extends Component {
    
    handleSave=()=>{
        const naviagete = useNavigate();
        naviagete.push('/movies');
    }
    render() { 
        return (
            <div className="row">
                <div className="col-12">
                    <h1>Movie Detail page</h1>
                    <button className="btn btn-sm btn-info" onClick={this.handleSave}>Save</button>
                </div>
            </div>
        );
    }
}
 
export default MovieDetail;

