import React from 'react';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';
import './button.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addTodoItem: item => dispatch(addTodo(item)),
});

const Button = props => <button className='button' onClick={() => props.addTodoItem(props.item)}>Adicionar tarefa</button>

export default connect(mapStateToProps, mapDispatchToProps)(Button);
