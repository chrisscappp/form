import { GET_USERS, SET_IS_LOADING } from "../../Constants/users";
import { SET_IS_ERROR } from "../../Constants/error";

const defaultState = {
    users: [],
    isLoading: true,
    isError: false,
}

export default function usersReducer (state = defaultState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_IS_LOADING :
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_IS_ERROR :
            return {
                ...state,
                isError: !state.isError
            }
        default:
            return state
    }
}