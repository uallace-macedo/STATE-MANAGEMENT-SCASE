import UserActionTypes from './action-types';

const initialState = {
    currentUser:  {
        name: '-',
        lastname: '-'
    }
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case UserActionTypes.LOGIN: return { ...state, currentUser: action.payload}
        case UserActionTypes.LOGOUT: {
            return { ...state, currentUser: {
                ...state.currentUser,
                name: '-',
                lastname: '-'
            }}
        }
        default: return state
    }
}

export default userReducer;