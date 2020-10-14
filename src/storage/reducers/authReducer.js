const defaultState = {
    user: {},
    candidate: [],
    users: {},
}

const auth = (state=defaultState, action) => {
    switch(action.type){
        case 'LOGIN': 
            return{
                ...state,
                user:action.payload,
                token: action.payload.token
            }
        case 'GOT_CANDIDATE':
            return{
                ...state,
                candidate:action.payload
            }
        case 'GOT_USER':
            return{
                ...state,
                users:action.payload
            }
        case 'SUDAH_MEMILIH':
            return{
                ...state,
                users:action.payload
            }
        default:
            return state
    }
}

export default auth;