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

const Button = props => <button className='button' onClick={() => props.getUser()}>Adicionar usuário</button>

export default connect(mapStateToProps, mapDispatchToProps)(Button);
