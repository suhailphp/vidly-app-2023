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
    handleSubmit=(e)=>{
        e.preventDefault();
        let error = this.validate()
        if(error){
            this.setState({error})
            return false
        } 
        console.log('submitted');
    }
    handleChange = (e)=>{
        let account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account})
    }
    render() { 
        let {account,error} = this.state
        return (
            <form onSubmit={this.handleSubmit} className='' >
                <h1>Login Form</h1>
                <Input
                    name='userName'
                    label='User Name'
                    value={account.userName}
                    error={(error.password)?error.password:null}
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
                <button className="btn btn-primary">Submit</button>
            </form>  
        );
    }
}
 
export default Login;