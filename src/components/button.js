import React from 'react';
import { gettingUser, gettingUserSuccess, gettingUserFail } from '../actions/userActions';
import { connect } from 'react-redux';
import './button.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(gettingUser()),
    getUserSuc: () => dispatch(gettingUserSuccess()),
    getUserFail: () => dispatch(gettingUserFail())
});

const Button = props => {
    let info = {}
    switch (props.type) {
        case 'success':
            info = { action: props.getUserSuc, title: 'success' };
            break;
        case 'failure':
            info = { action: props.getUserFail, title: 'failure' };
            break;
        default:
            info = { action: props.getUser, title: 'get' };
            break;
    }

    return (
        <button className='button' onClick={() => info.action()}>{ info.title.toUpperCase() }</button>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);
