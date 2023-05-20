import {createStore,combineReducers,applyMiddleware} from 'redux'

//^ Used to insert consition before dispatch
import thunk from 'redux-thunk'

//^ Setting and getting ready for redux extension
import {composeWithDevTools} from 'redux-devtools-extension'

import {  userLoginReducer, userRegisterReducer } from './redux/reducers/userReducer'
import { getProblemsReducer } from './redux/reducers/problemReducer'

const reducer = combineReducers({
    userLogin        : userLoginReducer,
    userRegister     : userRegisterReducer,
    getAllProblems: getProblemsReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')): null


const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store


