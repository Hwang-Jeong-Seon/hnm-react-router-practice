function getProducts(searchQuery){
    return async (dispatch, getState) => {
        let url = `http://localhost:3030/products?q=${searchQuery}`
        let res = await fetch(url)
        let data = await res.json()
        dispatch({type: 'GET_PRODUCT_SUCCESS', payload:{data}})
    }
}

// productAction이라는 객체를 반환할건데 이 객체 안에 getProduct라는 함수를 담아서 리턴할거야
export const productAction = {getProducts}