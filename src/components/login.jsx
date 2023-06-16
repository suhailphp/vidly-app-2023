import React, { Component } from 'react';
class Login extends Component {
    state = {
        account:{userName:'',password:''}
    } 
    handleChange = (e)=>{
        let account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account})
    }
    render() { 
        return (
            <form >
                <h1>Login Form</h1>
                <div className="mb-0">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input type="text" onChange={this.handleChange} name='userName' id='userName' className="form-control" />
                    <div className="form-text">Please enter your username</div>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" onChange={this.handleChange}  className="form-label">Password</label>
                    <input type="password" name='password' id='password' className="form-control" />
                    <div className="form-text">Please enter your password</div>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>  
        );
    }
}
 
export default Login;