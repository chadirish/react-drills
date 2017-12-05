import React, { Component } from 'react';

class Password extends Component{
    constructor(){
        super();

        this.state = {
            username:'',
            password:''
        }

        this.login = this.login.bind(this);
    }

    usernameInput(name){
        this.setState({
            username: name
        })
    }

    passwordInput(pass){
        this.setState({
            password: pass
        })
    }

    login(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return (
            <div>
              <input onChange={ (e) => this.usernameInput( e.target.value ) } type='text'/>
              <input onChange={ (e) => this.passwordInput( e.target.value ) } type="text"/>
              <button onClick={ this.login }>Login</button>
            </div>
          )
    }
}
export default Password;