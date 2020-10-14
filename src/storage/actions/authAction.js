import API from '../../component/utils/api';

export const login = (username, pass) => {
    return (dispatch) => {
        API.login(username,pass,res => {
            dispatch({
                type: 'LOGIN',
                payload: {
                    user:res.data,
                    token:res.data.id,                    
                }
            })    
        })
    }
}

export const getCandidate = () => {
    return (dispatch) => {
        API.getCandidate(res => {
            dispatch({
                type: 'GOT_CANDIDATE',
                payload: res.data
            })
        })
    }
}

export const tambahSuara = (candidate) => {
    return (dispatch) => {
        API.tambahSuara(candidate, res => {
            dispatch({
                type: 'JUMLAH_SUARA',
                payload: res.data
            })
        })
    }
}

export const getUser = (userId, token) => {
    return (dispatch) => {
        API.getUser(userId,token, res => {
            dispatch({
                type:'GOT_USER',
                payload:res.data
            })
        })
    }
}

export const sudahMemilih = (user,token) => {
    return (dispatch) => {
        API.sudahMemilih(user,token, res => {
            dispatch({
                type:'SUDAH_MEMILIH',
                payload:res.data
            })
        })
    }
}
