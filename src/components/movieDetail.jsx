import React from 'react';
import {useParams} from "react-router-dom"

const MovieDetail = (props) => {
    const params = useParams()
    console.log(params);
    return ( 
        <div className="row">
            <div className="col-12">
                <h1>Movie ID is {params.ID}</h1>
            </div>
        </div>
     );
}
 
export default MovieDetail;