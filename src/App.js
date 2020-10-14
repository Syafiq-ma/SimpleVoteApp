import React, {Component} from 'react';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import './App.css';
import './assets/style.css';

import {connect} from 'react-redux';

//pages
import Login from './component/login';
import Vote from './component/vote';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Route
          path="/"
          exact={true}
          render={props => {
            return(
              <div>
                {this.props.auth.token?
                  <Vote/>
                  :<Redirect to="/login"/>}
              </div>
            )
          }}
        />
        <Route
          path="/vote"
          render={props => {
            return(
              <div>
                {this.props.auth.token?
                  <Vote/>
                  :<Redirect to="/login"/>}
              </div>
            )
          }}
        />
        <Route
          path='/login'
          render={props => {
            return(
              <div>
                {this.props.auth.token?
                  <Redirect to="/vote"/>
                  :<Login/>}
              </div>
            )
          }}
        />
        </BrowserRouter>
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
      
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
