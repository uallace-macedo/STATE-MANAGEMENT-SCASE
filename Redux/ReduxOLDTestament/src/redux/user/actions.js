import UserActionTypes from "./action-types"

export const loginUser = (payload) => {
    return { type: UserActionTypes.LOGIN, payload }
}

export const logoutUser = (payload) => {
    return { type: UserActionTypes.LOGOUT, payload }
}