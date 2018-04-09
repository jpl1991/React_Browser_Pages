import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {

			data: {
    			email: ' ',
    			password: '      '

    			},
    		loading: false,
    		errors: {}

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
    	if(Object.keys(errors).length===0){
    		this.props.submit(this.state.data);
    	}

    };
	
	validate = (data) =>{
		const errors = {};
		if(!Validator.isEmail(data.email)) errors.email = "Invalid email";
		if(!data.password) errors.password = "Can't be blank";
		return errors;
	}
    render() {
    	//const data = {state.data};
        return (
        	<div>
        		<Form onSubmit = {this.onsubmit}>
        			<field>
        				<lable>Emial</lable>
        				<input type  = 'email' id = 'email' name ='email' placeholder = 'example@example.com'
        						value = {this.state.data.email} onChange = {this.onChange}/>
        				<h5>{this.state.errors.email && <InlineError text = {this.state.errors.email }/>}</h5>
        			</field>
					
        			<field >

        				<lable>Password</lable>
        				<input type  = 'password' id = 'password' name ='password' placeholder = 'make it secure '
        						value = {this.state.data.password} onChange = {this.onChange}/>
						<h5>{this.state.errors.password && <InlineError text = {this.state.errors.password }/>}</h5>
        				
        			</field>
        			<Button primary>Login</Button>
        		</Form>
        	</div>
            
        );
    }
   
}

LoginForm.propTypes = {
      //prop: React.PropTypes.Type
      submit:PropTypes.func.isRequired
    };

export default LoginForm;
