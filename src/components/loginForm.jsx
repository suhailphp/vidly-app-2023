import React, { Component } from 'react';
import Input from './common/input';
import { loginEmployee } from '../services/authService';
import {useNavigate} from "react-router-dom"

class LoginFrom extends Component {
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
        if(input.name === 'userName'){
            if(input.value === '') return 'username is required'
        }
        if(input.name === 'password'){
            if(input.value === '') return 'password is required'
        }
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        let error = this.validate()
        this.setState({error:error||{}})
        if(error)
            return false
        try{
            let response = await loginEmployee(this.state.account)
            localStorage.setItem('token',response.data)
            alert('Employee Logged in')
            //this.props.navigate('/');
            window.location="/";
        }
        catch(e){
            if(e.response && e.response.status === 401){
                const error = this.state
                error.userName = e.response.data
                this.setState({error})
                //alert("User name is note available, please chose another one!")
            }
            else{
                console.log(e)
                alert('Something went wrong !')
            }
        }
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
 
const FormComponentWrapper = () => {
  const navigate = useNavigate();
  return <LoginFrom navigate={navigate}  />;
};
 
export default FormComponentWrapper;