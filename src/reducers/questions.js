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
            return {
                ...state,
                //ADD SAVE ANSWER
            }
        default:
            return state
    }
}