import React, { Component } from 'react';
import Input from './common/input';
class Login extends Component {
    state = {
        account:{userName:'',password:''},
        error:{}
    } 
    validate =()=>{
        let error = {}
        let {account} = this.state
        if(account.userName === '')
            error.userName = 'User name is required'
        if(account.password === '')
            error.password = 'Password is required'
        return Object.keys(error).length === 0?null:error
    }
    validateProperty=(input)=>{
        if(input.name == 'userName'){
            if(input.value === '') return 'username is required'
        }
        if(input.name == 'password'){
            if(input.value === '') return 'password is required'
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let error = this.validate()
        this.setState({error:error||{}})
        if(error)
            return false
        console.log('submitted');
    }
    handleChange = (e)=>{
        let error = {...this.state.error}
        let errorMessage = this.validateProperty(e.currentTarget)
        if(errorMessage) error[e.currentTarget.name] = errorMessage
        else delete error[e.currentTarget.name]
        let account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account,error})
    }
    render() { 
        let {account,error} = this.state
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Login Form</h1>
                <Input
                    name='userName'
                    label='User Name'
                    value={account.userName}
                    error={(error.userName)?error.userName:null}
                    onChange={this.handleChange}
                ></Input>
                <Input
                    name='password'
                    label='Password'
                    type='password'
                    value={account.password}
                    error={(error.password)?error.password:null}
                    onChange={this.handleChange}
                ></Input>
                <button className="btn btn-primary" disabled={this.validate()}>Submit</button>
            </form>  
        );
    }
}
 
export default Login;