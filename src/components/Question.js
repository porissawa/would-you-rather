import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Question extends Component {
    render() {
        const {question, author} = this.props

        return(
            <div className='question' key={question.id}>
                <div className='question-author'>{author.name} asks:</div>
                <div className='question-body'>
                    <div className='question-author-avatar'>
                        <img src={author.avatarURL} alt={`${author.name}'s avatar`} />
                    </div>
                    <p className='WYR'>Would You Rather:</p>
                    <p>{question.optionOne.text}</p>
                    <p className='WYR-or'>OR</p>
                    <p>{question.optionTwo.text}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Question))