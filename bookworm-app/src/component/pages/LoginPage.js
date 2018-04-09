import React from 'react';

import LoginForm from '../forms/LoginForm';

class LoginPages extends React.Component {
   
	submit = data =>{
		console.log(data);
	}

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>

    			<h1>Login page</h1>

    			<LoginForm submit={this.submit}/>

    		</div>
        );
    }
}


export default LoginPages;

