import React from 'react';
import {useParams} from "react-router-dom"

const NotFound = (props) => {
    const params = useParams()
    console.log(params);
    return ( 
        <div className="row">
            <div className="col-12">
                <h1>Page not found</h1>
            </div>
        </div>
     );
}
 
export default NotFound;