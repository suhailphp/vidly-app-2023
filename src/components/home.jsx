import React from 'react';

const Home = (props) => {
    console.log(props.testProp);
    return ( 
        <div className="row">
            <div className="col-12">
                <h1>Home page</h1>
            </div>
        </div>
     );
}
 
export default Home;