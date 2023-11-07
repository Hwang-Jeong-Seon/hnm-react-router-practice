let initialState = {

}
function productReducer(state=initialState, action){
    let {type, payload} = action
    switch(type){
        default :
            console.log(payload)
            return;
    }
}
export default productReducer