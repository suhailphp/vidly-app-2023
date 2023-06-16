import React from 'react';
import {useParams} from "react-router-dom"

const MovieDetail = (props) => {
    const params = useParams()
    return ( 
        <div className="row">
            <div className="col-12">
                <h1>Movie ID is {params.ID}</h1>
                <button className="btn btn-sm btn-info" onClick={()=>props.history.push('/movies')}>Save</button>
            </div>
        </div>
     );
}
 
export default MovieDetail;