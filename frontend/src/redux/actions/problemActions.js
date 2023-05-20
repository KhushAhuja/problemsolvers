import axios from "axios"
import { GET_PROBLEMS_FAIL, GET_PROBLEMS_REQUEST, GET_PROBLEMS_SUCCESS } from "../constants/problemsConstants"

export const getProblems = () => async(dispatch) => {
    try {
   
        
        dispatch({type: GET_PROBLEMS_REQUEST})

        const {data} = await axios.get('/api/problems/getProblems')

        
        dispatch({
            type: GET_PROBLEMS_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: GET_PROBLEMS_FAIL,
                payload: 
                error.response && error.response.data.message     
                ? error.response.data.message
                : error.message
            })
        }
}
