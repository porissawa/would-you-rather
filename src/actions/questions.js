import {saveQuestion} from '../utils/api'
import {addCreatedQuestion} from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function saveQuestionAnswer(question) {
    return {
        type: SAVE_QUESTION_ANSWER,
        question,
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
      
      return saveQuestion({
        author: authedUser, 
        optionOneText: optionOne,
        optionTwoText: optionTwo
      })
        .then((question) => dispatch(addQuestion(question)))
        .then((question) => dispatch(addCreatedQuestion(question, authedUser)))
    } 
  }