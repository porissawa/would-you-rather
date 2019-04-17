import {RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER} from '../actions/questions'

export function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case SAVE_QUESTION_ANSWER:
            const {id, authedUser, answer} = action.vote
            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[id][answer],
                        votes: [...state[id][answer].votes, authedUser]
                    }
                }
            }
        default:
            return state
    }
}