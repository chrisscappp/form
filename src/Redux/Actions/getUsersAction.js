import {GET_USERS, SET_IS_LOADING} from "../Constants/users";
import {SET_IS_ERROR} from "../Constants/error"
import {getData} from '../../api/get/getData'


export const setUsers = (data) => {
    return {
        type: GET_USERS,
        payload : data
    }
}

export const setIsLoading = (value) => {
    return {
        type: SET_IS_LOADING,
        payload: value
    }
}

const setIsError = () => {
    return {
        type: SET_IS_ERROR
    }
}


export const getUsers = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        getData()
            .then((response) => {
                if (response.status === 200) {
                    dispatch(setUsers(response.data))
                    dispatch(setIsLoading(false))
                }
            })
            .catch((err) => {
                dispatch(setIsError())
                dispatch(setIsLoading(false))
            })
    }
}