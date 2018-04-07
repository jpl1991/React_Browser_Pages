import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom'; 

const HomePage = () => (

        <div>
        	<h1> Home page </h1>
        	<Link to ="/login"> Login </Link>
        </div>
   
);

export default HomePage;
