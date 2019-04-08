
const SET_AUTHED_USER = 'SET_AUTHED_USER'

export default function authedUser (state = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.id
        default:
            return state
    }
}