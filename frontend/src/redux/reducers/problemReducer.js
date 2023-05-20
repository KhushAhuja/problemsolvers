import { GET_PROBLEMS_FAIL, GET_PROBLEMS_REQUEST, GET_PROBLEMS_SUCCESS } from "../constants/problemsConstants"

export const getProblemsReducer = (state={},action) =>{
    switch (action.type) {
        case GET_PROBLEMS_REQUEST:
            return {loading:true}
        case GET_PROBLEMS_SUCCESS:
            return {loading:false, Allproblems:action.payload}
        case GET_PROBLEMS_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

