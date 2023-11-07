
function login(id, pwd){
    return async (dispatch, getState)=>{
        dispatch({type: 'LOGIN_SUCCESS', payload:{id, pwd}})
    }
}
export const loginAction={login}