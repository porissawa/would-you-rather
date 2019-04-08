import users from '../utils/_DATA'
import {RECEIVE_USERS} from '../actions/users'

let initialState = users

export default function getUsers (state = initialState, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }
        default:
            return state
    }
}