let initialState={
    id : '',
    pwd : '',
    authenticate : false,
}

function loginReducer(state=initialState, action){
    let {type, payload} = action
    switch(type){
        case 'LOGIN_SUCCESS':
            return {...state, id : payload.id, pwd : payload.pwd, authenticate: true}
        default:
            return {...state}
    }
}

export default loginReducer