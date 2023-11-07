import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducer'
// import rootReducer from './reducer/index' // index 파일이 기준이므로 경로에 굳이 index.js 안넣어줘도 됨
import thunk from "redux-thunk";

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store