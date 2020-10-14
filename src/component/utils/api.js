import axios from 'axios';

const host = 'http://localhost:8080';

const API = {
    login: (username, pass, success) => {
        axios.post(`${host}/api/users/login`, {username:username, password: pass})
        .then(res => {
            success(res);
        });
    },
    
    getCandidate: (success) => {
        axios.get(`${host}/api/Candidates`)
        .then(res => {
            success(res);
        })
    },
    tambahSuara: (candidate,success) => {
        axios.patch(`${host}/api/Candidates`, candidate)
        .then(res=> {
            success(res);
        })
    },
    sudahMemilih: (user,token,success) => {
        axios.patch(`${host}/api/users?access_token=${token}`, user)
        .then(res => {
            success(res);
        })
    },
    getUser: (userId,token,success) => {
        axios.get(`${host}/api/users/${userId}?access_token=${token}`)
        .then(res => {
            success(res)
        })
    }
}

export default API;