const SET_AUTHED_USER = 'SET_AUTHED_USER'

export default function authedUser (state = [], action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.authedUser
        default:
            return state
    }
}