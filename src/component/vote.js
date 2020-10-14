import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as AuthActions from '../storage/actions/authAction';
import Candidate from './Candidate';

class Vote extends Component{
    componentDidMount() {
        this.props.getCandidate();
        this.props.getUser(this.props.auth.user.user.userId, this.props.auth.token);
    }

    render(){
        return(
            <div>
                 {this.props.auth.users.isVoted === false?
                    <div>
                        <h1>Vote</h1>
                        <div className="container" style={{display: 'flex',
                            paddingLeft: '150px',
                            paddingRight: '150px'
                        }}>
                        
                            {this.props.auth.candidate.map((candidate, i) => {
                                return(
                                    <Candidate
                                        candidate={candidate}
                                        key={i}/>
                                )
                            })}
                        </div>
                        <button className="btn btn-primary" onClick={e=>{
                            console.log(localStorage.clear())
                            window.location.reload(false);
                        }}>Logout</button>
                    </div>
                :<div>
                    <h1>already voted</h1>
                    <h3>kembali ke halaman awal</h3>
                    <button className="btn btn-primary" onClick={e=>{
                            console.log(localStorage.clear())
                            window.location.reload(false);
                        }}>Logout</button>    
                </div>}  		
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
        getCandidate: () => {
            dispatch(AuthActions.getCandidate())
        },
        getUser: (userId, token) => {
            dispatch(AuthActions.getUser(userId,token))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Vote);