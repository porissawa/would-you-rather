import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleUserLogin} from '../actions/shared'

class Login extends Component {
    
    state = {
        redirectToHome: false,
        selectedUser: null,
    }

    handleChange = (e) => {
        const selUser = e.target.value
        this.setState(() => ({
            selectedUser: selUser
        }))
    }

    handleSubmitLogin = (e) => {
        e.preventDefault()
        if (this.state.selectedUser === undefined || this.state.selectedUser === null) {
            alert('Please, insert login info.')
        } else {
            this.props.dispatch(handleUserLogin(this.state.selectedUser))
            .then(() => {
                this.setState(() => ({
                    redirectToHome: true
                }))
            })
        }
    }

    render() {
        const {redirectToHome} = this.state
        const {users} = this.props

        if (redirectToHome) { 
            return <Redirect to='/home' />
        }    
     
        return(
            <div className='login'>
                <div>
                    <div className='login-welcome'>
                        <h3>Would You Rather?</h3>
                        <img src='../WYR_logo.jpg' className='app-logo' alt='app logo' />
                        <p>Please choose an account from the menu below to continue:</p>
                    </div>
                    <div className='login-form-container'>
                        <form className='login-form' onSubmit={this.handleSubmitLogin}>
                            <select id='user-select' onChange={this.handleChange} defaultValue='Select User'>
                                <option key='none' value='Select User' disabled>Select User</option>
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}
                            </select>
                            <br/><br/>
                            <button type='submit'>Sign in</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = ({users}) => ({
    users: Object.values(users),
})

export default connect(mapStateToProps)(Login)