import React, { Component } from 'react';
import Input from './common/input';
import { saveEmployee } from '../services/employeeService';
import {useNavigate} from "react-router-dom"

class RegisterFrom extends Component {
    state = {
        account:{fullNameEn:'',email:'',mobile:'',militaryNumber:'',userName:'',password:''},
        error:{}
    } 

    validate =()=>{
        let error = {}
        let {account} = this.state
    
        if(account.fullNameEn === '')
            error.fullNameEn = 'full name is required'
        if(account.militaryNumber === '')
            error.militaryNumber = 'Military number is required'
        if(account.email === '')
            error.email = 'Email is required'
        if(account.mobile === '')
            error.mobile = 'mobile number is required'
        if(account.userName === '')
            error.userName = 'User name is required'
        if(account.password === '')
            error.password = 'Password is required'
        return Object.keys(error).length === 0?null:error
    }
    validateProperty=(input)=>{
        if(input.name === 'fullNameEn'){
            if(input.value === '') return 'full name is required'
        }
        if(input.name === 'militaryNumber'){
            if(input.value === '') return 'Military Number is required'
        }
        if(input.name === 'email'){
            if(input.value === '') return 'Email is required'
        }
        if(input.name === 'mobile'){
            if(input.value === '') return 'Mobile is required'
        }
        if(input.name === 'userName'){
            if(input.value === '') return 'username is required'
        }
        if(input.name === 'password'){
            if(input.value === '') return 'password is required'
        }
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        let error = this.validate()
        this.setState({error:error||{}})
        if(error)
            return false
        try{
            await saveEmployee(this.state.account)
            //console.log(response)
            alert('Employee saved on the databse')
            this.props.navigate('/');
        }
        catch(e){
            if(e.response && e.response.status === 401)
            {
                alert("User name is note available, please chose another one!")
            }
            else{
                console.log(e)
                alert('Something went wrong when saving movie')
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
                <h1>Register Form</h1>
                <Input
                    name='militaryNumber'
                    label='Military Number'
                    value={account.militaryNumber}
                    error={(error.militaryNumber)?error.militaryNumber:null}
                    onChange={this.handleChange}
                ></Input>
                <Input
                    name='fullNameEn'
                    label='Full fullNameEn'
                    value={account.name}
                    error={(error.fullNameEn)?error.fullNameEn:null}
                    onChange={this.handleChange}
                ></Input>
                <Input
                    name='email'
                    label='Email'
                    value={account.email}
                    error={(error.email)?error.email:null}
                    onChange={this.handleChange}
                ></Input>
                <Input
                    name='mobile'
                    label='Mobile'
                    value={account.mobile}
                    error={(error.mobile)?error.mobile:null}
                    onChange={this.handleChange}
                ></Input>
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
  return <RegisterFrom navigate={navigate}  />;
};
 
export default FormComponentWrapper;