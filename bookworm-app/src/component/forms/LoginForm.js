import React from 'react';
import {Form, Button} from 'semantic-ui-react';

class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {

			data: {
    			email: ' ',
    			password: '      '

    			},
    		loading: false,
    		///errors: { }

		};
	}
    /*state = {
    	data: {
    		email: '',
    		password: ''

    	},
    	loading: false,
    	errors: {}

    };*/

    onChange = e =>
    	this.setState({
    		data:{...this.state.data, [e.target.name]:e.target.value}
    	});

    onsubmit = () =>{
    	const errors  = this.validate(this.state.data);

    	this.setState ({errors});
    }
	
	validate = (data) =>{
		const errors = {};
		if(!data.password) errors.password = "Can't be blank";
		return errors;
	}
    render() {
    	//const data = {state.data};
        return (
        	<div>
        		<Form onsubmit = {this.onsubmit}>
        			<field>
        				<lable>Emial</lable>
        				<input type  = 'email' id = 'email' name ='email' placeholder = 'example@example.com'
        						value = {this.state.data.email} onChange = {this.onChange}/>
        			</field>
        			<field>
        				<lable>Password</lable>
        				<input type  = 'password' id = 'password' name ='password' placeholder = 'make it secure '
        						value = {this.state.data.password} onChange = {this.onChange}/>
        			</field>
        			<Button primary>Login</Button>
        		</Form>
        	</div>
            
        );
    }
}

export default LoginForm;
