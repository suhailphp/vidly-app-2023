import React, { Component } from 'react';
import Input from './common/input';
class Login extends Component {
    state = {
        account:{userName:'',password:''}
    } 
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submitted');
    }
    handleChange = (e)=>{
        let account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account})
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Login Form</h1>
                <Input
                    name='userName'
                    label='User Name'
                    onChange={this.handleChange}
                ></Input>
                <Input
                    name='password'
                    label='Password'
                    type='password'
                    onChange={this.handleChange}
                ></Input>
                <button className="btn btn-primary">Submit</button>
            </form>  
        );
    }
}
 
export default Login;