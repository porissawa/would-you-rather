import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users}) => {
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(''))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleUserLogin(id) {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            const authedUser = Object.values(users).find((user) => (user.id === id))
            dispatch(setAuthedUser(authedUser))
            dispatch(receiveQuestions(questions))
        })
    }
}