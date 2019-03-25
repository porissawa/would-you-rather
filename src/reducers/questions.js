const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const ADD_QUESTION = 'ADD_QUESTION'

export default function questions (state = {}, action) {
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
        default:
            return state
    }
}