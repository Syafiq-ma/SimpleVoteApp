import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as AuthActions from '../storage/actions/authAction';

class Candidate extends Component{
    render(){
        return(
            <div className="jumbotron d-flex align-items-center">
                    <div className="vote-wrapper">
                        <div className="container">
                            <h1>{this.props.candidate.NoUrut}</h1>
                            <h3>{this.props.candidate.Nama}</h3>
                            <h5>visi</h5>
                            <p>{this.props.candidate.Visi}</p>
                            <h5>misi</h5>
                            <p>{this.props.candidate.Misi}</p>
                            <button className="btn btn-primary" onClick={e=>{
                                e.preventDefault();
                                this.props.auth.users.isVoted= true
                                this.props.candidate.JumlahPemilih+=1
                                this.props.tambahSuara(this.props.candidate)
                                this.props.sudahMemilih(this.props.auth.users,this.props.auth.token)
                            }}>Vote</button>
                        </div>
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
        tambahSuara: (newcandidate) => {
            dispatch(AuthActions.tambahSuara(newcandidate))
        },
        sudahMemilih: (user,token) => {
            dispatch(AuthActions.sudahMemilih(user,token))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Candidate);