import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
import { withRouter, Link } from 'react-router-dom'
import { MdStar } from 'react-icons/md'
import ProgressBar from 'react-bootstrap/ProgressBar'

class AnsweredQuestion extends Component {
  render() {
    const { question, authedUser, mode } = this.props

    if (question === null) {
      return <p> This question does not exist </p>
    }

    const { id, name, avatar, timestamp, optionOne, optionTwo } = question 

    const optionOneVotes = optionOne.votes.length 
      ? optionOne.votes.length
      : 0

    const optionTwoVotes = optionTwo.votes.length 
      ? optionTwo.votes.length
      : 0

    const totalVoteNumber = optionOneVotes + optionTwoVotes
    const optionOnePercentage = parseFloat(100 * optionOneVotes / totalVoteNumber).toFixed(2)
    const optionTwoPercentage = parseFloat(100 * optionTwoVotes / totalVoteNumber).toFixed(2)

    const isOptionOneSelected = optionOne.votes.includes(authedUser)

    return (
      <div>
        <div className="card card-question">
          <div>
            {
              mode === 'max'
                ? <Link to='/home'>
                    Home
                  </Link>
                : <Link to={`/question/${id}`}>
                    Question
                  </Link>
            }
          </div>
          <div className="card-body">
            <h5 className="card-title">Results for</h5>
            <div className="question-header"> 
              <img 
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
              />
              <div className="header-info">
                <span>
                  {name}'s question
                </span>
                <div>at {timestamp}</div> 
              </div>
            </div>
            <div className="result-group-one">
              <div className="option-text">
                {optionOne.text}
                {
                  isOptionOneSelected
                  ? <MdStar color="#d79922"/>
                  : <div></div>
                }                
              </div>
              <ProgressBar className="result-bar" now={optionOnePercentage} label={`${optionOnePercentage}%`} />
              <p className="text-center">{optionOneVotes} of {totalVoteNumber} </p>  
            </div>
            <div className="result-group-two">
              <div className="option-text">
                {optionTwo.text}
                {
                  isOptionOneSelected
                  ? <div></div> 
                  : <MdStar color="#d79922"/>
                }
              </div>
              <ProgressBar className="result-bar" now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
              <p className="text-center">{optionTwoVotes} of {totalVoteNumber} </p> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps({authedUser, users, questions}, { id, mode }) {
  const question = questions[id]
  return {
    authedUser,
    mode,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}
export default withRouter(connect(mapStateToProps)(AnsweredQuestion))