import React, { Component } from 'react'
import { gettingUser, gettingUserSuccess, gettingUserFail } from '../actions/userActions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    status: state.user.status
})

const mapDispatchToProps = dispatch => ({
    getUser: () => {
        console.log('teste')
        dispatch(gettingUser())
    }
})

class Button extends Component {
    render() {
        console.log('status', this.props.status)
        return (
            <div>
                <button onClick={() => this.props.getUser}>Action</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)
