import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as AuthActions from '../storage/actions/authAction';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
    }
    render(){
        return(
            <div className="container">
                
                <div className="form-wrapper">
                <h1>LOGIN</h1>
                <form
                >
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        type='text' 
                        placeholder='username'
                        className="form-control"
                        value={this.props.username}
                        onChange={e=>this.setState({username:e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>NIM</label>
                        <input 
                        type='text' 
                        placeholder='NIM'
                        className="form-control"
                        value={this.props.password}
                        onChange={e=>this.setState({password:e.target.value})}
                        />
                    </div>
                    <p className="text-danger text-center">{this.props.auth.error || ''}</p>
                    <button onClick={e => {
                    e.preventDefault();
                    this.props.login(this.state.username, this.state.password)
                }}className="btn btn-primary">Login</button>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, pass) => {
            dispatch(AuthActions.login(username,pass))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);