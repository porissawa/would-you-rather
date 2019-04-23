import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  
    state = {
      optionOne: '',
      optionTwo: '',
      toHome: false
    }
  
    handleChange = (e) => {
      const text = e.target.value
      if (e.target.id === 'optionOne') {
        this.setState(() => ({
          ...this.state,
          optionOne: text,
  
        }))
      }
      else {
        this.setState(() => ({
          ...this.state,
          optionTwo: text
        }))
      }
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      const { optionOne, optionTwo } = this.state
      const { dispatch, id } = this.props
  
      dispatch(handleAddQuestion(optionOne, optionTwo))
  
      this.setState(() => ({
        optionOne: '',
        optionTwo: '',
        toHome: id ? false : true,
      }))
    }

    render() {
        const { optionOne, optionTwo, toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/home' />
        }
    
        return (
          <div>
            <div className="card card-question">
              <div className="card-body">
                <div className="question-header">
                <h4 className="card-title">Would you rather ...</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <input
                    required
                    type="text"
                    placeholder="Option One"
                    id="optionOne"
                    value={optionOne}
                    onChange={this.handleChange} />
                  <hr/>
                  <input
                    required
                    type="text"
                    placeholder="Option Two"
                    id="optionTwo"
                    value={optionTwo}
                    onChange={this.handleChange} />
                  <button 
                    type="submit"
                    className="new-question-button"
                    disabled={optionOne === '' || optionTwo === ''}>
                    Create New Question
                  </button>
                </form> 
              </div>
            </div>
          </div>
        )
    }
}  

export default connect()(NewQuestion)