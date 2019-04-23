export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'
export const ADD_QUESTION_CREATED = 'ADD_QUESTION_CREATED'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer
  }
}

export function addQuestionToUser(question) {
  return {
    type: ADD_QUESTION_TO_USER,
    question
  }
}

export function addAnsweredQuestion({ authedUser, qid, answer }) {
    return {
      type: ADD_ANSWER_TO_USER,
      authedUser,
      qid,
      answer
    }
  }
  
  export function addCreatedQuestion( question, authedUser) {
    return {
      type: ADD_QUESTION_CREATED,
      question,
      authedUser
    } 
  }